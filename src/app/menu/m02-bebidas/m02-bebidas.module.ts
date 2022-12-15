import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M02BebidasPageRoutingModule } from './m02-bebidas-routing.module';

import { M02BebidasPage } from './m02-bebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M02BebidasPageRoutingModule
  ],
  declarations: [M02BebidasPage]
})
export class M02BebidasPageModule {}
