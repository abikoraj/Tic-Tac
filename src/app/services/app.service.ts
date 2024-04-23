import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  items=0;
  constructor() {
    console.log("services started");
   }
}
