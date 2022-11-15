// Centralized module for all Angular Material imports

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [MatDialogModule],
  exports: [MatDialogModule],
  declarations: [],
})
export class MaterialModule {}
