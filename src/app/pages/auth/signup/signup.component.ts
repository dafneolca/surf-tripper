import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  providers: [UserService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signUpUser(newUser) {
    console.log(newUser);
    console.log('Submitted');
    this.userService.createNewUser(newUser.value);
    this.router.navigate(['trips']);
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
