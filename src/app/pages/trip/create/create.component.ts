import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // onClickCreate() {
  //   console.log('created');
  // }

  submitForm(myForm) {
    console.log(myForm);
    console.log('Submitted');
  }


  constructor() { }

  ngOnInit() {
  }

}
