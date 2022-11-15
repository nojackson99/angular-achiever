import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPageRoutingModule } from './budget-routing.module';

import { BudgetPage } from './budget.page';
import { NewBudgetModalComponent } from 'src/app/Components/new-budget-modal/new-budget-modal.component';
import { NewBudgetDialogComponent } from 'src/app/Components/new-budget-dialog/new-budget-dialog.component';
import { MaterialModule } from 'src/app/Material/material.module';
import { BudgetFormComponent } from 'src/app/Components/budget-form/budget-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetPageRoutingModule,
    MaterialModule,
  ],
  declarations: [
    BudgetPage,
    NewBudgetModalComponent,
    NewBudgetDialogComponent,
    BudgetFormComponent,
  ],
})
export class BudgetPageModule {}
