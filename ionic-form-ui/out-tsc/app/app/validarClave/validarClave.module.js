import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ValidarClavePageRoutingModule } from "./validarClave-routing.module";
import { ValidarClavePage } from "./validarClave.page";
let ValidarClavePageModule = class ValidarClavePageModule {
};
ValidarClavePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ValidarClavePageRoutingModule,
        ],
        declarations: [ValidarClavePage],
    }),
], ValidarClavePageModule);
export { ValidarClavePageModule };
//# sourceMappingURL=validarClave.module.js.map
