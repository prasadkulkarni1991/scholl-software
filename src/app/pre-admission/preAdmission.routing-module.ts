import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreAdmissionComponent } from './preAdmission.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'preadmission',
        pathMatch: 'full'
    },
    {
        path: 'preadmission',
        component: PreAdmissionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PreAdmissionRoutingModule {

}
