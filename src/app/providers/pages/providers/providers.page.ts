import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, AlertController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProviderService } from '../../services/provider.service';
import { Provider } from '../../interface/provider-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.page.html',
  styleUrls: ['./providers.page.scss'],
})
export class ProvidersPage implements OnInit {

  providers: Observable<Provider[]>;
  allProviders: Provider[] = [];

  constructor(private menu: MenuController,
              private modalCtrl: ModalController,
              private providerService: ProviderService,
              private alerCtrl: AlertController) {
                this.providers = this.providerService.getAllProviders();
                this.providers
                .subscribe( providers => {
                  // Asignación de todos los proveedores y ordenados por nombre de compañia.
                  this.allProviders = providers.sort( ( a, b ) => {
                    if( a.nameCompany > b.nameCompany ){
                      return 1;
                    } if( a.nameCompany < b.nameCompany ) {
                      return -1;
                    } else {
                      return 0;
                    }
                  });
                });
  }

  ngOnInit() {
    // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first');
  }

  onToggleMenu() {
    this.menu.enable( true, 'first');
    this.menu.open('first');
  }

  async onDelete( providerId: string  ) {
    await this.presentAlert( providerId );
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'modal'
    });

    return await modal.present();
  }

  async presentModalProps( provider: Provider ) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'modal',
      componentProps: {
        'name': provider.nameProvider,
        'nameCompany': provider.nameCompany,
        'category': provider.category,
        'telephone': provider.telephone,
        'email': provider.email,
        'providerId': provider.id
      }
    });

    return await modal.present();
  }

  async presentAlert( providerId: string ) {

    const alert = await this.alerCtrl.create({
      header: '¿Está seguro que desea eliminar?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'OK',
          handler: () =>{
            this.providerService.deleteProvider( providerId );
          }
        }
      ]
    });

    await alert.present();

  }

}
