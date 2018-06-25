import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../model/user';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = '//localhost:8080/login';
  private sigUpUrl = '//localhost:8080/signUp';
  private token: string;
  private user: User;

  constructor(private http: HttpClient) {
  }

  /** POST: login on the server */
  loginByFields(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, {login: username, password: password})
      .pipe(
        tap(() => console.log(`login user id=${username}`)),
        map(token => {
          if (token && token.value) {
            localStorage.setItem('token', token.value);
          }
        }),
        catchError(this.handleError('login', [])));
  }

  logout() {
    localStorage.removeItem('token');
  }

  getAuthorizationToken(): string {
    return localStorage.getItem('token');
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
