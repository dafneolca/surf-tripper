import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  trips;

  constructor(private trip: TripService) { }

  ngOnInit() {
    this.trip.getList()
      .subscribe((trips) => {
        this.trips = trips;
      });
  }


}
