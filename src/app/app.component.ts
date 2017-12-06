import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login = true;
  title = 'Surf Tripper';

  loadLogin() {
    console.log('logging in');
  }

  loadSignup() {
    console.log('sign up');
  }
}
