import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  clearLocalStorage() {
    console.log('in clear local storage');
    localStorage.clear();
  }
}
