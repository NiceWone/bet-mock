import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {GroupService} from '../services/group.service';
import {Group} from '../model/group';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-table',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[] = [];

  constructor(
    private groupService: GroupService,
    private matchService: MatchService,
  ) {
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .subscribe(groups => {
        this.groups = groups;
        // this.calculateAllGroups();
      });
  }

  private calculateAllGroups() {
    this.groups.forEach(group => this.calculateGroup(group));
  }

  private calculateGroup(group: Group) {
    this.matchService.getMatchesByGroup(group.id)
      .subscribe(matches => {
        matches.forEach(match => this.calc(match, group));
        this.sortTeams(group);
      });
  }

  private calc(match: Match, group: Group): void {

    const team1 = group.teams.find(x => x.id === match.team1.id);
    const team2 = group.teams.find(x => x.id === match.team2.id);

    if (match.scoreTeam1 != null && match.scoreTeam2 != null) {
      team1.matches++;
      team2.matches++;

      if (match.scoreTeam1 === match.scoreTeam2) {
        team1.points++;
        team2.points++;
      } else if (match.scoreTeam1 > match.scoreTeam2) {
        team1.points += 3;
      } else {
        team2.points += 3;
      }
    }
  }

  private sortTeams(gr: Group) {
    gr.teams.sort((a, b) => {
      return b.points - a.points;
    });
  }
}
