import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';

export const route: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'

          },
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'about-us',
            component: AboutUsComponent
          },
          {
            path: 'student',
            loadChildren: './student/student.module#StudentModule'
          },
          {
            path: 'employee',
            loadChildren: './employee/employee.module#EmployeeModule'
          }
      ]
    },

  ];

  @NgModule({
      imports: [RouterModule.forRoot(route)],
      exports: [RouterModule]
  })

  export class AppRoutingModule { }

