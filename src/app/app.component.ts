import { Component } from '@angular/core';
import { faGlobeAmericas, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { LoginService } from './auth/services/login.service';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travel-app';
  faGlobeAmericas = faGlobeAmericas;
  faSignOutAlt = faSignOutAlt;
  isLoggedIn: boolean = false;

  items: NbMenuItem[] = [
    {
      title: 'Usuário',
      link: 'user/edit/:id',
      icon: 'person-outline',
    },
    {
      title: 'Roteiros',
      link: 'itinerary/list',
      icon: 'map-outline',
    },
    {
      title: 'Novo roteiro',
      link: 'itinerary/create',
      icon: 'plus-circle-outline',
    },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private loginService: LoginService,
    private sharedService: SharedService
    ) {
      sharedService.eventEmitterIsLoggedIn.subscribe(
        (isLoggedIn) => {
          this.isLoggedIn = isLoggedIn;
        }
      );
      sharedService.eventEmitterUserId.subscribe(
        (items) => {
          this.items = items;
        }
      );
  }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.loggedUser !== null ? true : false;
  }

  toggle() {
    this.sidebarService.toggle(true);
  }

  logout() {
    this.isLoggedIn = false;
    this.loginService.logout();
  }
}
