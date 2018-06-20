import {Component, OnInit} from '@angular/core';
import {MatchService} from '../services/match.service';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.css']
})
export class PlayOffComponent implements OnInit {

  testString = [];

  constructor(private matchService: MatchService,
              private groupService: GroupService) {
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    // this.matchService.getMatches().subscribe(data => {
    this.groupService.getGroups().subscribe(data => {
      this.testString = data;
      console.log(data);
    });
  }
}
