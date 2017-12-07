import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(myForm) {
    console.log(myForm);
    this.loggedIn = true;
    console.log(this.loggedIn);
    this.router.navigate(['trips']);
  }
}
