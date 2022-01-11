import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItineraryService } from 'src/app/itinerary/services/itinerary.service';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-create-edit-flight',
  templateUrl: './create-edit-flight.component.html',
  styleUrls: ['./create-edit-flight.component.css']
})
export class CreateEditFlightComponent implements OnInit {
  @ViewChild('flightForm') flightForm! : NgForm;
  flight!: Flight;

  title: string = "";

  constructor(
    private flightService: FlightService,
    private itineraryService: ItineraryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] !== undefined) {
      this.title = "Editar voo";
      let id = this.route.snapshot.params['id'];
      const flightEdit = this.flightService.getById(id);
      if (flightEdit !== undefined) {
        this.flight = flightEdit;
      } else {
        throw new Error("Voo não encontrado com o id: " + id);
      }
    } else {
      this.title = "Adicionar voo";
      this.flight = new Flight();
      if (this.route.snapshot.params['itineraryId'] !== undefined) {
        let itineraryId = this.route.snapshot.params['itineraryId'];
        this.flight.itinerary = this.itineraryService.getById(itineraryId);
      }
    }
  }

  saveFlight(): void {
    if (this.flight.id !== null && this.flight.id !== undefined) {
      this.update();
    } else {
      this.insert();
    }
  }

  insert(): void {
    if (this.flightForm.form.valid) {
      this.flightService.insert(this.flight);
      this.router.navigate(["/flight/list"]);
    }
  }

  update(): void {
    if (this.flightForm.form.valid) {
      this.flightService.update(this.flight);
      this.router.navigate(["/flight/list"]);
    }
  }
}
