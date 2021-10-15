import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() eventEmitterIsLoggedIn: EventEmitter<any> = new EventEmitter();
  @Output() eventEmitterUserId: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
