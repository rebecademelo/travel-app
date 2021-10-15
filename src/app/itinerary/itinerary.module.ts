import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryService } from './services/itinerary.service';
import { CreateEditItineraryComponent } from './create-edit-itinerary/create-edit-itinerary.component';
import { FormsModule } from '@angular/forms';
import { ListItineraryComponent } from './list-itinerary/list-itinerary.component';
import { NbCardModule, NbIconModule, NbListModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from '../auth/auth.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    CreateEditItineraryComponent,
    ListItineraryComponent
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
    ItineraryService
  ]
})
export class ItineraryModule { }
