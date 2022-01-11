import { Injectable } from '@angular/core';
import { Flight } from 'src/app/shared/models/flight.model';

const LS_KEY: string = "flights";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }

  list(): Flight[] {
    const flights = localStorage[LS_KEY];
    return flights ? JSON.parse(flights) : [];
  }

  getById(id: number): Flight | undefined {
    const flights = this.list();
    return flights.find(flights => flights.id == id);
  }

  insert(flight: Flight) {
    const flights = this.list();
    const id = flights.length !== 0 ? flights[flights.length - 1].id : 0;
    flight.id = id !== undefined ? id + 1 : 1;

    flights.push(flight);

    localStorage[LS_KEY] = JSON.stringify(flights);
  }

  update(flight: Flight) {
    const flights = this.list();
    flights.forEach((object, index, objects) => {
      if (flight.id == object.id) {
        objects[index] = flight;
      }
    });

    localStorage[LS_KEY] = JSON.stringify(flights);
  }

  delete(id: number) {
    let flights = this.list();
    flights.forEach((object, index) => {
      if (object.id == id) {
        flights.splice(index, 1);
      }
    });

    localStorage[LS_KEY] = JSON.stringify(flights);
  }
}
