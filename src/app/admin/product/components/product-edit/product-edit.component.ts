import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  id!: number;
  product!: IProduct;
  productFormEditar = this.formBuilder.group({
    categoria: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.min(1), Validators.required]],
    stock: [0, [Validators.min(1), Validators.required]],
    imagen: ['', Validators.required],
  });

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((response) => {
      this.product = <IProduct>response;
    });
  }

  onSubmit() {
    this.productService.update(this.id, this.product).subscribe(
      (data) => {
        this.goToProductList();
      },
      (error) => console.log(error)
    );
  }

  goToProductList() {
    this.router.navigate(['/product-list']);
  }
}
