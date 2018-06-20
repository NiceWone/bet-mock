import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Group} from '../model/group';
import {HttpClient} from '@angular/common/http';
import {Match} from '../model/match';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private matchesUrl = '//localhost:8080/matches';
  private groupsUrl = '//localhost:8080/groups';

  constructor(private http: HttpClient) {
  }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl)
      .pipe(
        tap(() => console.log(`fetched groups`)),
        catchError(this.handleError('getGroups', []))
      );
  }

  /** GET group by id. Will 404 if id not found */
  getGroup(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.groupsUrl}/${id}`)
      .pipe(
        tap(() => console.log(`fetched group id=${id}`)),
        catchError(this.handleError<Group>(`getGroup id=${id}`)));
  }

  /** GET matches by id. Will 404 if id not found */
  getMatches(id: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}`)
      .pipe(
        map(matches =>
          matches.filter(x => (x.id >= id * 6 && x.id < id * 6 + 6))),
        tap(() => console.log(`fetched matches for group  id=${id}`)),
        catchError(this.handleError('getMatches', []))
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
