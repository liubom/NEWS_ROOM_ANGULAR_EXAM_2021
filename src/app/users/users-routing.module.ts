import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserRegisterComponent} from "./user-register/user-register.component";

const routes: Routes = [
  {path: 'register', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
