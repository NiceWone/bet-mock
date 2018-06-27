import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = '/api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(() => console.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
      .pipe(
        tap(() => console.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`)));
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.usersUrl}/${user.id}`, user, httpOptions).pipe(
      tap(() => console.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** POST: save the user on the server */
  saveUser(user: User): Observable<any> {
    return this.http.post(`${this.usersUrl}`, user, httpOptions).pipe(
      tap(() => console.log(`save user id=${user.id}`)),
      catchError(this.handleError<any>('saveUser'))
    );
  }

  /** PUT: delete the team on the server */
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`, httpOptions).pipe(
      tap(() => console.log(`delete user id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
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
