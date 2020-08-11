import { Injectable } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }  
}
