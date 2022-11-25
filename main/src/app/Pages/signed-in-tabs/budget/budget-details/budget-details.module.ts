import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetDetailsPageRoutingModule } from './budget-details-routing.module';

import { BudgetDetailsPage } from './budget-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetDetailsPageRoutingModule
  ],
  declarations: [BudgetDetailsPage]
})
export class BudgetDetailsPageModule {}
