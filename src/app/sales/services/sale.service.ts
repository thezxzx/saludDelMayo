import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Products } from '../../products/interface/products-interface';
import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  salesCollection: AngularFirestoreCollection;
  sales: Observable<Products[]>;

  constructor(
    private productsService: ProductsService,
    private af: AngularFirestore
  ) { }


  // Agregar venta
  async addSale( products: Products[] ): Promise<void> {
    try {
      await this.af.collection('sales').add( products );
    } catch ( err ) {
      console.log('Error en la línea 28 de sale.service.ts', err);
    }
  }

  // Obtener producto por código de barras
  async getProductByBarCode( barCode: string ) {
    return await this.productsService.getProductByBarCode( barCode );
  }
}
