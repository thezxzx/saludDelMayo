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

  search: string = '';
  allProducts: Products[] = [];
  searchedProducts: Products[] = [];
  totalReal: number = 0;
  payment: number = 0;
  change: number = 0;

  sales = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private menu: MenuController,
    private modalCtrl: ModalController,
    private saleService: SaleService,
    private validatorService: ValidatorService,
    private productsService: ProductsService
  ) {
    this.productsService.getAllProducts().subscribe( products => {
      this.allProducts = products.filter( item => item.stock > 0);      
    });

  }

  // Formulario
  form: FormGroup = this.formBuilder.group({
    pagado: [ , [ Validators.required, Validators.min( 1 ) ] ],
    cambio: [ , [ Validators.required, Validators.min( 0 ) ] ],
    total: [ , [ Validators.required, Validators.min( 1 ) ] ]
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
    this.change = this.payment - this.totalReal;
    this.form.get('cambio').setValue( this.change );
  }

  // Añadir venta
  onAddSale() {
    if( this.form.invalid ) {
      console.log( this.form.value );
      return;
    }

    this.saleService.addSale( this.sales, this.searchedProducts, this.form.value );

    this.form.reset();
    this.sales = [];
    this.searchedProducts = [];
    this.form.get('cambio').setValue( '' );

  }

  getProductValues( product: Products, ev? ) {

    const productID = product.id;
    const unitPrice = product.unitPrice;
    const quantity = ev.detail?.value ? ev.detail.value : 1;
    const saleProduct = { productID, unitPrice, quantity }; 

    this.sales[productID] = saleProduct;

    let total = 0;
    this.searchedProducts.forEach( prod => {
      total += this.sales[ prod.id ].quantity * this.sales[ prod.id ].unitPrice;
    }); 

    this.totalReal = total;
    this.form.get('total').setValue(this.totalReal);
    this.form.get('cambio').setValue( this.payment - this.totalReal );
  }

  // Buscar producto por el buscador ( nombre )
  onSearchProduct( productName: CustomEventInit ) {
    this.search = productName.detail.value;
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

    if ( this.searchedProducts.includes( product ) ) {
      return;
    }

    
    const productID = product.id;
    const unitPrice = product.unitPrice;
    const productName = product.name;
    this.sales[ productID ] = { productID, productName, unitPrice, quantity: "1" }

    this.searchedProducts.push( product );

    // total al mostrar
    let total: number = 0;
    // Mostrando el total en el campo
    this.searchedProducts.forEach( prod => {
      total += prod.unitPrice * 1;
    });
    this.totalReal = total;
    this.form.get('total').setValue( this.totalReal );
    this.form.get('cambio').setValue( this.payment - this.totalReal );
  }
  
  // Mostrar modal
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalFindProductComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  deleteFromTable( product: Products, index: number ) {
    this.searchedProducts.splice( index, 1 );
    delete this.sales[product.id];

    let total = 0;
    this.searchedProducts.forEach( prod => {
      total += this.sales[ prod.id ].quantity * this.sales[ prod.id ].unitPrice;
    }); 

    this.totalReal = total;
    this.form.get('total').setValue(this.totalReal);
    this.form.get('cambio').setValue( this.payment - this.totalReal );
    
  }

}
