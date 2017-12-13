import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private sessionService: SessionService, ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    console.log(this.user)
  }


}
