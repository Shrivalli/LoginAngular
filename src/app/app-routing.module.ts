import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Emplist',component:EmplistComponent},
  {path:'Empdetail',component:EmpdetailComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
