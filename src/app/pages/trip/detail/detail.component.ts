import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { SessionService } from '../../../services/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  // providers: [TripService]
})

export class DetailComponent implements OnInit {
  trip: {
    owner: 'owner Id here'
  };
  attendingTrip = false;
  attendees = ['Attendee 1', 'attendee 2'];
  user;  // LOGGED IN USER


  constructor(private route: ActivatedRoute, private tripService: TripService) { }


  joinTrip() {
    // On click ->logged in user is pushed into array of attendees.
    console.log('Trip Joined');
    this.attendingTrip = true;
    // $scope.attendees.push($scope.form);
    this.attendees.push(this.user);

  }

  cancelTrip() {
    // remove attendee from user array
    console.log('You are no longer part of this trip');
    this.attendingTrip = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tripService.get(params['id'])
        .subscribe((data) => {
          this.trip = data;
        });
    });
  }
}
