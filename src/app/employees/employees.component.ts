import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

    public employees: Employee[];
    private title: string;
    public error: any;

    constructor(public employeeService: EmployeeService, public router: Router) {
    }

    ngOnInit() {
        this.getEmployees();
    }

    getEmployees(): void {
        this.title = 'Liste de tous les employés';
        this.employeeService.getEmployees().subscribe(
            (employees) => {
                this.employees = employees;
            },
            (error) => {
                this.error = error.message;
            }
        );
    }

    detail(employee_id: number) {
        this.router.navigate(['/detailEmployee/' + employee_id]);
    }

    delete(id: number) {
        this.employeeService.deleteEmployee(id).subscribe(
            () => {},
            (error) => {this.error = error.message; },
            () => {this.getEmployees(); }
        );
    }

}
