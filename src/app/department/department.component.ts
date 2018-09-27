import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonService} from '../common.service';
import {Department} from '../models/department';

@Component({
    selector: 'app-department',
    templateUrl: './department.component.html',
    styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

    @Input()
    public department_id: number;
    @Output()
    public onChoose = new EventEmitter();
    public departments: Department[];
    public error: any;

    constructor(public commonService: CommonService) {
    }

    ngOnInit() {
     this.getDepartments();
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

    onChange(value: string) {
        this.department_id = + value;
        this.onChoose.emit(this.department_id);
    }

}
