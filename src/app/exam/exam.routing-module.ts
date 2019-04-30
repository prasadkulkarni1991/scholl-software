import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExamComponent } from './exam.component';
import { ExamGradeComponent } from './examGrade/examGrade.component';

export const routes: Routes = [

    { path: '', redirectTo: 'exam-list', pathMatch: 'full' },
    {
        path: 'exam',
        component: ExamComponent,
    },
    { path: 'exam-list', component: ExamComponent },

    { path: 'exam-grade', component: ExamGradeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExamRoutingModule {

}

