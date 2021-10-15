import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Itinerary } from 'src/app/shared/models/itinerary.model';
import { ItineraryService } from '../services/itinerary.service';

@Component({
  selector: 'app-list-itinerary',
  templateUrl: './list-itinerary.component.html',
  styleUrls: ['./list-itinerary.component.css']
})
export class ListItineraryComponent implements OnInit {
  itineraries: Itinerary[] = [];

  constructor(
    private itineraryService: ItineraryService,
    private dialogService: NbDialogService
    ) { }

  ngOnInit(): void {
    this.itineraries = this.listItineraries();
  }

  listItineraries(): Itinerary[] {
    return this.itineraryService.list();
  }

  delete($event: any, itinerary: Itinerary, ref: NbDialogRef<any>) {
    $event.preventDefault();
    this.itineraryService.delete(itinerary.id!);
    ref.close();
    this.itineraries = this.listItineraries();
  }

  open(dialog: TemplateRef<any>, itinerary: Itinerary) {
    this.dialogService.open(dialog, { context: itinerary });
  }
}
