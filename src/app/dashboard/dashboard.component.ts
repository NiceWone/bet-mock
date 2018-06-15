import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  matches: Match[] = [];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getMatches();
  }

  private getMatches() {
    this.matchService.getMatches()
      .subscribe(matches => this.matches = matches.slice(1, 5));
  }
}
