import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedUser = this.loginService.loggedUser;
      let url = state.url;
      if (loggedUser) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
}
