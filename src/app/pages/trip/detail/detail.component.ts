import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [TripService]
})

export class DetailComponent implements OnInit {
  trip: object;

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tripService.get(params['id'])
        .subscribe((data) => {
          this.trip = data;
        });
    });
  }
}
