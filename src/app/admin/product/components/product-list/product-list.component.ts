import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Array<IProduct>;

  constructor(private productService: ProductService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = <Array<IProduct>>response;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe((res) => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }
}
