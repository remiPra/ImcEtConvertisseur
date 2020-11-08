import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'imc-home',
    pathMatch: 'full'
  },
 
  {
    path: 'imc-home',
    loadChildren: () => import('./imc-home/imc-home.module').then( m => m.ImcHomePageModule)
  },
  {
    path: 'convertisseur',
    loadChildren: () => import('./convertisseur/convertisseur.module').then( m => m.ConvertisseurPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
