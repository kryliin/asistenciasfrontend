import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-tomar-foto',
  templateUrl: './tomar-foto.page.html',
  styleUrls: ['./tomar-foto.page.scss'],
})
export class TomarFotoPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

}
