import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormModule )
  },
  {
    path: 'firma',
    loadChildren: () => import('./pages/firma/firma.module').then( m => m.FirmaModule )
  },
  {
    path: '**',
    redirectTo: 'form',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
