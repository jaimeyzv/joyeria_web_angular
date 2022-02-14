import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Array<IProduct>;

  constructor(private productService: ProductService, private router: Router) {}

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

  edit(id: number) {
    this.router.navigate(['product-edit', id]);
  }

  goToProductCreate() {
    this.router.navigate(['/product-create']);
  }
}
