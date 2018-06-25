import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(private authService: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit() {
  }

  doSignUp(user: User) {
    this.authService.registerUser(user)
      .subscribe(() => this.router.navigate(['/login']));
  }
}
