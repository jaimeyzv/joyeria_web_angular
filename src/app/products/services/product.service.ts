import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<IProduct> = [];
  readonly baseUrl = 'https://localhost:44343/api/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    //return this.http.get<IProduct[]>(this.baseUrl);
    return this.http.get<IProduct[]>(this.baseUrl).pipe(
      map((o) =>
        o.map(
          (p): IProduct => ({
            productId: p.productId,
            nombre: p.nombre,
            descripcion: p.descripcion,
            precio: p.precio,
            linea: p.linea,
            material: p.material,
            urlImage: p.urlImage,
          })
        )
      )
    );
  }
}
