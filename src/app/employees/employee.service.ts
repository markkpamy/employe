import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeeService {
    private employeeSrvUrl = 'http://localhost:8080/EmployeesSrv/';

    constructor(public httpClient: HttpClient) {
    }

    public getEmployees(): Observable<any> {
        return this.httpClient.get(this.employeeSrvUrl + 'getEmployees');
    }

    public getEmployee(id: number): Observable<any> {
        return this.httpClient.get(this.employeeSrvUrl + 'getEmployee/' + id);
    }

    public updateEmployee(employee: Employee): Observable<any> {
        return this.httpClient.put(this.employeeSrvUrl + 'updateEmployee', JSON.stringify(employee));
    }

    public addEmployee(employee: Employee): Observable<any> {
        return this.httpClient.put(this.employeeSrvUrl + 'addEmployee', JSON.stringify(employee));
    }

    public deleteEmployee(employee_id: number): Observable<any> {
        return this.httpClient.delete(this.employeeSrvUrl + 'deleteEmployee' + employee_id);
    }
}
