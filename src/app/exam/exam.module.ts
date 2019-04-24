import { NgModule } from '@angular/core';
import { ExamComponent } from './exam.component';
import { ExamRoutingModule } from './exam.routing-module';
import { CommonModule } from '@angular/common';
import { ExamGradeComponent } from './examGrade/examGrade.component';

@NgModule({
    imports: [
        ExamRoutingModule,
        CommonModule
    ],
    declarations: [
        ExamComponent,
        ExamGradeComponent
    ]
})

export class ExamModule {

}
