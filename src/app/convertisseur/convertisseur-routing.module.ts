import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertisseurPage } from './convertisseur.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertisseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertisseurPageRoutingModule {}
