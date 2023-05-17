import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmaRoutingModule } from './firma-routing.module';
import { FirmaComponent } from './firma/firma.component';


@NgModule({
  declarations: [
    FirmaComponent
  ],
  imports: [
    CommonModule,
    FirmaRoutingModule
  ]
})
export class FirmaModule { }
