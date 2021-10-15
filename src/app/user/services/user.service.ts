import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

const LS_KEY: string = "users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  listUsers(): User[] {
    const users = localStorage[LS_KEY];
    return users ? JSON.parse(users) : [];
  }

  getUserById(id: number): User | undefined {
    const users = this.listUsers();
    return users.find(user => user.id == id);
  }

  insertUser(user: User) {
    const users = this.listUsers();
    const id = users.length !== 0 ? users[users.length - 1].id : 0;
    user.id = id !== undefined ? id + 1 : 1;

    users.push(user);

    localStorage[LS_KEY] = JSON.stringify(users);
  }

  updateUser(user: User) {
    const users = this.listUsers();
    users.forEach((object, index, objects) => {
      if (user.id == object.id) {
        objects[index] = user;
      }
    });

    localStorage[LS_KEY] = JSON.stringify(users);
  }

  deleteUser(id: number) {
    let users = this.listUsers();
    users.forEach((object, index) => {
      if (object.id == id) {
        users.splice(index, 1);
      }
    });
    
    localStorage[LS_KEY] = JSON.stringify(users);
  }
}
