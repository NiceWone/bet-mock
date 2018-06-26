import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private location: Location,
              private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(1);
    if (this.form.valid) {
      this.authService.regUser(this.form.value);
    }
    this.formSubmitAttempt = true;
  }

  goBack(): void {
    this.location.back();
  }
}
