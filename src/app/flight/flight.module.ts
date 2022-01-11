import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { CreateEditFlightComponent } from './create-edit-flight/create-edit-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { FlightService } from './services/flight.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbListModule, NbIconModule, NbSidebarModule } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListFlightComponent,
    CreateEditFlightComponent,
    ViewFlightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbCardModule,
    NbListModule,
    NbEvaIconsModule,
    NbIconModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
    AuthModule,
    NbSidebarModule
  ],
  providers: [
    FlightService
  ]
})
export class FlightModule { }
