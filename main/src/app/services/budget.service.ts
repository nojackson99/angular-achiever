import { Injectable } from '@angular/core';
import { WeeklyBudget } from '../models/weekly-budget.model';
import { DateExtend } from '../util/dateExtend';

// [x] todo: fix ending date so that it calculates properly based on starting date
// [x] todo: serve form as a modal and capture input
// [] todo: set up active budget week and display on budget page
// [] todo: begin functionality for adding expenses to a budget object

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  // stores budget information for current active profile
  weeklyBudgets: WeeklyBudget[] = [];
  displayedWeek: WeeklyBudget = null;

  constructor(private dateExtend: DateExtend) {}

  addToWeeklyBudgets(formResponse) {
    const startingDate: Date = new Date(
      formResponse.value.startingDate + 'T00:00:00'
    );
    const endingDate = this.dateExtend.addDays(new Date(startingDate), 6);
    const currentSpending =
      formResponse.value.carryOver + formResponse.value.tempSavingsAmount;
    const remainingSpending =
      formResponse.value.spendingLimit - currentSpending;
    const spendingPerDay = Math.floor(formResponse.value.spendingLimit / 7);

    const tempWeeklyBudget: WeeklyBudget = {
      startingDate: startingDate,
      endingDate: endingDate,
      spendingLimit: formResponse.value.spendingLimit,
      currentSpending: currentSpending,
      remainingSpending: remainingSpending,
      spendingPerDay: spendingPerDay,
      expenses: [],
    };

    console.log(tempWeeklyBudget);
    this.weeklyBudgets.push(tempWeeklyBudget);
  }
}
