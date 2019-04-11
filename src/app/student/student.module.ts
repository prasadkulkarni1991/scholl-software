import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student.routing-module';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/addStudent.component';

@NgModule({
    imports: [
        StudentRoutingModule
    ],
    exports: [StudentComponent],
    declarations: [
        StudentComponent,
        StudentListComponent,
        AddStudentComponent
    ],
})

export class StudentModule { }
