import {Component, Input, OnInit} from '@angular/core';
import {log} from 'util';
import {MATCHES} from '../model/mock-matches';
import {Match} from '../model/match';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() group;

  matches: Match[];

  constructor() {
  }

  ngOnInit() {
    this.matches = MATCHES;
  }

  showDetails(id: number) {
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
}
