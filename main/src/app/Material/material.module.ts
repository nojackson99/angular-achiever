// Centralized module for all Angular Material imports

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatDialogModule, MatButtonModule],
  exports: [MatDialogModule, MatButtonModule],
  declarations: [],
})
export class MaterialModule {}
