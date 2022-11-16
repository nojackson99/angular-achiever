import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { WeeklyBudget } from 'src/app/models/weekly-budget.model';

@Component({
  selector: 'budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
})
export class BudgetFormComponent implements OnInit {
  constructor(private budgetService: BudgetService) {}

  ngOnInit() {}

  model: WeeklyBudget = {
    startingDate: new Date(),
    endingDate: new Date(),
    spendingLimit: 0,
    currentSpending: 0,
    remainingSpending: 0,
    spendingPerDay: 0,
    expenses: [],
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  submit(item: any) {
    console.log(item);

    this.budgetService.addToWeeklyBudgets(item);
  }
}
