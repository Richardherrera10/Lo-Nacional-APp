import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M01BebidasPageRoutingModule } from './m01-bebidas-routing.module';

import { M01BebidasPage } from './m01-bebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M01BebidasPageRoutingModule
  ],
  declarations: [M01BebidasPage]
})
export class M01BebidasPageModule {}
