import { Component, OnInit } from '@angular/core';
import { IHistorialCompra } from './historial-compras';
import { HistorialComprasService } from './historial-compras.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css'],
})
export class HistorialComprasComponent implements OnInit {
  historialCompras: IHistorialCompra[] = [];
  constructor(private historialComprasService: HistorialComprasService) {}

  ngOnInit(): void {
    this.historialCompras = this.historialComprasService.getHistorialCompras();
  }

  _cargarHistorialCompras() {
    return this.historialCompras;
  }
}
