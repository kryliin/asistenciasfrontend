import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarFotoPageRoutingModule } from './tomar-foto-routing.module';

import { TomarFotoPage } from './tomar-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarFotoPageRoutingModule
  ],
  declarations: [TomarFotoPage]
})
export class TomarFotoPageModule {}
