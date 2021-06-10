import { Component, OnInit, Pipe } from '@angular/core';
import { Products } from '../../../products/interface/products-interface';
import { ProductsService } from '../../../products/services/products.service';
import { SaleService } from '../../services/sale.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-find-product',
  templateUrl: './modal-find-product.component.html',
  styleUrls: ['./modal-find-product.component.scss'],
})
export class ModalFindProductComponent implements OnInit {

  search: string = '';
  
  allProducts: Products[] = [];

  constructor(
    private productsService: ProductsService,
    private saleService: SaleService,
    private modalCtrl: ModalController ) {
    productsService.getAllProducts().subscribe( products => {
      this.allProducts = products;
    });
    
  }

  ngOnInit() {}

  // Buscar producto por el buscador ( nombre )
  onSearchProduct( productName: CustomEventInit ) {
    this.search = productName.detail.value;
  }
  
  addToFilteredProduct( product: Products ) {

    if( this.saleService.searchedProducts.length === 0 ) {
      this.saleService.searchedProducts.push( product );

      const productID = product.id;
      const productName = product.name;
      const unitPrice = product.unitPrice;
      const quantity = 1;
      const saleProduct = { productID, productName, unitPrice, quantity }; 

      this.saleService.tableSels[productID] = saleProduct;
      console.log( this.saleService.tableSels);
    
      let total = 0;
      this.saleService.searchedProducts.forEach( prod => {
        total += this.saleService.tableSels[ prod.id ].quantity * this.saleService.tableSels[ prod.id ].unitPrice;
      });
      this.saleService.total = total;

    }

    if( this.saleService.searchedProducts.includes( product ) ) {
      console.log( product );
      return;
    }

    const productID = product.id;
    const productName = product.name;
    const unitPrice = product.unitPrice;
    const quantity = 1;
    const saleProduct = { productID, productName, unitPrice, quantity }; 

    console.log( product.name );
    let existProduct: boolean = false;
    this.saleService.searchedProducts.forEach( item => {
      if( item.id === productID ) {
        console.log( item.id, item.name, item.barCode, productID );
        existProduct = true;
      }
    });
    console.log( existProduct );
    if ( existProduct ) {
      return;
    }

    this.saleService.searchedProducts.push( product );
    
    this.saleService.tableSels[productID] = saleProduct;
    console.log( this.saleService.tableSels);
    
    let total = 0;
    this.saleService.searchedProducts.forEach( prod => {
      total += this.saleService.tableSels[ prod.id ].quantity * this.saleService.tableSels[ prod.id ].unitPrice;
    });
    this.saleService.total = total;
    console.log( this.saleService.total );
    
    existProduct = false;
  }
  

}
