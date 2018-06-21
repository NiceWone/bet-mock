import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../services/match.service';
import {Match} from '../model/match';
import {Group} from '../model/group';
import {Team} from '../model/team';
import {GroupService} from '../services/group.service';
import {TeamService} from '../services/team.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  match: Match;
  group: Group;
  team: Team;

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private groupService: GroupService,
    private teamService: TeamService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getContent();
  }

  private getContent() {
    const path = this.route.snapshot.url[1].path;
    const id = +this.route.snapshot.paramMap.get('id');
    if (path === 'match') {
      this.matchService.getMatch(id)
        .subscribe(match => this.match = match);
    } else if (path === 'group') {
      this.groupService.getGroup(id)
        .subscribe(group => this.group = group);
    } else {
      this.teamService.getTeam(id)
        .subscribe(team => this.team = team);
    }
  }

  goBack(): void {
    this.location.back();
  }

  updateMatch(): void {
    this.matchService.update(this.match)
      .subscribe(() => this.goBack());
  }

  updateGroup() {
    this.groupService.update(this.group)
      .subscribe(() => this.goBack());
  }

  updateTeam() {
    this.teamService.update(this.team)
      .subscribe(() => this.goBack());
  }
}
