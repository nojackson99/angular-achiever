import { Injectable } from '@angular/core';
import { WeeklyBudget } from '../models/weekly-budget.model';

// [] todo: fix ending date so that it calculates properly based on starting date
// [] todo: serve form as a modal and capture input
// [] todo: set up active budget week and display on budget page
// [] todo: begin functionality for adding expenses to a budget object

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  weeklyBudgets: WeeklyBudget[] = [];
  displayedWeek: WeeklyBudget = null;

  constructor() {}

  addToWeeklyBudgets(item: any) {
    const startingDate: Date = item.startingDate;
    // [] todo: set up ending date so that it is 6 days after starting date
    const endingDate = new Date();
    const currentSpending = item.carryOver + item.tempSavingsAmount;
    const remainingSpending = item.spendingLimit - currentSpending;
    const spendingPerDay = Math.floor(item.spendingLimit / 7);

    const tempWeeklyBudget: WeeklyBudget = {
      startingDate: startingDate,
      endingDate: endingDate,
      spendingLimit: item.spendingLimit,
      currentSpending: currentSpending,
      remainingSpending: remainingSpending,
      spendingPerDay: spendingPerDay,
      expenses: [],
    };

    console.log(tempWeeklyBudget);
    this.weeklyBudgets.push(tempWeeklyBudget);
  }
}
