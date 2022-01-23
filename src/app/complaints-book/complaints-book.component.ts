import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.css']
})
export class ComplaintsBookComponent implements OnInit {


combookForm = this.fb.group({
fechaReclamo:[""],
codReclamacion:[""],
razSEmpresa:[""],
dirEmpresa:[""],
nomApellido:[""],
domicilio:[""],
nDocumento:[""],
email:[""],
telf:[""],
apoderado:[""],
tipo:[""],
montoReclamado:[""],
descReclamado:[""],
tipo2:[""],
detalleReclamado:[""],
pedidoReclamado:[""]
});
 constructor(private fb: FormBuilder) { }
_onSubmit(){

}
  ngOnInit(): void {
  }

}
