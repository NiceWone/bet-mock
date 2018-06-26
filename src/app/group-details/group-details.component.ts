import {Component, OnInit} from '@angular/core';
import {Group} from '../model/group';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GroupService} from '../services/group.service';
import {Match} from '../model/match';
import {MatchService} from '../services/match.service';

@Component({
  selector: 'app-group-stage-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  group: Group;
  matches: Match[] = [];
  groupLoadFlag = false;
  matchesLoadFlag = false;
  displayedColumns = ['id', 'name', 'matches', 'points'];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private matchService: MatchService,
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
      .subscribe(group => {
        this.group = group;
        this.groupLoadFlag = true;
        this.tryCalc();
      });
  }

  goBack(): void {
    this.location.back();
  }

  private getGroupMatches() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.matchService.getMatchesByGroup(id)
      .subscribe(m => {
          this.matches = m;
          this.matchesLoadFlag = true;
          this.tryCalc();
        }
      );
  }

  private tryCalc() {
    if (this.groupLoadFlag === true && this.matchesLoadFlag === true) {
      this.matches.forEach(m => this.calc(m, this.group));
      this.sortTeams(this.group);
    }
  }

  private calc(match: Match, gr: Group): void {

    const team1 = gr.teams.find(x => x.id === match.team1.id);
    const team2 = gr.teams.find(x => x.id === match.team2.id);

    if (match.scoreTeam1 != null && match.scoreTeam2 != null) {
      if (isNaN(team1.matches)) {
        team1.matches = 0;
        team1.points = 0;
      }
      if (isNaN(team2.matches)) {
        team2.matches = 0;
        team2.points = 0;
      }
      team1.matches++;
      team2.matches++;

      if (match.scoreTeam1 === match.scoreTeam2) {
        team1.points++;
        team2.points++;
      } else if (match.scoreTeam1 > match.scoreTeam2) {
        team1.points += 3;
      } else {
        team2.points += 3;
      }
    }
  }

  private sortTeams(gr: Group) {
    gr.teams.sort((a, b) => {
      return b.points - a.points;
    });
  }
}
