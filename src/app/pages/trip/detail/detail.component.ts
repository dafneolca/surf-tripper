import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { SessionService } from '../../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})

export class DetailComponent implements OnInit {
  trip;
  place = null;
  attendingTrip = false;
  attendees = ['Attendee 1', 'attendee 2'];
  user = null;
  availableSpaces = null;
  tripDescription = null;
  // tripJoined = 'You have joined the trip';

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private tripService: TripService,
    private router: Router) { }

  back() {
    this.router.navigate(['trips']);
  }

  joinTrip() {
    // this.attendingTrip = true;
    // this.availableSpaces--;
    this.route.params.subscribe(params => {
      this.tripService.joinTrip(this.user.id, params['id'])
        .subscribe((data) => {
          this.trip = data;
          console.log(this.trip);
        });
    });
  }

  cancelTrip() {
    // remove attendee from user array
    console.log('You are no longer part of this trip');
    this.attendingTrip = false;
    this.attendees.splice(0, 1);
    this.availableSpaces++;

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tripService.get(params['id'])
        .subscribe((data) => {
          this.trip = data;
          console.log(this.trip);
        });
    });
    this.user = this.sessionService.getUser();
  }
}
