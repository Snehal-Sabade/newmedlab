import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopDealService {

  constructor(private http: HttpClient) { }

  baseUrl: string = " http://localhost:3000/"
  httpheaders: HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json');

  getDetailsFromServer(endpoint: string, httpParams: HttpParams = new HttpParams()) {
    let url = this.baseUrl + endpoint;
    return this.http.get(url, { 'headers': this.httpheaders, 'params': httpParams });

  }
  getProductDetailsFronServer(){
    this.getDetailsFromServer('topdeals').subscribe((responce:any)=>{
      if(responce && responce >0){}
    })
  }
}
