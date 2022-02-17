import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/admin/category/models/category';
import { CategoryService } from 'src/app/category/services/category.service';
import { IProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  id!: number;
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    price: [0, [Validators.min(1), Validators.required]],
    stock: [0, [Validators.min(1), Validators.required]],
    imagen: [''],
  });
  categories: Array<ICategory> = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((response) => {
      this.productForm.patchValue(<IProduct>response);
      this.categoryService.getCategories().subscribe((response) => {
        this.categories = <Array<ICategory>>response;
      });
    });
  }

  onSubmit() {
    this.productService.update(this.id, this.productForm.value).subscribe(
      (data) => {
        this.goToProductList();
      },
      (error) => console.log(error)
    );
  }

  goToProductList() {
    this.router.navigate(['admin/product-list']);
  }
}
