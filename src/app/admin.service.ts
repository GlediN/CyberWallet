import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

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
  updateEmail(data:any){
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/changeEmail", data, {headers});
  }
  updateBalance(data:any){
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/changeBalance", data, {headers});
  }
  updatePassword(data:any){
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/changePassword", data, {headers});
  }
  updateAddress(data:any){
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/changeAddress", data, {headers});
  }
  updateRole(data:any){
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/changeRole", data, {headers});
  }
  getAllUsers():Observable<any>{
    const token = sessionStorage.getItem('token');

    // Add the authorization header if a token is available
    const headers = token
      ? new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
      : new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.url + "/admin/getAllUsers",null, {headers});
  }
}
