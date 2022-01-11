import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRoutes } from './auth/aurh-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { CreateEditFlightComponent } from './flight/create-edit-flight/create-edit-flight.component';
import { ListFlightComponent } from './flight/list-flight/list-flight.component';
import { ViewFlightComponent } from './flight/view-flight/view-flight.component';
import { HomeComponent } from './home/home.component';
import { CreateEditItineraryComponent } from './itinerary/create-edit-itinerary/create-edit-itinerary.component';
import { ListItineraryComponent } from './itinerary/list-itinerary/list-itinerary.component';
import { ManageUserComponent } from './user/manage-user/manage-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    redirectTo: 'user/create'
  },
  {
    path: 'user/create',
    component: ManageUserComponent
  },
  {
    path: 'user/edit/:id',
    component: ManageUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itinerary/list',
    component: ListItineraryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itinerary/create',
    component: CreateEditItineraryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'itinerary/edit/:id',
    component: CreateEditItineraryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flight/list',
    component: ListFlightComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flight/create',//adicionar o id do itinerario
    component: CreateEditFlightComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flight/edit/:id',
    component: CreateEditFlightComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flight/view/:id',
    component: ViewFlightComponent,
    canActivate: [AuthGuard]
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
