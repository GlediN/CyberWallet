import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  url = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  deposit(data: any): Observable<any> {
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');

    // Prepare the data object with the "email" parameter

    return this.httpClient.post(this.url + "/addBalanceByCode", data, { headers });
    }

}
