import { Expense } from './expense.model';

export interface WeeklyBudget {
  startingDate: Date;
  endingDate: Date;
  dateDisplay: string;
  spendingLimit: number;
  currentSpending: number;
  remainingSpending: number;
  spendingPerDay: number;
  expenses?: Expense[];
}
