import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ValidarClavePage } from "./validarClave.page";
const routes = [
    {
        path: "",
        component: ValidarClavePage,
    },
];
let ValidarClavePageRoutingModule = class ValidarClavePageRoutingModule {
};
ValidarClavePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }),
], ValidarClavePageRoutingModule);
export { ValidarClavePageRoutingModule };
//# sourceMappingURL=validarClave-routing.module.js.map
