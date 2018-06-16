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
  matches: Match[] = [];

  constructor(
    private groupsService: GroupService,
    private matchService: MatchService) {
  }

  ngOnInit() {
    this.getGroups();
    this.getMatches();
    this.calculateAllGroups();
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(match => this.matches.push(match));
  }

  private calculateAllGroups() {
    this.groups.forEach(e => this.calculateGroup(e));
    this.groups.forEach(e => this.sortTeams(e));
  }

  private calculateGroup(gr: Group) {
    const start = gr.id * 6;
    const end = start + 6;

    for (let i = start; i < end; i++) {
      const match = this.matches[i];
      if (match.scoreFirstTeam != null && match.scoreSecondTeam != null) {
        match.firstTeam.matches++;
        match.secondTeam.matches++;

        if (match.scoreFirstTeam === match.scoreSecondTeam) {
          match.firstTeam.points++;
          match.secondTeam.points++;
        } else if (match.scoreFirstTeam > match.scoreSecondTeam) {
          match.firstTeam.points += 3;
        } else {
          match.secondTeam.points += 3;
        }
      }
    }
  }


  private sortTeams(gr: Group) {
    gr.teams.sort((a, b) => {
      return b.points - a.points;
    });
  }
}
