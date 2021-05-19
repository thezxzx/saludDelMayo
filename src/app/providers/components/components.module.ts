import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    IonicModule,
    CommonModule
  ]
})
export class ComponentsModule { }
