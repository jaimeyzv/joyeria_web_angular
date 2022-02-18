import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISale } from '../../models/sale';
import { SaleService } from '../../services/sale.service';



@Component({
  selector: 'app-sale-report',
  templateUrl: './sale-report.component.html',
  styleUrls: ['./sale-report.component.css']
})

export class SaleReportComponent implements OnInit {
  sales!: Array<ISale>;

  constructor(private saleService: SaleService, private router: Router) {}

  ngOnInit(): void {
    this.saleService.getSale().subscribe((response) => {
      this.sales = <Array<ISale>>response;
    });
  }

}
