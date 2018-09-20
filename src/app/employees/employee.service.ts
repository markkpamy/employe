import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
    private employeeSrvUrl = 'http://localhost:8080/EmployeesSrv';

    constructor(public httpClient: HttpClient) {}

    public getEmployees(): Observable<any> {
        return this.httpClient.get(this.employeeSrvUrl + 'getEmployees');
    }

    public getEmployee(id: number): Observable<any> {
        return this.httpClient.get(this.employeeSrvUrl + 'getEmployee/' + id);
    }
}
