import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CheckPlatform {
  constructor(private platform: Platform) {}

  // function called get platform
  // return platform mobile/web to component where function is invoked
  // what is the point:
  // decide platform sizes in one place
  // instead of writing platform check logic in the component just call
  // bool isMobile = this.checkPlatform.mobile;
  // bool is used to control when mobile specific content is displayed and vice versa

  // Check if window size is mobile and return bool.
  get isMobile(): boolean {
    if (this.platform.width() < 500) {
      return true;
    } else {
      return false;
    }
  }

  // Check if window size is web and return bool.
  get isWeb(): boolean {
    if (this.platform.width() >= 500) {
      return true;
    } else {
      return false;
    }
  }
}
