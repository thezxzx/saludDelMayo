import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalePageRoutingModule } from './sale-routing.module';

import { SalePage } from './sale.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SalePageRoutingModule
  ],
  declarations: [
    SalePage
  ]
})
export class SalePageModule {}
