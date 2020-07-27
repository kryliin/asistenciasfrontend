import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarClavePageRoutingModule } from './validarClave-routing.module';

import { ValidarClavePage } from './validarClave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarClavePageRoutingModule
  ],
  declarations: [ValidarClavePage]
})
export class ValidarClavePageModule {}
