import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase';
import { Provider } from '../interface/provider-interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  providersCollection: AngularFirestoreCollection;
  providers: Observable<Provider[]>;

  constructor(private af: AngularFirestore) {
          // Obtener datos cuando se produzca un cambio ( ingresar, actualizar, eliminar )    
          this.providersCollection = this.af.collection('providers');
          this.providers = this.providersCollection.snapshotChanges()
                          .pipe(
                            map(
                              actions => {
                                return actions.map( a => {
                                  const data = a.payload.doc.data() as Provider;
                                  data.id = a.payload.doc.id;
                                  return data;
                                }); // actions / map 
                              } // actions
                            ) // map 
                          ) // pipe 
  }

  // Obtener todos los proveedores
  getAllProviders(): Observable<Provider[]>{
    try {
      return this.providers;
    } catch ( err ) {
      console.log( 'Error en la línea 25 provider.Service', err );
    }
  
  }

  // Añadir Proveedor
  async addProvider( provider: Provider ): Promise<void> {
    try {
      await this.af.collection('providers').add( provider );
    } catch ( err ) {
      console.log( 'Error en la línea 25 provider.Service', err );
    }
  }

  // Eliminar Proveedor
  async deleteProvider( id: string ): Promise<void> {
    try {
      await this.af.collection('providers').doc( id ).delete();
    } catch ( err ) {
      console.log( 'Error en la línea 35 provider.Service', err );
    }
  }

  // Actualizar producto
  async updateProvider( provider: Provider ): Promise<void> {
    try {
      const id = provider.id;
      this.af.collection('providers').doc( id ).update( provider );
    } catch ( err ) {
      console.log( 'Error en la línea 44 provider.Service', err );
    }
  }
}