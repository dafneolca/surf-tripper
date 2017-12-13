import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailComponent } from '../pages/trip/detail/detail.component';
import { ProfileComponent } from '../pages/profile/profile.component';

@Injectable()
export class TripService {
  BASE_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  createNewTrip(trip, userID) {
    const tripObj = {
      trip,
      userID
    };
    this.httpClient.post(this.BASE_URL + '/trip', tripObj).subscribe();
  }

  get(id) {
    return this.httpClient.get(`${this.BASE_URL}/trip/${id}`);
  }

  getList() {
    return this.httpClient.get(`${this.BASE_URL}/trip`);
  }

  joinTrip(tripId, userId) {
    this.httpClient.post(`${this.BASE_URL}/trip/${tripId}`, userId).subscribe();
  }

}
