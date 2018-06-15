import {Component, OnInit} from '@angular/core';
import {log} from 'util';
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

  groups: Group[];
  matches: Match[];
  groupsSelected;

  constructor(
    private groupsService: GroupService,
    private matchService: MatchService) {
  }

  ngOnInit() {
    this.getGroups();
    this.getMatches();
  }

  showDetails(id: number) {
    this.groupsSelected = this.groups[id];
    const start = id * 6;
    const end = start + 6;
    for (let i = start; i < end; i++) {
      const team1 = this.matches[i].firstTeam.name;
      const team2 = this.matches[i].secondTeam.name;
      const score1 = this.matches[i].scoreFirstTeam;
      const score2 = this.matches[i].scoreSecondTeam;
      const date = this.matches[i].date;
      log(date + '   ---   ' + team1 + ' ' + score1 + ':' + score2 + ' ' + team2);
    }
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(matches => this.matches = matches);
  }
}
