import { Injectable } from '@angular/core';
import { IHistorialCompra } from './historial-compras';

@Injectable({
  providedIn: 'root',
})
export class HistorialComprasService {
  historialCompras: Array<IHistorialCompra> = [
    {
      descripcion: 'Anillos de matrimonio de oro',
      fecha: new Date('2022-01-15'),
      montoPagado: 5899.99,
    },
    {
      descripcion: 'Aretes colgantes de plata',
      fecha: new Date('2022-01-16'),
      montoPagado: 1499.99,
    },
    {
      descripcion: 'Cadena lomo corvina de plata',
      fecha: new Date('2022-01-17'),
      montoPagado: 3599.99,
    },
  ];

  constructor() {}

  getHistorialCompras(): Array<IHistorialCompra> {
    return this.historialCompras;
  }
}
