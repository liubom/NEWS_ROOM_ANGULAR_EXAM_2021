import {Directive, Injectable} from '@angular/core';

@Injectable(
  // {
  //   providedIn: "root"
  // }
)

@Directive({
  selector: '[appHeaderLoggedUser]',
})
export class HeaderLoggedUserDirective {

  isLoggedIn = !!JSON.parse(String(localStorage.getItem('loggedIn')));
  likesCount = 0;
  currentUser: string | null = '';

  constructor() {
  }

  likesCounterRefresh(): void {
    if(!!localStorage.getItem('currentUser')){
      this.currentUser = localStorage.getItem('currentUser');
      console.log(JSON.parse(String(localStorage.getItem(`${localStorage.getItem('currentUser')}_likes`)))?.length);
      this.likesCount = JSON.parse(String(localStorage.getItem(`${localStorage.getItem('currentUser')}_likes`)))?.length;
    }
  }
}
