import {Component, Input, OnInit} from '@angular/core';
import {Group} from '../model/group';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GroupService} from '../services/group.service';
import {Match} from '../model/match';
import {MATCHES} from '../model/mock-matches';

@Component({
  selector: 'app-group-stage-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  @Input() group: Group;
  matches: Match[] = [];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getGroup();
    this.getGroupMatches();
  }

  private getGroup() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }

  goBack(): void {
    this.location.back();
  }

  private getGroupMatches() {
    this.matches = MATCHES.slice(0, 6);
    // this.groupService.getMatches(this.group.id);
  }
}
