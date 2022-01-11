import { Time } from "@angular/common";
import { Itinerary } from "./itinerary.model";

export class Flight {
    constructor(
        public id?: number,
        public passenger?: string,
        public flightNumber?: string,
        public gate?: string,
        public seat?: string,
        public flightDate?: Date,
        public boarding?: Time,
        public departure?: Time,
        public arrival?: Time,
        public departureCountry?: string,
        public departureState?: string,
        public departureCity?: string,
        public departureAirport?: string,
        public arrivalCountry?: string,
        public arrivalState?: string,
        public arrivalCity?: string,
        public arrivalAirport?: string,
        public estimatedTime?: Time,
        public itinerary?: Itinerary
    ) {}
}
