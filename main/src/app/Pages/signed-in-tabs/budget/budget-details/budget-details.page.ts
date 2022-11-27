import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeeklyBudget } from 'src/app/models/weekly-budget.model';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-details',
  templateUrl: './budget-details.page.html',
  styleUrls: ['./budget-details.page.scss'],
})
export class BudgetDetailsPage implements OnInit {
  weeklyBudget$: Observable<WeeklyBudget | undefined>;

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.weeklyBudget$ = this.route.paramMap.pipe(
      map((params) => {
        return this.budgetService.weeklyBudgets[Number(params.get('index'))];
      })
    );
  }
}
