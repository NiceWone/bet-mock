import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  matches: Match[] = [];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getMatches();
  }

  private getMatches() {
    this.matchService.getMatches()
      .subscribe(matches => this.matches = matches);
  }

}
