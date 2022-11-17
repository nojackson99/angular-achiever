import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { BudgetFormComponent } from 'src/app/components/budget-form/budget-form.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {
  activeProfileFirstName: string = null;
  modalIsOpen = false;

  constructor(
    private profileService: ProfileService,
    private navController: NavController,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activeProfileFirstName = this.profileService.activeProfile.fname;
  }

  signOut() {
    // sign out active profile
    this.profileService.activeProfile = null;

    this.navController.navigateRoot('/');
  }

  openDialog() {
    this.dialog.open(BudgetFormComponent);
  }
}
