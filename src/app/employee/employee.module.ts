import { NgModule } from '@angular/core';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';
import { EmployeeRoutingModule } from './employee.routing-module';
import { EmployeeComponent } from './employee.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        EmployeeRoutingModule,
        CommonModule
    ],
    providers: [],
    declarations: [
        EmployeeComponent,
        AddEmployeeComponent
    ]
})
export class EmployeeModule {

}
