import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../../../services/trip.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  trips;

  constructor(private tripService: TripService, private router: Router) { }



  ngOnInit() {
    this.tripService.getList()
      .subscribe((data) => {
        this.trips = data;
        console.log(data);
      });
  }

  viewDetails(id) {
    this.router.navigate(['auth']);
  }




}
