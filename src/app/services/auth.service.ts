import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../model/user';
import {catchError, map, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private loginUrl = '//localhost:8080/login';
  private sigUpUrl = '//localhost:8080/signUp';
  private returnUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  get isLoggedIn() {
    if (localStorage.getItem('token')) {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable();
  }

  login(value: User) {
    if (value.login !== '' && value.password !== '') {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      console.log(this.returnUrl);
      this.loginByFields(value)
        .subscribe(() => {
          if (localStorage.getItem('token')) {
            this.loggedIn.next(true);
            this.router.navigate([this.returnUrl]);
          }
        });
    }
  }

  regUser(value: User) {
    if (value.login !== '' && value.password !== '' && value.email !== '') {
      console.log(this.returnUrl);
      this.registerUser(value)
        .subscribe(() => this.router.navigate(['/login']));
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  /** POST: login user on the server */
  loginByFields(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, {login: user.login, password: user.password})
      .pipe(
        tap(() => console.log(`login user id=${user.login}`)),
        map(token => {
          if (token && token.value) {
            localStorage.setItem('token', token.value);
            console.log(`token user id=${user.login} is ${token.value}`);
          }
        }),
        catchError(this.handleError('login', [])));
  }

  /** POST: signUp user on the server */
  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.sigUpUrl, user)
      .pipe(
        tap(() => console.log(`register user id=${user.login}`)),
        catchError(this.handleError('register', [])));
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
