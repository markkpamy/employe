import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {CommonService} from '../common.service';
import {Job} from '../models/job';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

    @Input()
    public job_id: number;
    @Output()
    onChoose = new EventEmitter();
    public jobs: Job[];
    public error: any;

    constructor(public commonService: CommonService) {
    }

    ngOnInit() {
        this.getJobs();
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

    onChange(value: string) {
        this.job_id = + value;
        this.onChoose.emit(this.job_id);
    }

}
