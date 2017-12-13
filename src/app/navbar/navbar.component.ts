import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login: true;
  user = null;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    console.log('this.user: ', this.user);
  }


  logout() {
    this.sessionService.logout().subscribe(() => this.router.navigate(['/']));

  }
}
