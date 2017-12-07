import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  submitForm(myForm) {
    console.log(myForm);
    console.log('Submitted');
    this.tripService.createNewTrip(myForm.value);
    this.router.navigate(['trips']);
  }


  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }

}
