import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
  
export class EditarProductosComponent implements OnInit {
  productFormEditar = this.fb.group({
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
  if(this.productFormEditar.valid) {
    console.log(this.productFormEditar.value);
    alert("Los datos fueron correctamente registrados");
  } else {
    alert("Complete todos los campos");
  }
}

ngOnInit(): void {
}

}