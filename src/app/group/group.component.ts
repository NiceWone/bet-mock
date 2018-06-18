import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {GroupService} from '../services/group.service';
import {Group} from '../model/group';

@Component({
  selector: 'app-table',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[] = [];

  constructor(
    private groupService: GroupService) {
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .subscribe(groups => {
        this.groups = groups;
        this.calculateAllGroups();
      });
  }

  private calculateAllGroups() {
    this.groups.forEach(group => this.calculateGroup(group));
  }

  private calculateGroup(group: Group) {
    this.groupService.getMatches(group.id)
      .subscribe(matches => {
        matches.forEach(match => this.calc(match, group));
        this.sortTeams(group);
      });
  }

  private calc(match: Match, group: Group): void {

    const team1 = group.teams.find(x => x.id === match.firstTeam.id);
    const team2 = group.teams.find(x => x.id === match.secondTeam.id);

    if (match.scoreFirstTeam != null && match.scoreSecondTeam != null) {
      team1.matches++;
      team2.matches++;

      if (match.scoreFirstTeam === match.scoreSecondTeam) {
        team1.points++;
        team2.points++;
      } else if (match.scoreFirstTeam > match.scoreSecondTeam) {
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
