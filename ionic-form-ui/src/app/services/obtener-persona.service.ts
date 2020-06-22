import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppAlertService} from './app-alert.service';
import {Router} from '@angular/router';


@Injectable()
export class ObtenerPersonaService {
    url = 'http://www4.frcu.utn.edu.ar/api/';

    constructor(private http: HttpClient,
                private _router: Router,
                private _appAlertService: AppAlertService) {
        console.log('Hello HttpProvider Provider');
    }

    /*getPersona(id) {
        return this.http.get(`${this.url}get_persona.php?id=${id}`);
     }*/

    // tslint:disable-next-line:ban-types
    getPersona(id: string, params: Object = {}, showErrorMessages = true): Observable<any> {
        let httpParams: HttpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key) => {
                httpParams = httpParams.append(key, params[key]);
            });
        }
        return this.http.get(`${this.url}registrar_app.php?id=${id}`, {params: httpParams})
            .pipe(
                catchError((err, caught) => {
                    return this.handleError(err);
                }),
                map(response => this.handleResponse(response, showErrorMessages))
            );
    }


    /*  getPersona(id: string): Observable<any> {
          return this.http.get(`${this.url}get_persona.php?id=${id}`);
      }*/

    registrarPersona(id2: string): Observable<any> {
        return this.http.get(`${this.url}registrar_app.php?id=${id2}`);
    }

    private handleResponse(response, showErrorMessages = true) {
        if (!showErrorMessages) {
            return response;
        }

        switch (response.result) {
            case 'error':

                if (response.validation_errors.length > 0) {
                    this._appAlertService.warning(response.message);

                    // tslint:disable-next-line:variable-name
                    let _validationErrors = [];
                    // tslint:disable-next-line:max-line-length only-arrow-functions
                    response.validation_errors.forEach(function(elementX) {
                        // tslint:disable-next-line:max-line-length
                        _validationErrors[elementX.property_path] = _validationErrors[elementX.property_path] ? `${_validationErrors[elementX.property_path]} ${elementX.message}` : elementX.message;
                    });
                    response.validationErrors = _validationErrors;
                } else {
                    this._appAlertService.error(response.message);
                }
                return response;

            case 'info':
                this._appAlertService.info(response.message);
                return response;
            case 'ok':
                return response;
            default:
                break;
        }
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        if (error.status === 401) {
            switch (error.error.error) {
                case 'invalid_grant':
                    this._appAlertService.reset();
                    this._appAlertService.warning('Debe iniciar Sesión');
                    break;
                case 'access_denied':
                    this._appAlertService.reset();
                    this._appAlertService.warning('Acceso denegado');
                    break;
                default:
                    this._appAlertService.warning('No esta autorizado');
                    break;
            }
        } else if (error.status === 403) {
            this._appAlertService.reset();
            this._appAlertService.error('Acceso denegado');

        } else if (error.status === 409) {
            // Errores de validación
            return of(error.error);
        } else {
            if (error.error instanceof ErrorEvent) {
                console.error(`Algo salio mal: "${error.error.message}"`);
                this._appAlertService.error(`Algo salio mal: "${error.error.message}"`);
            } else {
                // tslint:disable-next-line:max-line-length
                console.error(`Algo salio mal: Backend returned status code "${error.status}", status: "${error.statusText}", message: "${error.message}"`);
                this._appAlertService.error(`Algo salio mal: "${error.error.userMessage}"`);
            }
        }
        return throwError('Algo salio mal; Por favor vuelva a intentar mas tarde.');
    }

}
