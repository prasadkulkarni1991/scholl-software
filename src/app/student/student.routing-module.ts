import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/addStudent.component';
import { StudentBasicDetailsComponent } from './add-student/basic-details/basic-details.component';
import { StudentEducationDetailsComponent } from './add-student/education-details/education-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'studentList',
        pathMatch: 'full'
    },
    {
        path: 'studentList',
        component: StudentListComponent
    },
    {
        path: 'addStudent',
        component: AddStudentComponent,
        children: [
            {path : '', redirectTo: 'basicDetails', pathMatch: 'full'},
            {path : 'basicDetails', component: StudentBasicDetailsComponent},
            {path : 'educationDetails', component: StudentEducationDetailsComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentRoutingModule { }

