import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignedInHomePageRoutingModule } from './signed-in-home-routing.module';

import { SignedInHomePage } from './signed-in-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignedInHomePageRoutingModule
  ],
  declarations: [SignedInHomePage]
})
export class SignedInHomePageModule {}
