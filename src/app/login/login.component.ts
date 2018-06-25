import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  doLogin(user: User) {
    this.authService.loginByFields(user.login, user.password)
      .subscribe(resp => {
        console.log(resp);
        console.log(localStorage.getItem('token'));
      });
  }
}
