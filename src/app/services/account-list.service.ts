import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountListService {
  httpHeaders;
  httpOptions;
  pendingUserCount: number = 0;
  accountListSub
  pendingAccountList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  accountList$ = this.pendingAccountList.asObservable();

  constructor(private httpClient: HttpClient) {
    {
      
    }
   }
  
  getUserList(data): Observable <any>
  {
    this.httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    this.httpOptions = {headers: this.httpHeaders}

    return this.httpClient.get(environment.apiBaseUrl + 'adminService/getUserList' , this.httpOptions);
  }

  getNewUsers(): Observable<any>
  {
    this.httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    this.httpOptions = {headers: this.httpHeaders}

    return this.httpClient.get(environment.apiBaseUrl + 'adminService/getNewUsers', this.httpOptions)
  }

  userStatus(id, data): Observable<any>
  {
    this.httpHeaders = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem('token')
    });
    this.httpOptions = {headers: this.httpHeaders}

    return this.httpClient.put(environment.apiBaseUrl + 'adminService/activateUser/'+id, data, this.httpOptions)
  }

  nextUpdateAccountList()
  {
    this.pendingAccountList.next({});
  }
}


