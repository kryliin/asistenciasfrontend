import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistrationPageRoutingModule } from './registration-routing.module';
import { RegistrationPage } from './registration.page';
let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RegistrationPageRoutingModule
        ],
        declarations: [RegistrationPage]
    })
], RegistrationPageModule);
export { RegistrationPageModule };
//# sourceMappingURL=registration.module.js.map