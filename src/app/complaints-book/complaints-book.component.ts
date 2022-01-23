import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.css']
})
export class ComplaintsBookComponent implements OnInit {


combookForm = this.fb.group({
  form1: this.fb.group({
    fechaReclamo:['23-01-2022',],
    codReclamacion:['00001-2022',],
    razSEmpresa:['Enjoya EIRL',],
    dirEmpresa:['general santa cruz, Jesus Maria',]
  }),
  form2:this.fb.group({
nomApellido:['',Validators.required],
domicilio:['',Validators.required],
nDocumento:['',Validators.required],
email:['',Validators.required],
telf:['',Validators.required],
apoderado:['',Validators.required]
  }),
  form3:this.fb.group({
tipo:['',Validators.required],
montoReclamado:['',Validators.required],
descReclamado:['',Validators.required]
  }),
  form4:this.fb.group({
tipo2:['',Validators.required],
detalleReclamado:['',Validators.required],
pedidoReclamado:['',Validators.required]
  }),
});
 constructor(private fb: FormBuilder) { }
_onSubmit(){
    if(this.combookForm.valid){
        alert("Se Registro su reclamo con Exito");
    }else{
      alert("Rellene los datos");
    }
}
  ngOnInit(): void {
  }

}
