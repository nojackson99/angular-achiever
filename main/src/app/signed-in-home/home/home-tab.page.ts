import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomePage implements OnInit {
  activeProfileFirstName: string = null;
  testResponse: any = null;

  constructor(
    private profileService: ProfileService,
    private navController: NavController) { }

  ngOnInit() {
    this.activeProfileFirstName = this.profileService.activeProfile.fname
  }

  signOut() {
    // sign out active profile
    this.profileService.activeProfile = null;

    this.navController.navigateRoot('/')
  }

  sendDataToLambda() {
    this.profileService.postActiveProfile()
      .subscribe(data => console.log(data))

    console.log(`testResponse is: ${this.testResponse}`)
  }

}
