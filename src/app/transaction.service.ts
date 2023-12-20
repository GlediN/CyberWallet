import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class TransactionService {


  url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  transaction(data: any): Observable<any> {
    // Get the token from wherever it is stored (e.g., sessionStorage, localStorage)
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(this.url + "/transaction", data, {headers});
  }
  getRecentTransactions(email: string): Observable<any> {
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

    return this.httpClient.post(this.url + "/getRecentTransactions", data, { headers });
  }

}
