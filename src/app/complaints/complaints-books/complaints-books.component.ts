import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComplaint } from '../models/complaint';
import { ComplaintsBookService } from '../services/complaints-book.service';

@Component({
  selector: 'app-complaints-books',
  templateUrl: './complaints-books.component.html',
  styleUrls: ['./complaints-books.component.css']
})
export class ComplaintsBooksComponent implements OnInit {
  complaints: any = [];
  constructor( private cb: ComplaintsBookService, private router: Router) { }
  __getComplaints(){
    this.cb. __listComplaint().subscribe((rest:any)=>{
          this.complaints = rest;

    })
  }
  _show(id:any){

  }
  _delete(id:any){

  }
  ngOnInit(): void {
    this.__getComplaints();
  }

}
