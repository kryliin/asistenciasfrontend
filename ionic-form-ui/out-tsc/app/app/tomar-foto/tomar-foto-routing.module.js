import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TomarFotoPage } from "./tomar-foto.page";
const routes = [
    {
        path: "",
        component: TomarFotoPage,
    },
];
let TomarFotoPageRoutingModule = class TomarFotoPageRoutingModule {
};
TomarFotoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    }),
], TomarFotoPageRoutingModule);
export { TomarFotoPageRoutingModule };
//# sourceMappingURL=tomar-foto-routing.module.js.map
