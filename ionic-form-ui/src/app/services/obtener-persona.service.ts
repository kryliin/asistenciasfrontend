import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AppAlertService} from './app-alert.service';


@Injectable({
    providedIn: 'root'
})
export class ObtenerPersonaService {
    constructor(private http: HttpClient,
                private router: Router,
                private appAlertService: AppAlertService) {
    }


    url = 'http://www4.frcu.utn.edu.ar/api/';
    /*getPersona(id) {
        return this.http.get(`${this.url}get_persona.php?id=${id}`);
     }*/

    // tslint:disable-next-line:ban-types
    getPersona(id: string): Observable<any> {
        return this.http.get(`${this.url}registrar_app.php?id=${id}`);
    }

    /*  getPersona(id: string): Observable<any> {
          return this.http.get(`${this.url}get_persona.php?id=${id}`);
      }*/

    registrarPersona(id2: string): Observable<any> {
        return this.http.get(`${this.url}registrar_app.php?id=${id2}`);
    }

}
