import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }


  transaction(data: any): Observable<any> {
    return this.httpClient.post(this.url + "/transaction", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}