import {Team} from './team';

export class Match {
  id: number;
  team1: Team;
  team2: Team;
  scoreTeam1: number;
  scoreTeam2: number;
  date: Date;
}
