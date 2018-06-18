import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../services/match.service';

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
    this.matchService.getMatches()
      .subscribe(matches => this.doShit(matches));
  }

  private doShit(matches: Match[]) {
    matches.sort(function (match1: Match, match2: Match) {
      if (match1.date > match2.date) {
        return 1;
      }
      if (match1.date < match2.date) {
        return -1;
      }
      return 0;
    });
    // WTF new Date()
    for (const match of matches) {
      if (new Date(match.date) > new Date()) {
        this.futureMatches.push(match);
      } else {
        this.passedMatches.push(match);
      }
    }

    this.actualMatches = this.futureMatches.slice(0, 4);
    this.futureMatches = this.futureMatches.slice(4, this.futureMatches.length);
  }
}
