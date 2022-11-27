import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { MaterialModule } from 'src/app/material/material.module';
import { WeeklyBudget } from 'src/app/models/weekly-budget.model';

@Component({
  selector: 'budget-card',
  templateUrl: './budget-card.component.html',
  standalone: true,
  //? is commonModule needed here?
  imports: [MaterialModule, IonicModule, CommonModule, RouterModule],
  styleUrls: ['./budget-card.component.scss'],
})
export class BudgetCardComponent implements OnInit {
  @Input() budget!: WeeklyBudget;
  @Input() index!: Number;

  constructor(public navController: NavController) {}

  ngOnInit() {}

  navigate() {
    this.navController.navigateForward(`/details/${this.index}`);
  }
}
