import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/shared/models/flight.model';
import { FlightService } from '../services/flight.service';
import { faDotCircle, faCircle, faPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {
  flight!: Flight;
  faDotCircle = faDotCircle;
  faCircle = faCircle;
  faPlane = faPlane;
  
  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id'] !== undefined) {
      let id = this.route.snapshot.params['id'];
      const flightView = this.flightService.getById(id);
      if (flightView !== undefined) {
        this.flight = flightView;
      } else {
        throw new Error("Voo não encontrado com o id: " + id);
      }
    }
  }
}
