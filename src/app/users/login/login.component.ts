import {Component, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";
import {UserRegisterService} from "../user-register.service";
import {map} from "rxjs/operators";
import {HeaderLoggedUserDirective} from "../../header-logged-user.directive";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: IUser;
  password!: IUser;
  @Output() toCloseLogin = new EventEmitter();
  open: boolean = true;
  loggedIn: boolean = !!JSON.parse(String(localStorage.getItem('loggedIn')));

  constructor(private usersService: UserRegisterService, public headerDirective: HeaderLoggedUserDirective) {
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {user, password} = form.value;

    this.usersService
      .getUsers().pipe(
      map((u) => u.filter((x) => {
        return x.username === user && x.password === password;
      })))
      .subscribe(data => {
        if (data.length < 1) {
          console.log('Wrong Username or Password');
          return;
        } else {
          localStorage.setItem('currentUser', `${user}`);
          this.headerDirective.isLoggedIn = true;

          // localStorage.getItem('loggedIn') === 'true' ?
          // localStorage.setItem('loggedIn', 'false') :
          localStorage.setItem('loggedIn', 'true');
          this.headerDirective.likesCounterRefresh();
          this.headerDirective.isLoggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
          // this.loggedIn = !this.loggedIn;

          this.open = !this.open;
          this.toCloseLogin.emit({open: false, user: user});

          form.reset('');
        }
      })
  }

  cancelLogin() {
    this.open = !this.open;
    this.toCloseLogin.emit(false);
  }

  ngOnInit(): void {
  }
}
