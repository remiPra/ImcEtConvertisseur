import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertisseurPageRoutingModule } from './convertisseur-routing.module';

import { ConvertisseurPage } from './convertisseur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertisseurPageRoutingModule
  ],
  declarations: [ConvertisseurPage]
})
export class ConvertisseurPageModule {}
