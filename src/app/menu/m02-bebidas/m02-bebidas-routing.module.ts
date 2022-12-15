import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M02BebidasPage } from './m02-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: M02BebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M02BebidasPageRoutingModule {}
