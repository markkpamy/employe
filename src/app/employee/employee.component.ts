import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../employees/employee.service';
import {CommonService} from '../common.service';
import {Department} from '../models/department';
import {Job} from '../models/job';
import {Location} from '@angular/common';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    public employee: Employee;
    public employee_id: number;
    public error: any;
    public title: string;

    constructor(public activatedRoute: ActivatedRoute,
                public employeeService: EmployeeService,
                public commonService: CommonService,
                public router: Router,
                public location: Location) {
    }

    ngOnInit() {
        this.employee = new Employee();
        this.employee_id = +this.activatedRoute.snapshot.paramMap.get('employee_id');
        if (this.employee_id > 0) {
            this.title = 'Modifier un employé';
            this.getEmployee(this.employee_id);
        } else {
            this.title = 'Ajouter un employé';
        }
    }

    private getEmployee(employee_id: number) {
        this.employeeService.getEmployee(employee_id).subscribe(
            (employee) => {
                this.employee = employee;
            },
            (error) => {
                this.error = error.message;
            }
        );
    }


    validateEmployee(id: number) {
        if (id > 0) {
            if (isNaN(this.employee.job_id)) {
                this.error = 'Vous devez selectionner un job !';
            } else {
                if (isNaN(this.employee.department_id)) {
                    this.error = 'Vous devez selectionner un département';
                } else {
                    this.employeeService.updateEmployee(this.employee).subscribe(
                        () => {
                            this.router.navigate(['/getEmployees']);
                        }, (error) => {
                            this.error = error.message;
                        }
                    );
                }
            }
        } else {
            this.employeeService.addEmployee(this.employee).subscribe(
                () => {
                },
                (error) => {
                    this.error = error.message;
                },
                () => {
                    this.router.navigate(['getEmployees']);
                });
        }
    }

    cancel(id: number) {
        if (id > 0) {
            this.location.back();
        } else {
            this.router.navigate(['/home']);
        }
    }

    jobSelected(job_id: number) {
        this.employee.job_id = job_id;
    }

    departmentSelected(department_id: number) {
        this.employee.department_id = department_id;
    }


}
