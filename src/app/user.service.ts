import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }


  login(data: any): Observable<any> {
    return this.httpClient.post(this.url + "/login", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


  signup(data: any): Observable<any> {
    return this.httpClient.post(this.url + "/signup", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  isAdmin(email: string): Observable<any> {
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');

    // Prepare the data object with the "email" parameter
    const data = { email: email };

    return this.httpClient.post(this.url + "/isAdmin", data, { headers });
  }

}
