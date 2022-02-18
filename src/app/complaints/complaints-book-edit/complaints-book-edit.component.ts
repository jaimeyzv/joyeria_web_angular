import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintsBookService } from '../services/complaints-book.service';

@Component({
  selector: 'app-complaints-book-edit',
  templateUrl: './complaints-book-edit.component.html',
  styleUrls: ['./complaints-book-edit.component.css']
})
export class ComplaintsBookEditComponent implements OnInit {
  complaint:any=[];
  idc:any=0;
  constructor(private fb:FormBuilder, private cb: ComplaintsBookService,private router:Router) { }
complaintForm = this.fb.group({
      statusC:['']
  })
  ngOnInit(): void {
this.idc = sessionStorage.getItem('idc');
    this.__getComplaintById(this.idc);
  }
__getComplaintById(codigo:number){
  this.cb._getComplaintById().subscribe((rest:any)=>{
    this.complaint = rest.filter((item:{id:number})=> item.id ==codigo);
    console.log("Se consiguo"+this.complaint[0].id);

  })
}
_update(data:any,id:any){
  this.cb.__update(data,id).subscribe((result:any)=>{
    if(result.name !=null){

     this.router.navigate(['admin/complaints']);


       // window.location.reload();

    }else{
      alert("Error al actualizar estado");
    }

  });

}
_onSubmit(){
console.log(this.complaintForm.value);
this._update(this.complaintForm.value,this.idc);
}


}
