import {Match} from './match';
import {TEAMS} from './mock-teams';

export const MATCHES: Match[] = [
  {
    id: 0,
    firstTeam: TEAMS[0],
    secondTeam: TEAMS[3],
    scoreFirstTeam: 5,
    scoreSecondTeam: 0,
    date: new Date()
  }, {
    id: 1,
    firstTeam: TEAMS[1],
    secondTeam: TEAMS[2],
    scoreFirstTeam: 0,
    scoreSecondTeam: 0,
    date: new Date()
  }, {
    id: 2,
    firstTeam: TEAMS[0],
    secondTeam: TEAMS[1],
    scoreFirstTeam: 0,
    scoreSecondTeam: 0,
    date: new Date()
  }, {
    id: 3,
    firstTeam: TEAMS[2],
    secondTeam: TEAMS[3],
    scoreFirstTeam: 0,
    scoreSecondTeam: 0,
    date: new Date()
  }, {
    id: 4,
    firstTeam: TEAMS[2],
    secondTeam: TEAMS[0],
    scoreFirstTeam: 0,
    scoreSecondTeam: 0,
    date: new Date()
  }, {
    id: 5,
    firstTeam: TEAMS[3],
    secondTeam: TEAMS[1],
    scoreFirstTeam: 0,
    scoreSecondTeam: 0,
    date: new Date()
  },
];
