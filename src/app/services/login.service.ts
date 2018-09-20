import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private employeeSrvUrl = 'http://localhost:8080/EmployeesSrv/';

  constructor(private httpClient: HttpClient) { }

  public getUser(login: string): Observable<any> {
    const url: string = this.employeeSrvUrl + 'getUser';
    return this.httpClient.post(url, JSON.stringify(login));
  }
}
