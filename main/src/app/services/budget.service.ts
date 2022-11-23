import { Injectable } from '@angular/core';
import { WeeklyBudget } from '../models/weekly-budget.model';
import { DateExtend } from '../util/dateExtend';

// TODO [X]: fix ending date so that it calculates properly based on starting date
// TODO [X]: serve form as a modal and capture input
// TODO []: set up active budget week and display on budget page
// TODO []: begin functionality for adding expenses to a budget object

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  // stores budget information for current active profile
  weeklyBudgets: WeeklyBudget[] = [
    {
      startingDate: new Date(),
      endingDate: new Date(),
      spendingLimit: 500,
      currentSpending: 100,
      remainingSpending: 400,
      spendingPerDay: 65,
      expenses: null,
    },
    {
      startingDate: new Date(),
      endingDate: new Date(),
      spendingLimit: 400,
      currentSpending: 200,
      remainingSpending: 400,
      spendingPerDay: 65,
      expenses: null,
    },
    {
      startingDate: new Date(),
      endingDate: new Date(),
      spendingLimit: 600,
      currentSpending: 150,
      remainingSpending: 400,
      spendingPerDay: 65,
      expenses: null,
    },
    {
      startingDate: new Date(),
      endingDate: new Date(),
      spendingLimit: 100,
      currentSpending: 67,
      remainingSpending: 400,
      spendingPerDay: 65,
      expenses: null,
    },
  ];
  activeBudget: WeeklyBudget = null;

  constructor(private dateExtend: DateExtend) {}

  // Calculate new WeeklyBudget object from form push to array and set as active.
  addToWeeklyBudgets(formResponse) {
    const startingDate: Date = new Date(
      // 'T00:00:00' sets date to eastern standard time.
      formResponse.value.startingDate + 'T00:00:00'
    );
    // Set endingDate to 6 days after form provided startingDate
    const endingDate = this.dateExtend.addDays(new Date(startingDate), 6);
    // Add carryOver and tempSavings to calculate starting currentSpending
    const currentSpending =
      formResponse.value.carryOver + formResponse.value.tempSavingsAmount;
    // Subtract currentSpending from spendingLimit to calculate remainingSpending
    const remainingSpending =
      formResponse.value.spendingLimit - currentSpending;
    // Divide spendingLimit by 7 rounded down to calculate spendingPerDay
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

    this.weeklyBudgets.push(tempWeeklyBudget);
  }
}
