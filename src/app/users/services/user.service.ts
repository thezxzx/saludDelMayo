import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../auth/interface/user-interface';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersCollection: AngularFirestoreCollection;
  users: Observable<User[]>;

  constructor( private af: AngularFirestore,
               private afa: AngularFireAuth ) {
    this.usersCollection = this.af.collection('users');
    this.users = this.usersCollection.snapshotChanges()
                    .pipe(
                      map(
                        actions => {
                          return actions.map( a => {
                            const data = a.payload.doc.data() as User;
                            data.id = a.payload.doc.id;
                            return data;
                          }); // actions / map 
                        } // actions
                      ) // map 
                    ) // pipe 
  }


    // Obtener todos los productos
    getAllUsers(): Observable<User[]>{
      try {
        return this.users;
      } catch ( err ) {
        console.log( err );
      }
  
    }

  // Actualizar producto
  async updateUser( user: User ): Promise<void> {
    try {
      const id = user.id;
      this.af.collection('users').doc( id ).update( user );
    } catch ( err ) {
      console.log( err );
    }
  }

    // Eliminar producto
    async deleteUser( id: string ): Promise<void> {
      try {        
        await this.af.collection('users').doc( id ).delete();
      } catch ( err ) {
        console.log( err );
      }
    }
}
