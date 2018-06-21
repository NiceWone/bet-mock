import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Team} from '../model/team';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamUrl = '//localhost:8080/teams';

  constructor(private http: HttpClient) {
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl)
      .pipe(
        tap(() => console.log(`fetched teams`)),
        catchError(this.handleError('getTeams', []))
      );
  }

  /** GET group by id. Will 404 if id not found */
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.teamUrl}/${id}`)
      .pipe(
        tap(() => console.log(`fetched team id=${id}`)),
        catchError(this.handleError<Team>(`getTeam id=${id}`)));
  }

  /** PUT: update the hero on the server */
  update(team: Team): Observable<any> {
    return this.http.put(`${this.teamUrl}/${team.id}`, team, httpOptions).pipe(
      tap(() => console.log(`updated team id=${team.id}`)),
      catchError(this.handleError<any>('updateTeam'))
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
