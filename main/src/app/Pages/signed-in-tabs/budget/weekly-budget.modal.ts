import { Expense } from './expense.modal';

export interface WeeklyBudget {
  startingDate: Date;
  endingDate: Date;
  spendingLimit: number;
  currentSpending: number;
  remainingSpending: number;
  spendingPerDay: number;
  expenses?: Expense[];
}
