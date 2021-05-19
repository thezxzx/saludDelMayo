import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalePageRoutingModule } from './sale-routing.module';

import { SalePage } from './sale.page';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalePageRoutingModule
  ],
  declarations: [
    SalePage,
    ProductFilterPipe
  ]
})
export class SalePageModule {}
