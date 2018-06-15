import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../model/group';

@Component({
  selector: 'app-group-stage-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  @Input() group: Group;

  constructor() { }

  ngOnInit() {
  }

}
