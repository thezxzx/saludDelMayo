import { Component, OnInit } from '@angular/core';
import { Products } from '../../interface/products-interface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  search: string = '';
  
  allProducts: Products[] = [];

  constructor() { }

  ngOnInit() {}

  // Buscar producto por el buscador ( nombre )
  onSearchProduct( productName: CustomEventInit ) {
    this.search = productName.detail.value;
  }
}
