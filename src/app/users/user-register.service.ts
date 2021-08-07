import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>('http://localhost:5001/users');
  }

  addUser(username: string, password: string, isAdmin: boolean) {
    return this.http.post<IUser>('http://localhost:5001/users', {
      username: username,
      password: password,
      isAdmin: isAdmin
    });
  }
}
