import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Array<IProduct> = [
    {
      productId: 1,
      nombre: 'Collar Mia Basic',
      descripcion: 'Collar de bla bla bla',
      linea: 'Hombre',
      material: 'Plata',
      precio: 459.99,
      urlImage: 'assets/img/products/list/collar-mia-basic.png',
    },
    {
      productId: 2,
      nombre: 'Collar Proteccion Hombre',
      descripcion: 'Collar de bla bla bla',
      linea: 'Hombre',
      material: 'Plata',
      precio: 1559.99,
      urlImage: 'assets/img/products/list/collar-proteccion-hombre.png',
    },
    {
      productId: 3,
      nombre: 'Llavero Escudo',
      descripcion: 'Collar de bla bla bla',
      linea: 'Hombre',
      material: 'Plata',
      precio: 239.99,
      urlImage: 'assets/img/products/list/llavero-escudo.png',
    },
    {
      productId: 4,
      nombre: 'Collar Senhor Milagros Basic',
      descripcion: 'Collar de bla bla bla',
      linea: 'Mujer',
      material: 'Plata',
      precio: 1349.99,
      urlImage: 'assets/img/products/list/collar-senhor-milagros-basic.png',
    },
  ];
  constructor() {}

  getProducts(): Array<IProduct> {
    return this.products;
  }
}
