import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// geolocation and native-geocoder
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {Device} from '@ionic-native/device/ngx';
import {AppAlertService} from './services/app-alert.service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        Geolocation,
        NativeGeocoder,
        Device,
        AppAlertService],
    bootstrap: [AppComponent]
})
export class AppModule {
}


