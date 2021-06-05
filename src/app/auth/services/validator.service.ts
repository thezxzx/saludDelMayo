import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductsService } from '../../products/services/products.service';
import { Products } from '../../products/interface/products-interface';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  allProducts: Products[] = [];

  constructor( private productsService: ProductsService) {
    productsService.getAllProducts().subscribe( products => {
      this.allProducts! = products;
    });
  }

  camposIguales( campo1: string, campo2: string ) {
    
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      const pass1 = formGroup.get( campo1 )?.value;
      const pass2 = formGroup.get( campo2 )?.value;

      if( pass1 !== pass2 ) {
        formGroup.get( campo2 )?.setErrors( { noIguales: true });
        return { noIguales: true }
      }
      formGroup.get( campo2 )?.setErrors( null );
      return null;
    }
  }

  codigoExiste( code: string ) {
    return ( formGroup: AbstractControl ) => {

      const barCode = formGroup.get( code )?.value;

      return this.allProducts.forEach( product => {
        if( product.barCode === barCode ) {
          formGroup.get( code )?.setErrors( { existeCodigo: true } );
          return ({ existeCodigo: true })
        }
        return null;
      });

      // if( this.allProducts.includes( barCode ) ) {
      //   formGroup.get( code )?.setErrors( { existeCodigo: true } );
      //   console.log( barCode );
      //   return { existeCodigo: true }
      // }
    }
  }

  precioIgualMayor( total: string, payment: string ) {
    return ( formGroup: AbstractControl ) => {
      const tot = formGroup.get( total )?.value;
      const pay = formGroup.get( payment )?.value;

      if( tot - pay > 0)  {
        formGroup.get( payment )?.setErrors( { pagoInsuficiente: true } );
        return ( { pagoInsuficiente: true } );
      }
      return null;

    }
  }
}
