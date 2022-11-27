import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { BudgetFormComponent } from 'src/app/components/budget-form/budget-form.component';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget-list.page.html',
  styleUrls: ['./budget-list.scss'],
})
export class BudgetPage implements OnInit {
  activeProfile: Profile = null;

  constructor(
    private profileService: ProfileService,
    private navController: NavController,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activeProfile = this.profileService.ActiveProfile;
  }

  signOut() {
    // sign out active profile
    this.profileService.activeProfile = null;

    this.navController.navigateRoot('/');
  }

  openDialog() {
    this.dialog.open(BudgetFormComponent, {
      // add global style to dialog, defined in global.css
      panelClass: 'no-padding',
    });
  }
}
