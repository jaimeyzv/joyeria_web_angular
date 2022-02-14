import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  products!: Array<IProduct>;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
