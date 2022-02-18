import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../models/category';
import { CategoryService } from '../../services/category.service';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categorys!: Array<ICategory>;


  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categorys = <Array<ICategory>>response;
    });
  }
goToCategoryCreate(){
  this.router.navigate(['admin/category-create']);
}
_onSubmit(id:any){
 sessionStorage.setItem('idcat',id);
 this.router.navigate(['admin/category-update']);
}
}
