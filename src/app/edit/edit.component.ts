import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../services/match.service';
import {Match} from '../model/match';
import {Group} from '../model/group';
import {Team} from '../model/team';
import {GroupService} from '../services/group.service';
import {TeamService} from '../services/team.service';
import {User} from '../model/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  match: Match;
  group: Group;
  team: Team;
  user: User;
  teams: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private groupService: GroupService,
    private teamService: TeamService,
    private userService: UserService,
    private location: Location,
  ) {
  }

  addTeamTemplate() {
    if (this.group.teams !== undefined && this.group.teams[this.group.teams.length - 1] !== null) {
      this.group.teams.push(null);
    }
  }

  ngOnInit() {
    this.getContent();
    this.getTeams();
  }

  private getContent() {
    const path = this.route.snapshot.url[1].path;
    const id = +this.route.snapshot.paramMap.get('id');
    if (id === 0) {
      switch (path) {
        case 'match': {
          this.match = new Match();
          break;
        }
        case 'group': {
          this.group = new Group();
          break;
        }
        case 'team': {
          this.team = new Team();
          break;
        }
        case 'user': {
          this.user = new User();
          break;
        }
        default: {
          console.log('Invalid choice');
          break;
        }
      }
      return;
    }
    switch (path) {
      case 'match': {
        this.matchService.getMatch(id)
          .subscribe(match => this.match = match);
        break;
      }
      case 'group': {
        this.groupService.getGroup(id)
          .subscribe(group => this.group = group);
        break;
      }
      case 'team': {
        this.teamService.getTeam(id)
          .subscribe(team => this.team = team);
        break;
      }
      case 'user': {
        this.userService.getUser(id)
          .subscribe(user => this.user = user);
        break;
      }
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  private getTeams() {
    this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
  }

  goBack(): void {
    this.location.back();
  }

  saveMatch(): void {
    if (isNaN(this.match.id)) {
      this.matchService.save(this.match)
        .subscribe(() => this.goBack());
    } else {
      this.matchService.update(this.match)
        .subscribe(() => this.goBack());
    }
  }

  deleteMatch(id: number): void {
    this.matchService.deleteMatch(id)
      .subscribe(() => this.goBack());
  }

  saveGroup(): void {
    if (isNaN(this.group.id)) {
      this.groupService.save(this.group)
        .subscribe(() => this.goBack());
    } else {
      this.groupService.update(this.group)
        .subscribe(() => this.goBack());
    }
  }

  deleteGroup(id: number): void {
    this.groupService.deleteGroup(id)
      .subscribe(() => this.goBack());
  }

  saveTeam(): void {
    if (isNaN(this.team.id)) {
      this.teamService.save(this.team)
        .subscribe(() => this.goBack());
    } else {
      this.teamService.update(this.team)
        .subscribe(() => this.goBack());
    }
  }

  deleteTeam(id: number): void {
    this.teamService.deleteTeam(id)
      .subscribe(() => this.goBack());
  }

  saveUser(): void {
    if (isNaN(this.user.id)) {
      this.userService.saveUser(this.user)
        .subscribe(() => this.goBack());
    } else {
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe(() => this.goBack());
  }
}
