import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';



@NgModule({
  declarations: [
    SearchBarComponent,
    ProductFilterPipe
  ],
  exports: [
    SearchBarComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ProductsModule { }
