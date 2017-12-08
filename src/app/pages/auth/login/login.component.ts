import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formInfo = {
    username: '',
    password: ''
  };

  user: any;
  error: string;

  constructor(private session: SessionService, private router: Router) { }

  login() {
    this.session.login(this.formInfo).subscribe();
    this.router.navigate(['trips']);
  }


  ngOnInit() {
  }









  // loggedIn = false;
  // constructor(private router: Router) { }

  // ngOnInit() {
  // }

  // submitForm(myForm) {
  //   console.log(myForm);
  //   this.loggedIn = true;
  //   console.log(this.loggedIn);
  //   this.router.navigate(['trips']);
  // }
}
