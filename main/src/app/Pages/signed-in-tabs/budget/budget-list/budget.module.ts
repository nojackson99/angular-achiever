import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BudgetPageRoutingModule } from './budget-routing.module';

import { BudgetPage } from './budget.page';
import { BudgetListComponent } from 'src/app/components/budget-list/budget-list.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BudgetPageRoutingModule,
    BudgetListComponent,
    MaterialModule,
  ],
  declarations: [BudgetPage],
})
export class BudgetPageModule {}
