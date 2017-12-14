import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { HttpModule } from '@angular/http';
import { User } from '../../../models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  newUser = new User({
    id: null,
    username: null,
    experienceLevel: null,
    userDescription: null,
    email: null,
    password: null,
  });

  error: string;



  constructor(private router: Router, private sessionService: SessionService) { }

  signUpUser() {
    this.error = null;
    this.sessionService.signup(this.newUser).subscribe(
      () => this.router.navigate(['/trips']),
      (error) => this.error = error
    );

  }

  ngOnInit() {
  }

}
