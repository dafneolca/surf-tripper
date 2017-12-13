import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { SessionService } from '../../../services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  // providers: [TripService]
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

    // On click ->logged in user is pushed into array of attendees.
    // $scope.attendees.push($scope.form);

    this.attendingTrip = true;
    this.availableSpaces--;
    this.user = this.sessionService.getUser();
    this.attendees.push(this.user);

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
  }
}
