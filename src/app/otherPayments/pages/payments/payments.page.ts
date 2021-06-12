import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { payment } from '../../interface/payment.interface';
import { PaymentsService } from '../../services/payments.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  safeURL: SafeUrl;
  fileName: string = '';
  total: number = 0;
  tableValues: payment = {
    description: '',
    price: 0
  };

  tableLength: payment[] = [{
    description: '',
    price: 0
  }];

  submitValues: payment[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private menu: MenuController,
    private alertCtrl: AlertController,
    private paymentService: PaymentsService
  ) { }

  ngOnInit() {
    // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first' );
  }

  // Abrir menú
  onToggleMenu() {
    this.menu.enable( true, 'first' );
    this.menu.open('first');
  }

  // Subir formulario
  onSubmit() {

    let isError: boolean = false;
    this.tableLength.forEach( ( item, index ) => {
      if( item.description === '' ) {
        isError = true;
        return;
      }

      if( item.price <= 0 ) {
        isError = true;
      }
    });
    
    if ( isError ) {
      this.presentAlert( 'Error', 'Tienes que ingresar un valor primero' );
      return;
    }

    this.tableLength.push( {...this.tableValues} );
    
    this.tableValues.description = '';
    this.tableValues.price = 0;    
    


    this.submitValues = [];
    for (let i = 0; i < this.tableLength.length-1; i++) {
      const time = uuidv4();
      const { description } = { ...this.tableLength[i] };
      console.log( description );
      this.tableLength[i].description = `${ this.tableLength[i].description } |${ time }`
      this.submitValues[`pago${i}`] = { ...this.tableLength[i] };
    }
    
    
    this.submitValues['createdAt'] = new Date().toLocaleDateString();
    console.log( this.submitValues );
    
    
    this.paymentService.addPayment( this.submitValues );
    this.submitValues = [];
    this.tableLength = [];

    this.presentAlert( '', 'Pago guardado');
  }

  // Eliminar valor de la tabla
  removeItem( index: number ) {
    this.tableLength.splice( index, 1 );
  }


  async tableLengthPlusOne() {
    
    let isError: boolean = false;
    this.tableLength.forEach( ( item, index ) => {
      if( item.description === '' ) {
        console.log( item, index + 1 );
        isError = true;
        this.presentAlert( 'Error', 'La descripción no puede estar vacía', index + 1 );
        return;
      }

      if( item.price <= 0 ) {
        isError = true;
        this.presentAlert( 'Error', 'El precio no puede ser menor a 1', index + 1 );
      }
    });
    
    if ( isError ) {
      return;
    }

    this.tableLength.push( {...this.tableValues} );
    console.log( this.tableLength );
    
    this.tableValues.description = '';
    this.tableValues.price = 0;    
  }

  async downloadReport() {
    const docs = [];
    const data = await this.paymentService.getPaymentsToday();
    data.docs.forEach(item => {
      docs.push(item.data());
    });

    const docsKeys = [];
    docs.forEach(key => {
      docsKeys.push(Object.keys(key));
    });

    const sales = [];

    console.log(docs);

    for (const key of docsKeys) {
      for (const val of key) {
        
        if (val === 'createdAt' )
          continue;

        for (const doc of docs) {
          if (typeof doc[val] === 'undefined')
            continue;
          
          const payment = {
            Nombre: val,
            Descripcion: doc[val].description,
            Precio: doc[val].price
          }
          sales.push( payment )          
        }

      }
    }


    const uniquePayment: any = Array.from( sales.reduce( ( map, obj ) => map.set( obj.Descripcion, obj), new Map() ).values() );
    uniquePayment.forEach( item => {
      this.total += item['Precio'];
    });
    


    for (let i = 0; i < uniquePayment.length; i++) {
      uniquePayment[i].Descripcion = uniquePayment[i].Descripcion.split('|')[0].trim();
    }

    console.log( uniquePayment );
    
    

    const JSONObject = JSON.stringify( uniquePayment );
    this.fileName = 'Ventas del ' + new Date().toLocaleDateString();
    this.downloadFile( JSONObject, this.fileName );

  }

  downloadFile(data, filename = 'data') {
    console.log( data );
    
    let csvData = this.ConvertToCSV(data, ['Descripcion', 'Precio']);
    // console.log(csvData)
    this.download( csvData, filename )
  }

  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'No,';
    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i + 1) + '';
      for (let index in headerList) {
        let head = headerList[index];
        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    str += '\r\n';
    str += ','+','+','+'Total'+','+this.total;
    console.log( str ); 
    return str;
  }

  download( csvData, filename='data' ) {
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    // let dwldLink = document.createElement("a");
    // console.log( dwldLink );
    let url = URL.createObjectURL(blob);
    this.safeURL = this.sanitizer.bypassSecurityTrustUrl( url );
    console.log( url );
    // let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    // if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
    //   dwldLink.setAttribute("target", "_blank");
    // }
    // dwldLink.setAttribute("href", url);
    // dwldLink.setAttribute("download", filename + ".csv");
    this.fileName = `${ filename }.csv`;
    // dwldLink.style.visibility = "hidden";
    // document.body.appendChild(dwldLink);
    // dwldLink.click();
    // document.body.removeChild(dwldLink);
  }

  async presentAlert( header: string, message: string, line?: number ) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
