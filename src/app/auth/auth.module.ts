import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NbAlertModule, NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbCardModule
  ]
})
export class AuthModule { }
