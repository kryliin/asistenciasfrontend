import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let ObtenerPersonaService = class ObtenerPersonaService {
    constructor(http) {
        this.http = http;
        this.url = 'http://www4.frcu.utn.edu.ar/api/';
        console.log('Hello HttpProvider Provider');
    }
    /*getPersona(id) {
        return this.http.get(`${this.url}get_persona.php?id=${id}`);
     }*/
    getPersona(id) {
        return this.http.get(`${this.url}get_persona.php?id=${id}`).pipe(map(results => ['results']));
        console.log('results');
    }
};
ObtenerPersonaService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ObtenerPersonaService);
export { ObtenerPersonaService };
//# sourceMappingURL=obtener-persona.service.js.map