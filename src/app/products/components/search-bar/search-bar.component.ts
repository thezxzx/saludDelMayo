import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products-interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  search: string = '';
  
  allProducts: Products[] = [];

  constructor( private productsService: ProductsService ) {
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
    if ( this.productsService.filteredProduct.includes( product ) ) {
      return;
    }
    this.productsService.filteredProduct.push( product );
  }
}
