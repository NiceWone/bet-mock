import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {MATCHES} from '../model/mock-matches';
import {Match} from '../model/match';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchesUrl = 'api/matches';

  getMatches(): Observable<Match> {
    return from(MATCHES);
    // return this.http.get<Match>(this.matchesUrl);
  }

  constructor(private http: HttpClient) {
  }

  getMatch(id: number): Observable<Match> {
    return of(MATCHES.find(hero => hero.id === id));
  }
}
