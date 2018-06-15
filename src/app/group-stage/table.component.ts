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
      log(this.matches[i].firstTeam.name + ' : ' + this.matches[i].secondTeam.name);
    }
  }
}
