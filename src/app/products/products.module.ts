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
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class ProductsModule { }
