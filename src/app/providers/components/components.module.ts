import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
