import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISale } from '../models/sale';


@Injectable({
  providedIn: 'root',
})
export class SaleService {
  Sale: Array<ISale> = [];
  readonly baseUrl = ' https://localhost:44343/api/order/resumen';

  constructor(private http: HttpClient) {}

  getSale(): Observable<ISale[]> {
    return this.http.get<ISale[]>(this.baseUrl).pipe(
      map((o) =>
        o.map(
          (p): ISale => ({
            mes: p.mes,
            cliente: p.cliente,
            total: p.total
          })
        )
      )
    );
  }

}