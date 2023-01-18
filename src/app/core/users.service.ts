import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  baseUrl: string = " http://localhost:3000/"
  httpheaders: HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  postDataToServer(endpoint: string, requestBody: any) {
    let url = this.baseUrl + endpoint;
    return this.http.post(url, requestBody, { 'headers': this.httpheaders });
  }

  getDataFromServer(endpoint: string) {
    let url = this.baseUrl + endpoint;
    return this.http.get(url, { 'headers': this.httpheaders });
  }
}
