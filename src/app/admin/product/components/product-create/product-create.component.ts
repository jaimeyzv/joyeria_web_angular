import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/admin/category/models/category';
import { CategoryService } from 'src/app/admin/category/services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    price: [0, [Validators.min(1), Validators.required]],
    stock: [0, [Validators.min(1), Validators.required]],
    imagen: [''],
  });

  categories: Array<ICategory> = [];
  categoryId: number = 0;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = <Array<ICategory>>response;
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
    debugger;
    this.productService.create(this.productForm.value).subscribe(
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
