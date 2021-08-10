import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {UserRegisterService} from "../user-register.service";
import {filter, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  isAdmin: boolean = false;
  username!: string;
  password!: string;

  isCurrentUser: number = 0;
  newUser: {} = {};

  constructor(private userRegisterService: UserRegisterService) {
  }

  register(userForm: NgForm): void {
    let {username, password} = userForm.value;
    this.userRegisterService
      .getUsers().pipe(
      map((u) => u.filter((x) => x.username === userForm.value.username)))
      .subscribe(data => data.length > 0
        ? console.log('This user exists!')
        : this.userRegisterService.addUser(username, password, this.isAdmin).subscribe(data => this.newUser = data));

  }

  ngOnInit(): void {
  }

}
