import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Group} from '../model/group';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {

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

  /** PUT: update the hero on the server */
  update(group: Group): Observable<any> {
    return this.http.put(`${this.groupsUrl}/${group.id}`, group, httpOptions).pipe(
      tap(() => console.log(`updated group id=${group.id}`)),
      catchError(this.handleError<any>('updateGroup'))
    );
  }

  /** Delete: delete the team on the server */
  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.groupsUrl}/${id}`, httpOptions).pipe(
      tap(() => console.log(`delete group id=${id}`)),
      catchError(this.handleError<any>('deleteGroup'))
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
