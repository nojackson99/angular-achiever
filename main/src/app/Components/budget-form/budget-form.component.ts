import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'budget-form',
  standalone: true,
  imports: [MaterialModule, FormsModule, IonicModule],
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
})
export class BudgetFormComponent implements OnInit {
  constructor(
    private budgetService: BudgetService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  // Bound to submit button on template form.
  // Submit form and close modal.
  submit(formResponse) {
    this.budgetService.addToWeeklyBudgets(formResponse);
    this.dialog.closeAll();
  }
}
