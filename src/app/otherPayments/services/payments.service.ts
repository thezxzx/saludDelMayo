import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { payment } from '../interface/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  salesCollection: AngularFirestoreCollection;

  tableSels = [];

  constructor(
    private af: AngularFirestore
  ) { }

  async getPaymentsToday() {
    try {
    
      const todayDate = new Date().toLocaleDateString();
      const doc = this.af.collection('payments').ref.where('createdAt', '==', todayDate ).get();

      return doc;
    } catch ( err ) {
      console.log( err );
      
    }
  }

  async addPayment( pay: payment[] ) {
    try {
    
      let payments = {};
      payments = { ...pay }
      

      await this.af.collection('payments').add( payments );
    } catch ( err ) {
      console.log( err );
    }
  }
}
