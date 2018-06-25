import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '2018 FIFA World Cup Russia™';

  constructor(private auth: AuthService,
              private router: Router,
  ) {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/dashboard']);
  }
}
