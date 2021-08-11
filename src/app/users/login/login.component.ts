import {Component, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";
import {UserRegisterService} from "../user-register.service";
import {filter, map} from "rxjs/operators";

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

  constructor(private usersService: UserRegisterService) {
  }


  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    //Get all User
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

          // localStorage.getItem('loggedIn') === 'true' ?
          // localStorage.setItem('loggedIn', 'false') :
          localStorage.setItem('loggedIn', 'true');
          // this.loggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
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
