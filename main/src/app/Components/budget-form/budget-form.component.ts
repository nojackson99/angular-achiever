import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'budget-form',
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
