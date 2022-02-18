import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
registerForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],

  })
  constructor(private fb: FormBuilder, private cat:CategoryService, private router:Router) { }

  ngOnInit(): void {
  }
_onSubmit(){
  if(this.registerForm.valid){
this._create(this.registerForm.value);
  }else{
    alert('Rellenar Nombre de Categoria');
  }

}
_create(data:any){
  this.cat.__insert(data).subscribe((result:any)=>{
      if(result.name !=null){
  alert("Registro de Categoria con exito");
      this.router.navigate(['admin/category-list']);
      }
  });
}


}
