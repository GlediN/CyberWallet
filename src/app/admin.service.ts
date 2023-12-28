import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  updateName(data:any){
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/changeUsername", data, {headers});

  }
}
