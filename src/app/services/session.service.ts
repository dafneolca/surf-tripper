import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SessionService {
  BASE_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  signup(user) {
    console.log(user);
    return this.httpClient.post(`${this.BASE_URL}/auth/signup`, user);

  }

  login(user) {
    return this.httpClient.post(`${this.BASE_URL}/auth/login`, user);
    // .map(res => res.json())
    // .catch(this.handleError);
  }

  logout(user) {
    return this.httpClient.post(`${this.BASE_URL}/auth/logout`, user);
    // .map(res => res.json())
    // .catch(this.handleError);
  }

  isLoggedIn(user) {
    return this.httpClient.get(`${this.BASE_URL}/auth/loggedin`, user);
    // .map(res => res.json())
    // .catch(this.handleError);
  }
  getPrivateData(user) {
    return this.httpClient.get(`${this.BASE_URL}/auth/private`, user);
    // .map(res => res.json())
    // .catch(this.handleError);
  }



}
