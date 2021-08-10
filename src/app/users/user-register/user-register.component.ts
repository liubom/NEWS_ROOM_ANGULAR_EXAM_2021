import {Component, ElementRef, OnInit} from '@angular/core';
import {UserRegisterService} from "../user-register.service";
import {map} from "rxjs/operators";
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
  newUser: {} = {};

  constructor(private userRegisterService: UserRegisterService, private el: ElementRef) {
  }

  register(userForm: NgForm): void {
    if (userForm.invalid) {
      return;
    }

    let {username, password} = userForm.form.value;
    this.userRegisterService
      .getUsers().pipe(
      map((u) => u.filter((x) => {
        return x.username === username;
      })))
      .subscribe(data => {
        return data.length > 0
          ? console.log('This user exists!')
          : this.userRegisterService.addUser(username, password, this.isAdmin).subscribe(data => this.newUser = data);
      })

    userForm.reset('');
  }

  ngOnInit(): void {
  }

}
