import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {EventEmitter} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username!: IUser;
  password!: IUser;
  @Output() toCloseLogin = new EventEmitter();
  open: boolean = true;
  loggedIn: boolean = !!JSON.parse(String(localStorage.getItem('loggedIn')));

  test: string = 'TEST TEXT HERE IN THIS FIELD...';

  constructor(private element: ElementRef) { }


  login(form: NgForm){
    if (form.invalid) {
      console.log('Invalid Input');
      console.log(form.form.controls.user.value);
      return;
    }

    localStorage.setItem('currentUser', `${form.form.controls.user.value}`);

    localStorage.getItem('loggedIn') === 'true' ? localStorage.setItem('loggedIn', 'false') : localStorage.setItem('loggedIn', 'true');
    this.loggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
    this.loggedIn = !this.loggedIn;
    console.log(this.loggedIn);
    console.log(form.value);

    this.open = !this.open;
    this.toCloseLogin.emit({open: false, user: form.form.controls.user.value});
  }

  cancelLogin(){
    console.log('Login canceled!');
    this.open = !this.open;
    this.toCloseLogin.emit(false);
  }

  ngOnInit(): void {
  }
}
