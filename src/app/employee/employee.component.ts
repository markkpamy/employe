import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employees/employee.service';
import {CommonService} from '../common.service';
import {Department} from '../models/department';
import {Job} from '../models/job';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    employee: Employee;
    public employee_id: number;
    public error: any;
    public title: string;
    public departments: Department[];
    public jobs: Job[];

    constructor(public activatedRoute: ActivatedRoute,
                public employeeService: EmployeeService,
                public commonService: CommonService) {
    }

    ngOnInit() {
        this.employee = new Employee();
        this.employee_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');
        this.title = 'Modifier un employé';
        this.getEmployee(this.employee_id);
        this.getDepartments();
        this.getJobs();
    }

    private getEmployee(employee_id: number) {
        this.employeeService.getEmployees().subscribe(
            (employee) => {
                this.employee = employee;
            },
            (error) => {
                this.error = error.message;
            }
        );
    }

    private getDepartments() {
        this.commonService.getDepartments().subscribe(
            (departments) => {
                this.departments = departments;
            }, (error) => {
                this.error = error.message;
            }
        );
    }

    private getJobs() {
        this.commonService.getJobs().subscribe(
            (jobs) => {
                this.jobs = jobs;
            },
            (error) => {
                this.error = error.message;
            }
        );
    }
}
