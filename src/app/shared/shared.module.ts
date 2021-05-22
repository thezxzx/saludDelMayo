import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  exports: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
