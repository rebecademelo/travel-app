import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../services/user.service';
import * as CryptoJS from 'crypto-js';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

const cryptoKey: string = "crypto-pass";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  @ViewChild('userForm') userForm! : NgForm;
  user! : User;

  title: string = "";

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] !== undefined) {
      this.title = "Editar conta";
      let id = this.route.snapshot.params['id'];
      const userEdit = this.userService.getUserById(id);
      if (userEdit !== undefined) {
        this.user = userEdit;
      } else {
        throw new Error ("Usuário não encontrado com o id: " + id);
      }
    } else {
      this.title = "Criar conta";
      this.user = new User();
    }
  }

  saveUser(): void {
    if (this.user.id !== null && this.user.id !== undefined) {
      this.update();
    } else {
      this.insert();
    }
  }

  insert(): void {
    if (this.userForm.form.valid) {
      /*if (this.user.password !== undefined) {
        this.user.password = CryptoJS.AES.encrypt(this.user.password, cryptoKey).toString();
      }*/
      this.userService.insertUser(this.user);
      this.router.navigate(["/login"]);
    }
  }

  update(): void {
    if (this.userForm.form.valid) {
      this.userService.updateUser(this.user);
      this.router.navigate(["/itinerary/list"]);
    }
  }

  delete($event: any, user: User, ref: NbDialogRef<any>): void {
    $event.preventDefault();
    this.userService.deleteUser(user.id!);
    ref.close();
    this.router.navigate(["/login"]);
  }

  open(dialog: TemplateRef<any>, user: User) {
    this.dialogService.open(dialog, { context: user });
  }
}
