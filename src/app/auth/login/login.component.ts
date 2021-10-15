import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';
import { SharedService } from 'src/app/shared/service/shared.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  userLogin!: Login;
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    if (this.loginService.loggedUser) {
      this.router.navigate(["/itinerary/list"]);
    }
  }

  ngOnInit(): void {
    this.userLogin = new Login();
    this.route.queryParams.subscribe(params => {
      this.message = params['error'];
    });
  }

  login(): void {
    this.loading = true;
    if (this.loginForm.form.valid) {
      this.loginService.login(this.userLogin).subscribe((user) => {
        this.loginService.loggedUser = user;
        this.loading = false;
        this.sharedService.eventEmitterIsLoggedIn.emit(true);
        this.sharedService.eventEmitterUserId.emit(
          [
            {
              title: 'Usuário',
              link: 'user/edit/' + user?.id,
              icon: 'person-outline',
            },
            {
              title: 'Roteiros',
              link: 'itinerary/list',
              icon: 'map-outline',
            }
          ]
        );
        this.router.navigate(["/itinerary/list"]);
      })
    }
  }

}
