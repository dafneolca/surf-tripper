import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
