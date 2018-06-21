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
  teams: Team[];

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private groupService: GroupService,
    private teamService: TeamService,
    private location: Location,
  ) {
  }

  addTeamTemplate() {
    this.group.teams.push(null);
    console.log(this.group);
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
      default: {
        console.log('Invalid choice');
        break;
      }
    }
  }

  private getTeams() {
    this.teamService.getTeamsWithFreeGroup()
      .subscribe(teams => this.teams = teams);
  }

  goBack(): void {
    this.location.back();
  }

  updateMatch(): void {
    this.matchService.update(this.match)
      .subscribe(() => this.goBack());
  }

  deleteMatch(id: number): void {
    this.matchService.deleteMatch(id)
      .subscribe(() => this.goBack());
  }

  updateGroup(): void {
    this.groupService.update(this.group)
      .subscribe(() => this.goBack());
  }

  deleteGroup(id: number): void {
    this.groupService.deleteGroup(id)
      .subscribe(() => this.goBack());
  }

  updateTeam(): void {
    this.teamService.update(this.team)
      .subscribe(() => this.goBack());
  }

  deleteTeam(id: number): void {
    this.teamService.deleteTeam(id)
      .subscribe(() => this.goBack());
  }
}
