import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

export class LoggedGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.ifLogged();
  }

  private isAuthenticated = false;

  constructor(private router: Router) {
  }

  private ifLogged(): boolean{

    if (!!localStorage.getItem('loggedIn')) {
      this.router.navigate(['/article']);
      return false;
    }
    else{
      return true;
    }
  }

}
