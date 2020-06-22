import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let ConfigService = class ConfigService {
    constructor(http) {
        this.http = http;
    }
};
ConfigService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ConfigService);
export { ConfigService };
//# sourceMappingURL=config.service.js.map