import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { SessionService } from '../../../services/session.service';
import { RouterModule, Router } from '@angular/router';
import { Trip } from '../../../models/trip';
import { User } from '../../../models/user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  trip = new Trip({
    place: '',
    startDate: '',
    endDate: '',
    tripDescription: '',
    cost: '',
    availableSpots: '',
    attendees: ['']
  });
  user: User;

  submitForm(myForm) {
    this.tripService.createNewTrip(myForm.value, this.user.id)
      .subscribe(() => this.router.navigate(['/trips']));
  }

  constructor(private tripService: TripService, private router: Router, private sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

}
