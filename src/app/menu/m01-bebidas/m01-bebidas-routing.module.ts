import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M01BebidasPage } from './m01-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: M01BebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M01BebidasPageRoutingModule {}
