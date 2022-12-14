import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../../../models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomePage implements OnInit {
  activeProfile: Profile = null;

  constructor(
    private profileService: ProfileService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.activeProfile = this.profileService.ActiveProfile;
  }

  // Clear active profile and return user to app home
  signOut() {
    // sign out active profile
    this.profileService.activeProfile = null;

    this.navController.navigateRoot('/');
  }

  //! USED TO TEST LAMBDA NOT FOR ACTUAL APP FUNCTION
  // sendDataToLambda() {
  //   this.profileService
  //     .postActiveProfile()
  //     .subscribe((data) => console.log(data));

  //   console.log(`testResponse is: ${this.testResponse}`);
  // }
}
