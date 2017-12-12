
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// implements OnInit
export class LoginComponent {
  error: String;

  user = new User({
    username: '',
    password: ''
  });


  constructor(
    private session: SessionService,
    private router: Router
  ) { }

  login() {
    this.error = 'Username or Password incorrect';
    this.session.login(this.user)
      .subscribe(
      () => this.router.navigate(['/trips']),
      (err) => this.error = err
      );
  }
}
