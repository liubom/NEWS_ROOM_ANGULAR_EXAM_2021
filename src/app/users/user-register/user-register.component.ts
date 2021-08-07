import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user";
import {UserRegisterService} from "../user-register.service";
import {filter, map} from "rxjs/operators";
import {Observable} from "rxjs";

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

  register(user: IUser): void {
    let {username, password} = user;
    this.userRegisterService
      .getUsers().pipe(
      map((u) => u.filter((x) => x.username === user.username)))
      .subscribe(data => data.length > 0
        ? console.log('This user exists!')
        : this.userRegisterService.addUser(username, password, this.isAdmin).subscribe(data => this.newUser = data));

  }

  ngOnInit(): void {
  }

}
