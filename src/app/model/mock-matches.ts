import {Match} from './match';
import {TEAMS} from './mock-teams';

function parseDate(date: string) {
  const dateTime = date.split(',');

  const dateOnly = (dateTime[0] + '.2018').split('.');
  const timeOnly = dateTime[1].substr(1);

  const temp = dateOnly[2] + '-' + dateOnly[1] + '-' + dateOnly[0];

  const result = temp + 'T' + timeOnly + ':00';

  return new Date(result);
}

export const MATCHES: Match[] = [
  // GROUP A
  {
    id: 0,
    firstTeam: TEAMS[0],
    secondTeam: TEAMS[3],
    scoreFirstTeam: 5,
    scoreSecondTeam: 0,
    date: parseDate('14.06, 18:00')
  }, {
    id: 1,
    firstTeam: TEAMS[1],
    secondTeam: TEAMS[2],
    scoreFirstTeam: 0,
    scoreSecondTeam: 1,
    date: parseDate('15.06, 15:00')
  }, {
    id: 2,
    firstTeam: TEAMS[0],
    secondTeam: TEAMS[1],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('19.06, 21:00')
  }, {
    id: 3,
    firstTeam: TEAMS[2],
    secondTeam: TEAMS[3],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('20.06, 18:00')
  }, {
    id: 4,
    firstTeam: TEAMS[2],
    secondTeam: TEAMS[0],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('25.06, 17:00')
  }, {
    id: 5,
    firstTeam: TEAMS[3],
    secondTeam: TEAMS[1],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('25.06, 17:00')
  },
  // GROUP B
  {
    id: 6,
    firstTeam: TEAMS[7],
    secondTeam: TEAMS[6],
    scoreFirstTeam: 0,
    scoreSecondTeam: 1,
    date: parseDate('15.06, 18:00')
  }, {
    id: 7,
    firstTeam: TEAMS[4],
    secondTeam: TEAMS[5],
    scoreFirstTeam: 3,
    scoreSecondTeam: 3,
    date: parseDate('15.06, 21:00')
  }, {
    id: 8,
    firstTeam: TEAMS[4],
    secondTeam: TEAMS[7],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('20.06, 15:00')
  }, {
    id: 9,
    firstTeam: TEAMS[6],
    secondTeam: TEAMS[5],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('20.06, 21:00')
  }, {
    id: 10,
    firstTeam: TEAMS[5],
    secondTeam: TEAMS[7],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('25.06, 21:00')
  }, {
    id: 11,
    firstTeam: TEAMS[6],
    secondTeam: TEAMS[4],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('25.06, 21:00')
  },
  // GROUP C
  {
    id: 12,
    firstTeam: TEAMS[8],
    secondTeam: TEAMS[10],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('16.06, 13:00')
  }, {
    id: 13,
    firstTeam: TEAMS[11],
    secondTeam: TEAMS[9],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('16.06, 19:00')
  }, {
    id: 14,
    firstTeam: TEAMS[9],
    secondTeam: TEAMS[10],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('21.06, 15:00')
  }, {
    id: 15,
    firstTeam: TEAMS[8],
    secondTeam: TEAMS[11],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('21.06, 18:00')
  }, {
    id: 16,
    firstTeam: TEAMS[9],
    secondTeam: TEAMS[8],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('26.06, 17:00')
  }, {
    id: 17,
    firstTeam: TEAMS[10],
    secondTeam: TEAMS[11],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('26.06, 17:00')
  },
  // GROUP D
  {
    id: 18,
    firstTeam: TEAMS[14],
    secondTeam: TEAMS[13],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('16.06, 16:00')
  }, {
    id: 19,
    firstTeam: TEAMS[12],
    secondTeam: TEAMS[15],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('16.06, 22:00')
  }, {
    id: 20,
    firstTeam: TEAMS[14],
    secondTeam: TEAMS[12],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('21.06, 21:00')
  }, {
    id: 21,
    firstTeam: TEAMS[15],
    secondTeam: TEAMS[13],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('22.06, 18:00')
  }, {
    id: 22,
    firstTeam: TEAMS[15],
    secondTeam: TEAMS[14],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('26.06, 21:00')
  }, {
    id: 23,
    firstTeam: TEAMS[13],
    secondTeam: TEAMS[12],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('26.06, 21:00')
  },
  // GROUP E
  {
    id: 24,
    firstTeam: TEAMS[19],
    secondTeam: TEAMS[17],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('17.06, 15:00')
  }, {
    id: 25,
    firstTeam: TEAMS[18],
    secondTeam: TEAMS[16],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('17.06, 21:00')
  }, {
    id: 26,
    firstTeam: TEAMS[18],
    secondTeam: TEAMS[19],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('22.06, 15:00')
  }, {
    id: 27,
    firstTeam: TEAMS[17],
    secondTeam: TEAMS[16],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('22.06, 21:00')
  }, {
    id: 28,
    firstTeam: TEAMS[16],
    secondTeam: TEAMS[19],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('27.06, 21:00')
  }, {
    id: 29,
    firstTeam: TEAMS[17],
    secondTeam: TEAMS[18],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('27.06, 21:00')
  },
  // GROUP F
  {
    id: 30,
    firstTeam: TEAMS[20],
    secondTeam: TEAMS[23],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('17.06, 18:00')
  }, {
    id: 31,
    firstTeam: TEAMS[21],
    secondTeam: TEAMS[22],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('18.06, 15:00')
  }, {
    id: 32,
    firstTeam: TEAMS[22],
    secondTeam: TEAMS[23],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('23.06, 18:00')
  }, {
    id: 33,
    firstTeam: TEAMS[20],
    secondTeam: TEAMS[21],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('23.06, 21:00')
  }, {
    id: 34,
    firstTeam: TEAMS[22],
    secondTeam: TEAMS[20],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('27.06, 17:00')
  }, {
    id: 35,
    firstTeam: TEAMS[23],
    secondTeam: TEAMS[21],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('27.06, 17:00')
  },
  // GROUP G
  {
    id: 36,
    firstTeam: TEAMS[25],
    secondTeam: TEAMS[27],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('18.06, 18:00')
  }, {
    id: 37,
    firstTeam: TEAMS[26],
    secondTeam: TEAMS[24],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('18.06, 21:00')
  }, {
    id: 38,
    firstTeam: TEAMS[25],
    secondTeam: TEAMS[26],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('23.06, 15:00')
  }, {
    id: 39,
    firstTeam: TEAMS[24],
    secondTeam: TEAMS[27],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('24.06, 15:00')
  }, {
    id: 40,
    firstTeam: TEAMS[24],
    secondTeam: TEAMS[25],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('28.06, 21:00')
  }, {
    id: 41,
    firstTeam: TEAMS[27],
    secondTeam: TEAMS[26],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('28.06, 21:00')
  },
  // GROUP H
  {
    id: 42,
    firstTeam: TEAMS[29],
    secondTeam: TEAMS[30],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('19.06, 15:00')
  }, {
    id: 43,
    firstTeam: TEAMS[28],
    secondTeam: TEAMS[31],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('19.06, 19:00')
  }, {
    id: 44,
    firstTeam: TEAMS[30],
    secondTeam: TEAMS[31],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('24.06, 18:00')
  }, {
    id: 45,
    firstTeam: TEAMS[28],
    secondTeam: TEAMS[29],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('24.06, 21:00')
  }, {
    id: 46,
    firstTeam: TEAMS[31],
    secondTeam: TEAMS[29],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('28.06, 17:00')
  }, {
    id: 47,
    firstTeam: TEAMS[30],
    secondTeam: TEAMS[28],
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('28.06, 17:00')
  },
  // 1/8
  {
    id: 48,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('30.06, 17:00')
  }, {
    id: 49,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('30.06, 21:00')
  }, {
    id: 50,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('01.07, 17:00')
  }, {
    id: 51,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('01.07, 21:00')
  }, {
    id: 52,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('02.07, 17:00')
  }, {
    id: 53,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('02.07, 21:00')
  }, {
    id: 54,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('03.07, 17:00')
  }, {
    id: 55,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('03.07, 21:00')
  },
  // 1/4
  {
    id: 56,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('06.07, 17:00')
  }, {
    id: 57,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('06.07, 21:00')
  }, {
    id: 58,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('07.07, 17:00')
  }, {
    id: 59,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('07.07, 21:00')
  },
  // 1/2
  {
    id: 60,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('10.07, 21:00')
  }, {
    id: 61,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('11.07, 21:00')
  },
  // 3d place match
  {
    id: 62,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('14.07, 17:00')
  },
  // final
  {
    id: 63,
    firstTeam: null,
    secondTeam: null,
    scoreFirstTeam: null,
    scoreSecondTeam: null,
    date: parseDate('15.07, 18:00')
  },
];
