import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password.page';
const routes = [
    {
        path: '',
        component: ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ForgotPasswordPageRoutingModule);
export { ForgotPasswordPageRoutingModule };
//# sourceMappingURL=forgot-password-routing.module.js.map