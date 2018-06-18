import {Component, OnInit} from '@angular/core';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-play-off',
  templateUrl: './play-off.component.html',
  styleUrls: ['./play-off.component.css']
})
export class PlayOffComponent implements OnInit {

  private testString = 'cool';
  cars: Array<any>;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.matchService.getTestDate().subscribe(data => {
      // this.cars = data;
      console.log(data);
    });
  }

}
