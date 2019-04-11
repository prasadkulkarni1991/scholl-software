import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/addStudent.component';

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
        component: AddStudentComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentRoutingModule { }

