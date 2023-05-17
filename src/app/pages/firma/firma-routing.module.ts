import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirmaComponent } from './firma/firma.component';

const routes: Routes = [
  {
    path: '',
    component: FirmaComponent,
  },
  
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmaRoutingModule { }
