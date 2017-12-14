import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  attending: any;
  created: any;

  tripsAttending = null;

  constructor(
    private tripService: TripService,
    private sessionService: SessionService, ) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
    console.log(this.user);
    this.tripService.getAttending()
      .subscribe(results => this.attending = results);
    this.tripService.getCreated()
      .subscribe(results => this.created = results);
  }
}

