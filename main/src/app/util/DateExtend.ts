import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateExtend {
  constructor() {}

  // Add days to param Date and return
  addDays(date: Date, days: number) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
