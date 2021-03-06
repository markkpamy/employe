import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {SharedService} from './services/shared.service';
import {HomeComponent} from './home/home.component';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeService} from './employees/employee.service';
import {CommonService} from './common.service';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { DepartmentComponent } from './department/department.component';
import { JobComponent } from './job/job.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        LoginComponent,
        HomeComponent,
        EmployeesComponent,
        EmployeeComponent,
        ErrorComponent,
        DepartmentComponent,
        JobComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [SharedService, LoginService, EmployeeService, CommonService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
