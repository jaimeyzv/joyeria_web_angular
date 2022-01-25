import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-productos',
  templateUrl: './registrar-productos.component.html',
  styleUrls: ['./registrar-productos.component.css']
})
  
export class RegistrarProductosComponent implements OnInit {
    productForm = this.fb.group({
    categoria: ['', Validators.required],
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: [0, [Validators.min(1), Validators.required]],
    imagen: ['', Validators.required],
    stock: [0, [Validators.min(1), Validators.required]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  __onSubmit() {
    if(this.productForm.valid) {
      console.log(this.productForm.value);
      alert("Los datos fueron correctamente actualizados");
    } else {
      alert("Complete todos los campos");
    }
  }

  ngOnInit(): void {
  }

}