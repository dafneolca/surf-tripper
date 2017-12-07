import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';

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
  }


  constructor(private tripService: TripService) { }


  ngOnInit() {
  }

}
