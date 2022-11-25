// Centralized module for all Angular Material imports

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [],
  exports: [
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  declarations: [],
})
export class MaterialModule {}
