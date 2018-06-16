import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../services/match.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  passedMatches: Match[] = [];
  actualMatches: Match[] = [];
  futureMatches: Match[] = [];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getMatches();
  }

  private getMatches() {
    const temp = this.matchService.getMatches();
    temp.pipe(
      filter(match => match.date > new Date()))
      .subscribe(match => this.futureMatches.push(match));
    temp.pipe(
      filter(match => match.date < new Date()))
      .subscribe(match => this.passedMatches.push(match));
    this.futureMatches.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    this.actualMatches = this.futureMatches.slice(0, 4);
    this.futureMatches = this.futureMatches.slice(4, this.futureMatches.length);
  }
}
