import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    onClickLogin() {
        // redirect to log in window
        console.log('login');
    }

    onClickSignup() {
        // redirect to sign up window
        console.log('signup');
    }
    constructor() { }

    ngOnInit() {
    }


}
