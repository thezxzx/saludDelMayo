import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { SaleService } from '../../../sales/services/sale.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  darkMode: boolean = true;
  user: string = '';
  userRole: string = '';
  total: number = 0;

  safeURL: SafeUrl;
  fileName: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private saleService: SaleService) {
    if ( this.authService.user$ ) {
      this.authService.user$.subscribe( user => {
        if ( user ) {
          this.user = `${ user.name } ${ user.lastName }`;
          this.userRole = user.role;
        } else {
          this.user = '';
        }
      });
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;

  } // Constructor

  // Activar / desactivar tema oscuro
  toggleDarkTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark');
  }

  ngOnInit() {}

  onLogOut() {
    this.authService.logout();
  }

  async getData() {
    const docs = [];
    const data = await this.saleService.getSalesToday();
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
        if (val === 'cambio' || val === 'createdAt' || val === 'total' || val === 'pagado')
          continue;

        for (const doc of docs) {
          if (typeof doc[val] === 'undefined')
            continue;
          const objSale = {
            Nombre: val,
            Cantidad: doc[val].quantity,
            Precio: doc[val].unitPrice,
            Total: doc[val].quantity * doc[val].unitPrice
          }
          sales.push(objSale);
        }

      }
    }

    sales.forEach(sale => {
      this.total += sale.Total;
    })
    console.log(sales);
    const JSONObject = JSON.stringify(sales);
    const fileName = 'Ventas del ' + new Date().toLocaleDateString()
    this.downloadFile(JSONObject, fileName);
  }

  downloadFile(data, filename = 'data') {
    let csvData = this.ConvertToCSV(data, ['Nombre', 'Cantidad', 'Precio', 'Total']);
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
    str += `\t\t\tTotal\t${ this.total }`,
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
}
