import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {MATCHES} from '../model/mock-matches';
import {Match} from '../model/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  getMatches(): Observable<Match> {
    return from(MATCHES);
  }

  constructor() {
  }

  getMatch(id: number): Observable<Match> {
    return of(MATCHES.find(hero => hero.id === id));
  }
}
