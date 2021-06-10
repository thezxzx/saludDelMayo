import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, AlertController } from '@ionic/angular';
import { SaleService } from '../../services/sale.service';
import { ProductsService } from '../../../products/services/products.service';
import { Products } from '../../../products/interface/products-interface';
import { ModalFindProductComponent } from '../../components/modal-find-product/modal-find-product.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../auth/services/validator.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})

export class SalePage implements OnInit {
// 
  search: string = '';
  allProducts: Products[] = [];
  searchedProducts: Products[] = [];
  payment: number = 0;
  change: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    public saleService: SaleService,
    private validatorService: ValidatorService,
    private productsService: ProductsService
  ) {
    this.productsService.getAllProducts().subscribe( products => {
      this.allProducts = products.filter( item => item.stock > 0);      
    });

  }

  // Formulario
  form: FormGroup = this.formBuilder.group({
    pagado: [ 0, [ Validators.required, Validators.min( 1 ) ] ],
    cambio: [ 0, [ Validators.required, Validators.min( 0 ) ] ],
    total: [ this.saleService.total, [ Validators.required, Validators.min( 1 ) ] ]
  }, {
    validators: [ this.validatorService.precioIgualMayor( 'total', 'pagado' ) ]
  } );

  ngOnInit() {
    // Acción para buscar con scanner
    let interval;
    let barCode: string = '';

    // evento para buscar con el scanner
    document.addEventListener('keydown', ( e ) => {
      if( interval ) {
        clearInterval(interval);
      }
      if( e.code === 'Enter' ) {
        if( barCode ) {
          // Evita que se ejecute en otra pantalla
          if( this.router.url === '/sale')
            this.getProductByBarCode( barCode );
        }
        barCode = '';
        return;
      }
      if( e.code !== 'Shift' ) {
        barCode += e.key;
      }

      interval = setInterval( () => barCode = '', 500 );
    });

    // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first');

  }

  // Abrir menú
  onToggleMenu() {
    this.menu.enable( true, 'first');
    this.menu.open('first');
  }

  cambio() {
    this.payment = this.form.get('pagado').value;
    this.change = this.payment - this.saleService.total > 0 ? this.payment - this.saleService.total : 0;
    this.form.get('cambio').setValue( this.change );
  }

  // Añadir venta
  onAddSale() {
    if( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }

    this.saleService.addSale( this.saleService.tableSels, this.searchedProducts, this.form.value );
 
    this.form.reset();
    this.saleService.tableSels = [];
    this.saleService.searchedProducts = [];
    this.saleService.total = 0;
    this.searchedProducts = this.saleService.searchedProducts;
    this.form.get('cambio').setValue( 0 );

  }

  getProductValues( product: Products, ev? ) {
    
    const productID = product.id;
    const unitPrice = product.unitPrice;
    const quantity = ev.detail?.value ? ev.detail.value : 1;
    const saleProduct = { productID, unitPrice, quantity }; 

    this.saleService.tableSels[productID] = saleProduct;
    // console.log( product );

    let total = 0;
    
    this.saleService.searchedProducts.forEach( prod => {
      total += this.saleService.tableSels[ prod.id ].quantity * this.saleService.tableSels[ prod.id ].unitPrice;
    });

    console.log( total );
    
    this.saleService.total = total;
    this.form.get('total').setValue( this.saleService.total );
    this.change = this.payment - this.saleService.total > 0 ? this.payment - this.saleService.total : 0; 
    this.form.get('cambio').setValue( this.change );
  }

  // Obtener producto por código de barra
  async getProductByBarCode( barCode: string ) {
    let existsBarCode: boolean = false;
    if( !barCode ){
      return;
    };


    this.allProducts.find( item => {
      if( item.barCode === barCode ) {
        existsBarCode = true;
      }
    });

    if( !existsBarCode )
      return;

    const product = this.allProducts.find( item => {
      return item.barCode === barCode;
    });

    this.searchedProducts = this.saleService.searchedProducts;
    
    let existProduct: boolean = false;
    this.saleService.searchedProducts.forEach( item => {
      if( item.barCode === product.barCode ) {
        existProduct = true;
      }
    });

    if( existProduct ) {
      return;
    }
    
    const productID = product.id;
    const unitPrice = product.unitPrice;
    const productName = product.name;
    this.saleService.tableSels[ productID ] = { productID, productName, unitPrice, quantity: 1 }
    this.saleService.searchedProducts.push( product );
    
    this.searchedProducts = this.saleService.searchedProducts;


    // Mostrando el total en el campo
    this.saleService.searchedProducts.forEach( prod => {
      this.saleService.total += prod.unitPrice * 1;
    });
    // this.totalReal = total;
    this.form.get('total').setValue( this.saleService.total );
    this.change = this.payment - this.saleService.total > 0 ? this.payment - this.saleService.total : 0; 
    this.form.get('cambio').setValue( this.change );
    this.saleService.total = 0;
  }
  
  // Mostrar modal
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalFindProductComponent,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    
    const { data } = await modal.onWillDismiss();
    if( typeof data === 'undefined' )
      this.form.get('total').setValue( this.saleService.total );    
  }

  deleteFromTable( product: Products, index: number ) {
    this.saleService.searchedProducts.splice( index, 1 );
    delete this.saleService.tableSels[product.id];

    let total = 0;
    this.searchedProducts.forEach( prod => {
      total += this.saleService.tableSels[ prod.id ].quantity * this.saleService.tableSels[ prod.id ].unitPrice;
    }); 

    this.saleService.total = total;
    this.form.get('total').setValue( this.saleService.total );
    this.change = this.payment - this.saleService.total > 0 ? this.payment - this.saleService.total : 0; 
    this.form.get('cambio').setValue( this.change );
    
  }

}
