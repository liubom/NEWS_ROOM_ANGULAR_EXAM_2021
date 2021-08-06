import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]

})
export class UsersModule { }
