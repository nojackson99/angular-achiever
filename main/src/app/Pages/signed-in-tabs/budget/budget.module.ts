import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPageRoutingModule } from './budget-routing.module';

import { BudgetPage } from './budget.page';
import { NewBudgetModalComponent } from 'src/app/Components/new-budget-modal/new-budget-modal.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BudgetPageRoutingModule],
  declarations: [BudgetPage, NewBudgetModalComponent],
})
export class BudgetPageModule {}
