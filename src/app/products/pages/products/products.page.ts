import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Products } from '../../interface/products-interface';
import { MenuController, ModalController } from '@ionic/angular';
import { ValidatorService } from '../../../auth/services/validator.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Observable<Products[]>;
  allProducts: Products[] = [];

  isUpdating: boolean = false;

  productId = '';

  categorias = [
    {
      name: 'Pastillas'
    },
    {
      name: 'Hierbas'
    },
    {
      name: 'Esotéricos'
    }
  ];

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private menu: MenuController,
              private validatorService: ValidatorService,
              private modalCtrl: ModalController ) {
                this.products = this.productsService.getAllProducts();
                this.products
                .subscribe( products => {
                  // Asignación de todos los productos y ordenados por la fecha de creación.
                  this.allProducts = products.sort( ( a, b ) => {
                    if( a.createdAt > b.createdAt ) {
                      return 1;
                    } if ( a.createdAt < b.createdAt ) {
                      return -1;
                    } else {
                      return 0;
                    }
                  });
                });
                
              }
              
  // Campos del formulario
  form: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required ] ],
    barCode: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    unitPrice: [ 0, [ Validators.required, Validators.min( 1 ), Validators.max( 1000 ) ] ],
    stock: [ 0, [ Validators.required, Validators.min( 1 ), Validators.max( 500 ) ] ],
    category: [ '', [ Validators.required ] ],
    // provider: [ '', [ Validators.required ] ]
    
  },{
    validators: [ this.validatorService.codigoExiste( 'barCode' ) ]
  });
  
  ngOnInit(): void {
    // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first');
  }

  // Abrir menú
  onToggleMenu() {
    this.menu.enable( true, 'first');
    this.menu.open('first');
  }

  // Guardar Producto
  onAddProduct(): void {

    const product = this.form.value;
    product.createdAt = new Date();

    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      console.log( this.form );
      console.log( product );
      return;
    }


    this.productsService.addProduct( product );
    this.form.reset();
  }

  // Eliminar Producto
  onDelete( id: string ): void {
    this.productsService.deleteProduct( id );
  }

  // Llenar el formulario cuando se da click en el botón de actualizar
  fillFormToUpdate( product: Products ): void {
    // Obtener todos los capmos de la tabla
    const { unitPrice, stock, barCode, category, id, name } = product;
    this.productId = id;

    // Asignar todos los campos al formulario
    this.form.get('name').setValue( name );
    this.form.get('barCode').setValue( barCode );
    this.form.get('unitPrice').setValue( unitPrice );
    this.form.get('stock').setValue( stock );
    this.form.get('category').setValue( category );
    // this.form.get('provider').setValue( provider );

    // Mostrar el botón de actualizar
    this.isUpdating = true;
  }

  // Reiniciar el formulario
  onCancel(): void {
    this.form.reset();
    this.isUpdating = false;
  }

  // Actualizar producto
  onUpdate() {

    // Obtener todos los valores del formulario y agregar la propiedad del id
    const product = this.form.value;
    product.id = this.productId;

    // Llamado del servicio para actualizar el producto.
    this.productsService.updateProduct( product );
    this.isUpdating = false;
    this.form.reset();
  }

  // Barra de busquedas
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: SearchBarComponent,
      cssClass: 'modal'
    });

    return await modal.present();
  }

  // Mostrar todos los productos en la tabla
  showAllProducts() {
    this.productsService.filteredProduct = [];
  }

  get filteredProduct() {
    return this.productsService.filteredProduct;
  }
}
