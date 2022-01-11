import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { ItineraryModule } from './itinerary/itinerary.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbButtonModule, NbAlertModule, NbCardModule, NbDialogModule, NbSidebarModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlightModule } from './flight/flight.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    AuthModule,
    ItineraryModule,
    FlightModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbAlertModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
