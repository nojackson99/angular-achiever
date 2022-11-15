import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/Pages/profile/profile.service';
import { Profile } from '../../profile/profile.modle';

@Component({
  selector: 'app-home',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomePage implements OnInit {
  activeProfileFirstName: string = null;
  activeProfile: Profile = null;
  testResponse: any = null;

  constructor(
    private profileService: ProfileService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.activeProfile = this.ActiveProfile;
  }

  // Clear active profile and return user to app home
  signOut() {
    // sign out active profile
    this.profileService.activeProfile = null;

    this.navController.navigateRoot('/');
  }

  // Get active profile from profile.service
  get ActiveProfile(): Profile {
    if (this.profileService.activeProfile == null) {
      // Call function to retrieve active profile from local storage
      this.profileService.getActiveProfiles();
    }

    return this.profileService.activeProfile;
  }

  //! USED TO TEST LAMBDA NOT FOR ACTUAL APP FUNCTION
  // sendDataToLambda() {
  //   this.profileService
  //     .postActiveProfile()
  //     .subscribe((data) => console.log(data));

  //   console.log(`testResponse is: ${this.testResponse}`);
  // }
}
