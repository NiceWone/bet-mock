import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Match} from '../model/match';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchesUrl = '//localhost:8080/matches';

  constructor(private http: HttpClient) {
  }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl)
      .pipe(
        tap(() => console.log(`fetched matches`)),
        catchError(this.handleError('getMatches', []))
      );
  }

  /** GET matches by id. Will 404 if id not found */
  getMatchesByGroup(id: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}`)
      .pipe(
        map(matches =>
          matches.filter(x => (x.id >= id * 6 && x.id < id * 6 + 6))),
        tap(() => console.log(`fetched matches for group  id=${id}`)),
        catchError(this.handleError('getMatches', []))
      );
  }

  /** GET match by id. Will 404 if id not found */
  getMatch(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.matchesUrl}/${id}`)
      .pipe(
        tap(() => console.log(`fetched match id=${id}`)),
        catchError(this.handleError<Match>(`getMatch id=${id}`)));
  }

  /** PUT: update the hero on the server */
  update(match: Match): Observable<any> {
    return this.http.put(`${this.matchesUrl}/${match.id}`, match, httpOptions).pipe(
      tap(() => console.log(`updated match id=${match.id}`)),
      catchError(this.handleError<any>('updateMatch'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
