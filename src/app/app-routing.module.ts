import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';

import {LoginComponent} from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent},
 {path: 'forget-password', component: ForgetPasswordComponent},
 {path: '', redirectTo: '/login', pathMatch: 'full'},
 {path: 'admin', loadChildren: ()=> import ('./modules/admin/admin.module').then((m)=> m.AdminModule)},
 {path: '**', component: NotFoundComponent}, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
