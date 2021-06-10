import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalePageRoutingModule } from './sale-routing.module';

import { SalePage } from './sale.page';
import { ModalFindProductComponent } from '../../components/modal-find-product/modal-find-product.component';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SalePageRoutingModule
  ],
  declarations: [
    SalePage,
    ModalFindProductComponent,
    ProductFilterPipe
  ]
})
export class SalePageModule {}
