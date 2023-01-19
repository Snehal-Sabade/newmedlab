import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  baseUrl: string = " http://localhost:3000/"
  httpheaders: HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json');

    getUserData(endpoint: string) {
      let url = this.baseUrl + endpoint;
      return this.http.get(url, { 'headers': this.httpheaders });
    }
    
  
}
