import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  category:any=[];
  codigo:any="";
registerForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],

  })
  constructor(private fb: FormBuilder, private cat:CategoryService, private router:Router) { }

  ngOnInit(): void {
     this.codigo= sessionStorage.getItem('idcat');
 var cod = parseInt(this.codigo);
    this._getCategoryById(cod);
  }
_getCategoryById(codigo:number){
  this.cat.getCategories().subscribe((rest:any)=>{
    this.category = rest.filter((item:{id:number})=> item.id ==codigo);


  })
}
_onSubmit(){
 if(this.registerForm.valid){
this._update(this.registerForm.value,this.codigo);
  }else{
    alert('Rellenar Nombre de Categoria');
  }
}

_update(data:any,id:any){
this.cat.__update(data,id).subscribe((result:any)=>{
    if(result.name !=null){
       alert("Se Actualizaron los datos");
         this.router.navigate(['admin/category-list']);

    }else{
      alert("Error al Ingresar Usuario");
    }

  });




}



}
