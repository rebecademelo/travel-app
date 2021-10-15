import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';
import { User } from 'src/app/shared/models/user.model';


const LS_KEY: string = "loggedUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  public get loggedUser(): User | null {
    let user = localStorage[LS_KEY];
    return (user ? JSON.parse(user) : null);
  }

  public set loggedUser(user: User | null) {
    localStorage[LS_KEY] = JSON.stringify(user);
  }

  login(login: Login): Observable<User | null> {
    let user = new User(1, "Rebeca", "rebecademelo21@gmail.com", "12345678");
    if (login.email == user.email && login.password == user.password) {
      return of(user);
    } else {
      return of(null);
    }
  }

  logout() {
    delete localStorage[LS_KEY];
  }
}
