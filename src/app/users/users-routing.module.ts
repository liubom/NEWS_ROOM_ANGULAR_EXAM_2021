import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRegisterComponent} from "./user-register/user-register.component";
import {LoggedGuard} from "../logged.guard";

const routes: Routes = [
  {path: 'register', component: UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
