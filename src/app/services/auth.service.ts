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

  constructor(private http: HttpClient) {
  }

  /** POST: login user on the server */
  loginByFields(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, {login: login, password: password})
      .pipe(
        tap(() => console.log(`login user id=${login}`)),
        map(token => {
          if (token && token.value) {
            localStorage.setItem('token', token.value);
          }
        }),
        catchError(this.handleError('login', [])));
  }

  /** POST: signUp user on the server */
  registerUser(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.sigUpUrl, {login: login, password: password})
      .pipe(
        tap(() => console.log(`register user id=${login}`)),
        catchError(this.handleError('register', [])));
  }

  getAuthorizationToken(): string {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
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
