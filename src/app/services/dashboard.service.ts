import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  httpHeaders;
  httpOptions;

  constructor(private httpClient: HttpClient) { }

  getBid(): Observable<any>
  {
    this.httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    this.httpOptions = {headers: this.httpHeaders}

    return this.httpClient.get(environment.apiBaseUrl + 'adminService/getAllBids', this.httpOptions)
  }


  
getDeals(): Observable<any>
{
  this.httpHeaders = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem('token')
  });
  this.httpOptions = {headers: this.httpHeaders}

  return this.httpClient.get(environment.apiBaseUrl + 'adminService/getAllDeals', this.httpOptions)

}


 dealStatus(id): Observable<any>
{
  this.httpHeaders = new HttpHeaders({
    "Authorization": "Bearer " + localStorage.getItem('token')
  });
  this.httpOptions = {headers: this.httpHeaders}

  return this.httpClient.put(environment.apiBaseUrl + 'adminService/updateDealStatus/'+id, this.httpOptions)
}
}



