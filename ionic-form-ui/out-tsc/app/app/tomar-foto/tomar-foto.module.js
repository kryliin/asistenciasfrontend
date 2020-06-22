import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TomarFotoPageRoutingModule } from './tomar-foto-routing.module';
import { TomarFotoPage } from './tomar-foto.page';
let TomarFotoPageModule = class TomarFotoPageModule {
};
TomarFotoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TomarFotoPageRoutingModule
        ],
        declarations: [TomarFotoPage]
    })
], TomarFotoPageModule);
export { TomarFotoPageModule };
//# sourceMappingURL=tomar-foto.module.js.map