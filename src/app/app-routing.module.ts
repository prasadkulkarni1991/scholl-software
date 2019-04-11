import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { StudentComponent } from './student/student.component';

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
          }
      ]
    },
    // {
    // //   path: 'student',
    // //   component: StudentComponent,
    // //   children: [
    // //     {
    //         path: 'student',
    //         // canActivate: [BetaUserGuard],
    //         loadChildren: './student/student.module#StudentModule'
    //     //   },
    // //   ]
    // }
  ];

  @NgModule({
      imports: [RouterModule.forRoot(route)],
      exports: [RouterModule]
  })

  export class AppRoutingModule { }

