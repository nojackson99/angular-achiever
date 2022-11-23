import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { BudgetCardComponent } from '../budget-card/budget-card.component';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [CommonModule, BudgetCardComponent],
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss'],
})
export class BudgetListComponent implements OnInit {
  constructor(readonly budgetService: BudgetService) {}

  ngOnInit() {}
}
