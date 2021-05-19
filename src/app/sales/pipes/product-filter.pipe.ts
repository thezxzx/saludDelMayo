import { Pipe, PipeTransform } from '@angular/core';
import { Products } from 'src/app/products/interface/products-interface';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform( allProducts: Products[], searchProduct: string ): any {
    if ( searchProduct === '' ) {
      return;
    }
    

    searchProduct = searchProduct.toLowerCase();

    return allProducts.filter( item => {
      return item.name.toLowerCase().includes( searchProduct );
    });
  }

}
