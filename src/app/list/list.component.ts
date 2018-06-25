import {Component, OnInit} from '@angular/core';
import {Match} from '../model/match';
import {MatchService} from '../services/match.service';
import {Group} from '../model/group';
import {Team} from '../model/team';
import {GroupService} from '../services/group.service';
import {TeamService} from '../services/team.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  matches: Match[];
  groups: Group[];
  teams: Team[];
  users: User[];

  constructor(private matchService: MatchService,
              private groupService: GroupService,
              private teamService: TeamService,
              private userService: UserService,
              private route: ActivatedRoute,
              // private location: Location
  ) {
  }

  ngOnInit() {
    this.getContent();
  }

  private getContent() {
    const path = this.route.snapshot.url[0].path;
    if (path === 'matches') {
      this.matchService.getMatches()
        .subscribe(matches => this.matches = matches);
    } else if (path === 'groups') {
      this.groupService.getGroups()
        .subscribe(groups => this.groups = groups);
    } else if (path === 'users') {
      this.userService.getUsers()
        .subscribe(users => this.users = users);
    } else {
      this.teamService.getTeams()
        .subscribe(teams => this.teams = teams);
    }
  }

}
