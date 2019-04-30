import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { StudentRoutingModule } from './student.routing-module';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/addStudent.component';
import { StudentBasicDetailsComponent } from './add-student/basic-details/basic-details.component';
import { CommonModule } from '@angular/common';
import { StudentEducationDetailsComponent } from './add-student/education-details/education-details.component';
import { StudentService } from '../http/student.service';

@NgModule({
    imports: [
        StudentRoutingModule,
        CommonModule
    ],
    declarations: [
        StudentComponent,
        StudentListComponent,
        AddStudentComponent,
        StudentBasicDetailsComponent,
        StudentEducationDetailsComponent
    ],
    providers: [
        StudentService
    ]
})

export class StudentModule { }
