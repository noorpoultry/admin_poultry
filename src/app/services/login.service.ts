import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(data): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/login', data);
  }

  addAdmin(users): Observable<any>
  {
    return this.httpClient.post(environment.apiBaseUrl + 'adminService/sellingListing', users);
  }
}
