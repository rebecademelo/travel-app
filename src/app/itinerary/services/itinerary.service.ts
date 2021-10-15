import { Injectable } from '@angular/core';
import { Itinerary } from 'src/app/shared/models/itinerary.model';

const LS_KEY: string = "itineraries";

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor() { }

  list(): Itinerary[] {
    const itineraries = localStorage[LS_KEY];
    return itineraries ? JSON.parse(itineraries) : [];
  }

  getById(id: number): Itinerary | undefined {
    const itineraries = this.list();
    return itineraries.find(itinerary => itinerary.id == id);
  }

  insert(itinerary: Itinerary) {
    const itineraries = this.list();
    const id = itineraries.length !== 0 ? itineraries[itineraries.length - 1].id : 0;//
    itinerary.id = id !== undefined ? id + 1 : 1;

    itineraries.push(itinerary);

    localStorage[LS_KEY] = JSON.stringify(itineraries);
  }

  update(itinerary: Itinerary) {
    const itineraries = this.list();
    itineraries.forEach((object, index, objects) => {
      if (itinerary.id == object.id) {
        objects[index] = itinerary;
      }
    });

    localStorage[LS_KEY] = JSON.stringify(itineraries);
  }

  delete(id: number) {
    let itineraries = this.list();
    itineraries.forEach((object, index) => {
      if (object.id == id) {
        itineraries.splice(index, 1);
      }
    });

    localStorage[LS_KEY] = JSON.stringify(itineraries);
  }
}
