import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  activeProfile: Profile = null;

  constructor(
    private profileService: ProfileService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.activeProfile = this.profileService.ActiveProfile;
  }

  signOut() {
    // sign out active profile
    this.profileService.activeProfile = null;

    this.navController.navigateRoot('/');
  }
}
