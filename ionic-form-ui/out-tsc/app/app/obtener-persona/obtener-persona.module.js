import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ObtenerPersonaPageRoutingModule } from './obtener-persona-routing.module';
import { ObtenerPersonaPage } from './obtener-persona.page';
let ObtenerPersonaPageModule = class ObtenerPersonaPageModule {
};
ObtenerPersonaPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ObtenerPersonaPageRoutingModule
        ],
        declarations: [ObtenerPersonaPage]
    })
], ObtenerPersonaPageModule);
export { ObtenerPersonaPageModule };
//# sourceMappingURL=obtener-persona.module.js.map