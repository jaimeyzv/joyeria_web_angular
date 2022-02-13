import { HttpClient } from '@angular/common/http';
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
    return this.http.get<IProduct[]>(this.baseUrl).pipe(
      map((o) =>
        o.map(
          (p): IProduct => ({
            id: p.id,
            name: p.name,
            description: p.description,
            stock: p.stock,
            price: p.price,
            categoryId: p.categoryId,
            urlImage: p.urlImage,
          })
        )
      )
    );
  }
}
