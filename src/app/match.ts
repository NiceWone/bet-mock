import {Team} from './team';

export class Match {
  id: number;
  firstTeam: Team;
  secondTeam: Team;
  scoreFirstTeam: number;
  scoreSecondTeam: number;
  date: Date;
}
