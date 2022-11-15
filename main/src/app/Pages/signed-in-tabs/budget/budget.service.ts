import { Injectable } from '@angular/core';
import { WeeklyBudget } from './weekly-budget.modle';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  weeklyBudgets: WeeklyBudget[] = null;
  displayedWeek: WeeklyBudget = null;

  constructor() {}
}
