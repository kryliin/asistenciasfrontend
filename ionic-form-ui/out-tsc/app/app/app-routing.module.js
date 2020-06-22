import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
    },
    {
        path: 'validarClave',
        loadChildren: () => import('./validarClave/validarClave.module').then(m => m.ValidarClavePageModule)
    },
    {
        path: 'tomar-foto',
        loadChildren: () => import('./tomar-foto/tomar-foto.module').then(m => m.TomarFotoPageModule)
    },
    {
        path: 'obtener-persona',
        loadChildren: () => import('./obtener-persona/obtener-persona.module').then(m => m.ObtenerPersonaPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map