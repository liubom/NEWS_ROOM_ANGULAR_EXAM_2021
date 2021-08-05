import { Component, OnInit } from '@angular/core';
import {IUser} from "../interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: IUser;
  password!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
