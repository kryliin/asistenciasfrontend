import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ObtenerPersonaService} from '../services/obtener-persona.service';


@Component({
    selector: 'app-obtener-persona',
    templateUrl: './obtener-persona.page.html',
    styleUrls: ['./obtener-persona.page.scss'],
})
export class ObtenerPersonaPage implements OnInit {

    results: Observable<any>;
    id = '14-7764';
    id2 = 'aa9cf8cc484e0e';

    constructor(private obtenerPersonaService: ObtenerPersonaService) {
    }

    ngOnInit() {
    }

    obtener() {
        console.log('llego al obtener');
        this.obtenerPersonaService.getPersona(this.id).subscribe(results => {
            this.results = results;
        });
    }

    registrar() {
        this.obtenerPersonaService.registrarPersona(this.id2).subscribe(results => {
            this.results = results;
        });
    }

}
