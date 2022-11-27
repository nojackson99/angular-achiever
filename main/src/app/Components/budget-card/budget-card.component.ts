import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { WeeklyBudget } from 'src/app/models/weekly-budget.model';

@Component({
  selector: 'budget-card',
  templateUrl: './budget-card.component.html',
  standalone: true,
  imports: [MaterialModule, IonicModule, RouterModule],
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {
  @Input() budget!: WeeklyBudget;
  @Input() index!: Number;

  constructor(public navController: NavController) {}

  ngOnInit() {}

  onExpandCard() {
    this.navController.navigateForward(`/details/${this.index}`);
  }
}
