import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UserRegisterComponent} from './user-register/user-register.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    UserRegisterComponent,
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
  ]

})
export class UsersModule {
}
