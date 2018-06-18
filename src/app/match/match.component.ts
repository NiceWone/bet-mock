import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match: Match;

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getMatch();
  }

  private getMatch() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.matchService.getMatch(id)
      .subscribe(match => this.match = match);
  }

  goBack(): void {
    this.location.back();
  }

  updateMatch(): void {
    this.matchService.update(this.match)
      .subscribe(() => this.goBack());
  }

  showBets() {
    console.log('TODO :P');
  }
}
