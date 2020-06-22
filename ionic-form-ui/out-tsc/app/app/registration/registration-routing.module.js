import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationPage } from './registration.page';
const routes = [
    {
        path: '',
        component: RegistrationPage
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RegistrationPageRoutingModule);
export { RegistrationPageRoutingModule };
//# sourceMappingURL=registration-routing.module.js.map