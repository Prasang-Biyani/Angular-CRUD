import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'add', component: AddUserComponent},
  { path: 'edit', component: EditUserComponent},
  { path: 'list', component: ListUserComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
