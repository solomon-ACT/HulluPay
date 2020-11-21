import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { AdminComponent } from '../app/admin/admin.component';

import { StatisticsComponent } from './statistics/statistics.component';



const routes: Routes = [
  // {path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path: 'statistics', component:StatisticsComponent},
  {path:'', component: LoginComponent},
  {path:'admin',component:AdminComponent}
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
