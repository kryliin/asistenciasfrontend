import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObtenerPersonaPageRoutingModule } from './obtener-persona-routing.module';

import { ObtenerPersonaPage } from './obtener-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObtenerPersonaPageRoutingModule
  ],
  declarations: [ObtenerPersonaPage]
})
export class ObtenerPersonaPageModule {}
