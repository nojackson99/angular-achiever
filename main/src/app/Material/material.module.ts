// Centralized module for all Angular Material imports

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  declarations: [],
})
export class MaterialModule {}
