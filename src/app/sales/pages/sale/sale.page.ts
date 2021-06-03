import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, AlertController } from '@ionic/angular';
import { SaleService } from '../../services/sale.service';
import { ProductsService } from '../../../products/services/products.service';
import { Products } from '../../../products/interface/products-interface';
import { ModalFindProductComponent } from '../../components/modal-find-product/modal-find-product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})

export class SalePage implements OnInit {

  search: string = '';
  allProducts: Products[] = [];


  constructor(
    private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private saleService: SaleService,
    private productsService: ProductsService
  ) {
    this.productsService.getAllProducts().subscribe( products => {
      this.allProducts = products;      
    });
  }

  ngOnInit() {
    // Acción para buscar con scanenr
    let interval;
    let barCode: string = '';

    document.addEventListener('keydown', ( e ) => {
      if( interval ) {
        clearInterval(interval);
      }
      if( e.code === 'Enter' ) {
        if( barCode ) {
          if( this.router.url === '/sale')
            this.getProductByBarCode( barCode );
        }
        barCode = '';
        return;
      }
      if( e.code !== 'Shift' ) {
        barCode += e.key;
      }

      interval = setInterval( () => barCode = '', 20 );
    });

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
  async getProductByBarCode( barCode: string ) {
    console.log( this.allProducts );
    
    const product = await this.saleService.getProductByBarCode( barCode );
    console.log( product );
  }

  // Mostrar modal
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalFindProductComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
