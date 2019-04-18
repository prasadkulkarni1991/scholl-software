import { NgModule } from '@angular/core';
import { PreAdmissionComponent } from './preAdmission.component';
import { EmployeeRoutingModule } from '../employee/employee.routing-module';
import { PreAdmissionRoutingModule } from './preAdmission.routing-module';

@NgModule({
    imports: [
        PreAdmissionRoutingModule
    ],
    declarations: [
        PreAdmissionComponent
    ]
})
export class PreAdmissionModule {

}
