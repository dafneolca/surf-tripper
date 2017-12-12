import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = true;
  anon: boolean;
  user: User;
  title: 'Surf Tripper';




  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  loadLogin() {
  }

  loadSignup() {
  }
}
