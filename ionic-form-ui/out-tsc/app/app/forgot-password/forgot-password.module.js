import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ForgotPasswordPageRoutingModule } from "./forgot-password-routing.module";
import { ForgotPasswordPage } from "./forgot-password.page";
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ForgotPasswordPageRoutingModule,
        ],
        declarations: [ForgotPasswordPage],
    }),
], ForgotPasswordPageModule);
export { ForgotPasswordPageModule };
//# sourceMappingURL=forgot-password.module.js.map
