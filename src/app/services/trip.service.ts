import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TripService {
  BASE_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  createNewTrip(trip) {
    console.log('hello from service');
    this.httpClient.post(this.BASE_URL + '/trip', trip).subscribe();
  }

  get(id) {
    return this.httpClient.get(`${this.BASE_URL}/trip/${id}`);
  }

  getList() {
    return this.httpClient.get(`${this.BASE_URL}/trip`);
  }
}
