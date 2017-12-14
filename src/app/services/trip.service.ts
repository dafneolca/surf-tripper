import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class TripService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: Http) { }

  createNewTrip(trip, userID) {
    const options = new RequestOptions();
    options.withCredentials = true;
    const tripObj = {
      trip,
      userID
    };
    return this.http.post(this.BASE_URL + '/trip', tripObj, options)
      .map(res => res.json());
  }

  get(id) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(`${this.BASE_URL}/trip/${id}`, options)
      .map(res => res.json());
  }

  getList() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(`${this.BASE_URL}/trip`, options)
      .map(res => res.json());
  }

  joinTrip(userId, tripID) {
    const options = new RequestOptions();
    options.withCredentials = true;
    console.log('USERID::::::  ', userId);
    const joinObj = {
      userId
    };
    return this.http.post(this.BASE_URL + '/trip/' + tripID + '/join', joinObj, options)
      .map(res => res.json());
  }

}
