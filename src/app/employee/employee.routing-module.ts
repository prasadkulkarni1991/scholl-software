import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './AddEmployee/addEmployee.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'employee',
        pathMatch: 'full'
    },
    {
        path: 'employee',
        component: EmployeeComponent},
    {
        path: 'addEmployee',
        component: AddEmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule {

}

