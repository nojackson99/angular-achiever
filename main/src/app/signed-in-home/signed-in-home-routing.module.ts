import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignedInHomePage } from './signed-in-home.page';

const routes: Routes = [
  {
    path: '',
    component: SignedInHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignedInHomePageRoutingModule {}
