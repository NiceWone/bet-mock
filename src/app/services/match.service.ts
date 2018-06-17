import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from '../model/match';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchesUrl = 'api/matches';

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl);
  }

  constructor(private http: HttpClient) {
  }

  getMatch(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.matchesUrl}/${id}`);
  }
}
