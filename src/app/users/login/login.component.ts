import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {EventEmitter} from "@angular/core";

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

  constructor(private element: ElementRef) { }


  login(user: IUser){
    localStorage.getItem('loggedIn') === 'true' ? localStorage.setItem('loggedIn', 'false') : localStorage.setItem('loggedIn', 'true');
    this.loggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
    this.loggedIn = !this.loggedIn;
    console.log(this.loggedIn);
  }

  cancelLogin(){
    console.log('Login canceled!');
    this.open = !this.open;
    this.toCloseLogin.emit(false);
  }

  ngOnInit(): void {
  }
}
