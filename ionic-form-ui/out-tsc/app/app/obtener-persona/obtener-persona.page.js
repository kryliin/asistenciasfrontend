import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ObtenerPersonaService } from "../../app/services/obtener-persona.service";
let ObtenerPersonaPage = class ObtenerPersonaPage {
    constructor(obtenerPersonaService) {
        this.obtenerPersonaService = obtenerPersonaService;
        this.id = "14-7764";
    }
    ngOnInit() {
    }
    obtener() {
        console.log("llego al obtener");
        this.results = this.obtenerPersonaService.getPersona(this.id);
        console.log(this.results);
    }
};
ObtenerPersonaPage = tslib_1.__decorate([
    Component({
        selector: "app-obtener-persona",
        templateUrl: "./obtener-persona.page.html",
        styleUrls: ["./obtener-persona.page.scss"],
    }),
    tslib_1.__metadata("design:paramtypes", [ObtenerPersonaService]),
], ObtenerPersonaPage);
export { ObtenerPersonaPage };
//# sourceMappingURL=obtener-persona.page.js.map
