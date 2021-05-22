import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SaleService } from '../../services/sale.service';
import { ProductsService } from '../../../products/services/products.service';
import { Products } from '../../../products/interface/products-interface';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  search: string = '';
  allProducts: Products[] = [];
  
  constructor(
    private menu: MenuController,
    private saleService: SaleService,
    private productsService: ProductsService
  ) {
    this.productsService.getAllProducts().subscribe( products => {
      this.allProducts = products;
    });
  }

  ngOnInit() {
    // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first');
  }

  // Abrir menú
  onToggleMenu() {
    this.menu.enable( true, 'first');
    this.menu.open('first');
  }

  // Buscar producto por el buscador ( nombre )
  onSearchProduct( productName: CustomEventInit ) {
    this.search = productName.detail.value;
  }

  // Obtener producto por código de barra
  getProductByBarCode( barCode: string ) {
    this.saleService.getProductByBarCode( barCode );
  }
}
