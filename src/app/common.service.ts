import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class CommonService {
    private employeeSrvUrl = 'http://localhost:8080/EmployeesSrv';
    constructor(private httpClient: HttpClient) {}

    getJobs(): Observable<any> {
        return this.httpClient.get(this.employeeSrvUrl + 'getJobs');
    }
    getDepartments(): Observable<any> {
        return this.httpClient.get(this.employeeSrvUrl + 'getDepartments');
    }
}
