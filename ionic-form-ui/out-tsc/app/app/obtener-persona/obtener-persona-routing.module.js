import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ObtenerPersonaPage } from "./obtener-persona.page";
const routes = [
    {
        path: "",
        component: ObtenerPersonaPage,
    },
];
let ObtenerPersonaPageRoutingModule = class ObtenerPersonaPageRoutingModule {
};
ObtenerPersonaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }),
], ObtenerPersonaPageRoutingModule);
export { ObtenerPersonaPageRoutingModule };
//# sourceMappingURL=obtener-persona-routing.module.js.map
