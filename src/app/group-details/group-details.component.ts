import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../model/group';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-group-stage-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  @Input() group: Group;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getGroup();
  }

  private getGroup() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }

  goBack(): void {
    this.location.back();
  }
}
