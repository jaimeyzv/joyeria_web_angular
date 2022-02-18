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
  complaints!: Array<IComplaint> ;
  fechaActual: any;
  idc: any=0;
  constructor( private cb: ComplaintsBookService, private router: Router) { }
  __getComplaints(){
    this.cb. __listComplaint().subscribe((rest:any)=>{
          this.complaints = <Array<IComplaint>>rest;
          this.fechaActual = this.complaints[this.complaints.length-1].datec;

    })
  }
  _show(id:any){
    sessionStorage.setItem('idc',id);
   this.router.navigate(['admin/complaints/'+id]);
  }
  _delete(id:number){
    this.cb._delete(id).subscribe((rest)=>{
      this.complaints = this.complaints.filter((c)=>c.id !== id);
    });
  }
  ngOnInit(): void {
    this.__getComplaints();
  }

}
