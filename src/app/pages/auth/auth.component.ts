import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    constructor(private router: Router) { }


    onClickLogin() {
        this.router.navigate(['auth/login']);
    }

    onClickSignup() {
        this.router.navigate(['auth/signup']);
    }


    ngOnInit() {
    }


}
