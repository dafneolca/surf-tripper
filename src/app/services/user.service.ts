import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  BASE_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  createNewUser(user) {
    console.log('hello from service');
    this.httpClient.post(this.BASE_URL + '/user', user).subscribe();
  }
}
