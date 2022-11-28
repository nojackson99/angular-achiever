import { Expense } from './expense.model';

export interface WeeklyBudget {
  startingDate: Date;
  endingDate: Date;
  startingDateDisplay: string;
  endingDateDisplay: string;
  spendingLimit: number;
  currentSpending: number;
  remainingSpending: number;
  spendingPerDay: number;
  expenses?: Expense[];
}
