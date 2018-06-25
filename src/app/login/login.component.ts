import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../model/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  user = new User();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.authService.logout();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  doLogin(user: User) {
    this.authService.loginByFields(user.login, user.password)
      .subscribe(() => this.router.navigate([this.returnUrl]));
  }
}
