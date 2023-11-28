 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  closeForm(): void {
    // Your implementation for closing the form
    console.log('Closing form...');
  }
}
