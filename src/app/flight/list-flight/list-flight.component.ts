import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightService } from '../services/flight.service';
import { faDotCircle, faCircle, faPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})

export class ListFlightComponent implements OnInit {
  flights: Flight[] = [];
  faDotCircle = faDotCircle;
  faCircle = faCircle;
  faPlane = faPlane;

  constructor(
    private flightService: FlightService,
    private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.flights = this.listFlights();
  }

  listFlights(): Flight[] {
    return this.flightService.list();
  }

  deleteFlight($event: any, flight: Flight, ref: NbDialogRef<any>) {
    $event.preventDefault();
    this.flightService.delete(flight.id!);
    ref.close();
    this.flights = this.listFlights();
  }
  
  open(dialog: TemplateRef<any>, flight: Flight) {
    this.dialogService.open(dialog, { context: flight });
  }
}
