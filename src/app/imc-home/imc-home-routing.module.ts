import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImcHomePage } from './imc-home.page';

const routes: Routes = [
  {
    path: '',
    component: ImcHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImcHomePageRoutingModule {}
