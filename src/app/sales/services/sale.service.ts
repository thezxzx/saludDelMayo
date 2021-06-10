import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Products } from '../../products/interface/products-interface';
import { ProductsService } from '../../products/services/products.service';
import { Sale } from '../interfaces/sale-interface';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  salesCollection: AngularFirestoreCollection;
  sales: Observable<Products[]>;

  tableSels = [];
  searchedProducts: Products[] = [];

  total: number = 0;

  constructor(
    private productsService: ProductsService,
    private af: AngularFirestore
  ) { }

  async getSalesToday() {
    try {
      const todayDate = new Date().toLocaleDateString();
      const doc = this.af.collection('sales').ref.where('createdAt', '==', todayDate )
            .get();
      return doc;
    } catch ( err ) {
      console.log( err );
    }
  }

  // Agregar venta
  async addSale( sale: Sale[], searchedProducts: Products[], form: any ): Promise<void> {
    try {

      let products = {};

      let product = {
        quantity: 0,
        unitPrice: 0
      };

      searchedProducts.forEach( prod => {
        const stock = prod.stock - sale[prod.id].quantity;
        product.quantity = sale[prod.id].quantity;
        product.unitPrice = sale[prod.id].unitPrice;

        products[prod.name] = {...product};

        this.updateFromProducts( prod.id, stock );
      });

      products['total'] = form.total;
      products['pagado'] = form.pagado;
      products['cambio'] = form.cambio;
      products['createdAt'] = new Date().toLocaleDateString();

      await this.af.collection('sales').add( products );
      
    } catch ( err ) {
      console.log('Error en la línea 62 de sale.service.ts', err);
    }
  }

  async updateFromProducts( productID: string, stock: number ) {
    try {

      this.af.doc(`products/${ productID }`).set({
        stock
      },{ merge: true} )

    //   console.log( productID );
    //   await this.af.doc( `products/${ productID }` ).snapshotChanges()
    //   .subscribe( e => {
    //     console.log( e );
    //   })

    } catch ( err ) {
      console.log( err );
    }
  }

  // Obtener producto por código de barras
  async getProductByBarCode( barCode: string ) {
    return await this.productsService.getProductByBarCode( barCode );
  }
}
