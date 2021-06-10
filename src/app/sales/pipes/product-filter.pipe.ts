import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../../products/interface/products-interface';

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
      return item.barCode.includes( searchProduct );
    });
  }

}
