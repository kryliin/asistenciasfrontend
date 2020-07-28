import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarFotoPage } from './tomar-foto.page';

const routes: Routes = [
  {
    path: '',
    component: TomarFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarFotoPageRoutingModule {}
