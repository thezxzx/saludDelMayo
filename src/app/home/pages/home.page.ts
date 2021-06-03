import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private menu: MenuController ) {
      // Evita que el menú se abra arrastrando
    this.menu.swipeGesture( false, 'first');
  }

  ngOnInit() {
  }

  onToggleMenu() {
    this.menu.enable( true, 'first');
    this.menu.open('first');
  }
}
