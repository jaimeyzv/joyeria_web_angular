import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../product/services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm!: string;
  constructor(private cartService: CartService, private router:Router) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
     this.router.navigate(['product-list-car']);
  }
}
