import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { ProfileService } from 'src/app/Pages/profile/profile.service';
import { MatDialog } from '@angular/material/dialog';
import { NewBudgetDialogComponent } from 'src/app/Components/new-budget-dialog/new-budget-dialog.component';

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

  openModal() {
    //let dialogRef = dialog.open()
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }

  openDialog() {
    this.dialog.open(NewBudgetDialogComponent);
  }
}
