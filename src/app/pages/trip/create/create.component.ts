import { Component, OnInit } from '@angular/core';
import { TripService } from '../../../services/trip.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  owner;

  submitForm(myForm) {
    console.log(myForm);
    console.log('Submitted');
    this.tripService.createNewTrip(myForm.value);
    this.router.navigate(['trips']);
    // this.owner = createReadStream.id   --> get this owner to be the user id of creator
  }


  constructor(private tripService: TripService, private router: Router) { }

  ngOnInit() {
  }

}
