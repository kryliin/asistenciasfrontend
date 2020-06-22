import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2';

@Injectable()
export class AppAlertService {

  public alerts: any[] = [];
  private defaultAlerts: any[] = [];

  constructor() {
  }

  static swalSuccess(message, timer = 1500, showConfirmButton = false) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton,
      timer
    }).then();
  }

  static swalError(error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error,
    }).then();
  }

  // @TODO verificar si se deben la reemplazar las implementaciones de la versión estática de este método
  swalSuccess(message, timer = 1500, showConfirmButton = false) {
    this.reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton,
      timer
    }).then();
  }

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  close(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  exampleAlert(): void {
    const tiempo = 30000;

    this.alerts.push({
      type: 'warning',
      msg: `Esta aleta se cierra en ${tiempo} milisegundos (${new Date().toLocaleTimeString()})`,
      timeout: tiempo
    });
  }

  error(message, timeout = 10000): void {
    this.alerts.push({
      type: 'danger',
      msg: message,
      timeout
    });
  }

  info(message, timeout = 30000): void {
    this.alerts.push({
      type: 'info',
      msg: message,
      timeout
    });
  }

  success(message, timeout = 30000): void {
    this.alerts.push({
      type: 'success',
      msg: message,
      timeout
    });
  }

  warning(message, timeout = 5000): void {
    this.alerts.push({
      type: 'warning',
      msg: message,
      timeout
    });
  }

}
