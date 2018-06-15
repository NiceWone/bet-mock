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

  groups: Group[];
  matches: Match[];

  constructor(
    private groupsService: GroupService,
    private matchService: MatchService) {
  }

  ngOnInit() {
    this.getGroups();
    this.getMatches();
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
