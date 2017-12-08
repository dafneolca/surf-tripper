import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) { }

  signUpUser(newUser) {
    this.sessionService.signup(newUser.value).subscribe();
    this.router.navigate(['trips']);
  }

  ngOnInit() {
  }

}
