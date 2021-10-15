import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbSidebarModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbCardModule,
    NbSidebarModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
