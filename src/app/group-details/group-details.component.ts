import {Component, OnInit} from '@angular/core';
import {Group} from '../model/group';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {GroupService} from '../services/group.service';
import {Match} from '../model/match';

@Component({
  selector: 'app-group-stage-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  group: Group;
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
      .subscribe(group => {
        this.group = group;
        this.groupService.getMatches(group.id)
          .subscribe(matches => {
            matches.forEach(match => this.calc(match, group));
            this.sortTeams(group);
          });
      });
  }

  goBack(): void {
    this.location.back();
  }

  private getGroupMatches() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupService.getMatches(id)
      .subscribe(m => this.matches = m);
  }

  private calc(match: Match, gr: Group): void {

    const team1 = gr.teams.find(x => x.id === match.team1.id);
    const team2 = gr.teams.find(x => x.id === match.team2.id);

    if (match.scoreTeam1 != null && match.scoreTeam2 != null) {
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
