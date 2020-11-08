import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImcHomePageRoutingModule } from './imc-home-routing.module';

import { ImcHomePage } from './imc-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImcHomePageRoutingModule
  ],
  declarations: [ImcHomePage]
})
export class ImcHomePageModule {}
