import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AppAlertService} from './app-alert.service';
import {HTTP} from '@ionic-native/http/ngx';
import {finalize} from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import {LoadingController} from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})
export class ObtenerPersonaService {
    constructor(private http: HttpClient,
                private nativeHttp: HTTP,
                private router: Router,
                private loadingCtrl: LoadingController,
                private appAlertService: AppAlertService) {
    }

    data = [];
    url = 'http://www4.frcu.utn.edu.ar/api/';

    async getPersona(id: string) {
        const loading = await this.loadingCtrl.create();
        await loading.present();
        const nativeCall = this.nativeHttp.get(`http://www4.frcu.utn.edu.ar/api/get_persona.php?id=${id}`, {}, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });

        from(nativeCall).pipe(
            finalize(() => loading.dismiss())
        ).subscribe(data => {
            console.log('native log', data);
            const parsed = JSON.parse(data.data).results;
            this.data = parsed;
        }, err => {
            console.log('Error', err);
        });
    }


    async registrarPersona(id2: string) {
        const loading = await this.loadingCtrl.create();
        await loading.present();
        const nativeCall = this.nativeHttp.get(`http://www4.frcu.utn.edu.ar/api/registrar_app.php?id=${id2}`, {}, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });

        from(nativeCall).pipe(
            finalize(() => loading.dismiss())
        ).subscribe(data => {
            console.log('native log', data);
            const parsed = JSON.parse(data.data).results;
            this.data = parsed;
        }, err => {
            console.log('Error', err);
        });
    }
    /*    getPersona(id: string): Observable<any> {
            return this.http.get<any>(`${this.url}registrar_app.php?id=${id}`);
        }

        registrarPersona(id2: string): Observable<any> {
            return this.http.get<any>(`${this.url}registrar_app.php?id=${id2}`);
        }
*/
}
