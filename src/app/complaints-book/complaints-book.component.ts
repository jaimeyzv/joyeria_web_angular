import { Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator, FormBuilder, Validators } from '@angular/forms';

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
email:['',[Validators.required, Validators.email]],
telf:['',Validators.required],
apoderado:['']
  }),
  form3:this.fb.group({
tipo:['',Validators.required],
montoReclamado:['',Validators.required],
descReclamado:['',Validators.required]
  }),
  form4:this.fb.group({
tipo2:['',Validators.required],
detalleReclamado:['',Validators.required],
pedidoReclamado:['',Validators.required],
acceptTerms:['',Validators.required]
  }),
});
 constructor(private fb: FormBuilder) { }
_onSubmit(){

   if(!this.nomApellido?.valid|| this.nomApellido?.value==" ")return alert("Ingresar Nombre y Apellido");
   if(!this.nDocumento?.valid|| this.nDocumento?.value==" ")return alert("Ingresar N.Documento");
   if(!this.email?.valid|| this.email?.value==" ")return alert("Ingresar correo electronico");
   if(!this.telf?.valid|| this.telf?.value==" ")return alert("Ingresar un numero de telefono o celular");
   if(!this.tipo?.valid)return  alert("Marque si es Producto o Servicio");
   if(!this.descReclamado?.valid|| this.descReclamado?.value==" ")return
   alert("Ingresar descripción del Producto o Servicio");
   if(!this.tipo2?.valid)return
   alert("Marque si es Reclamo o Queja");
   if(!this.detalleReclamado?.valid|| this.detalleReclamado?.value==" ")return
   alert("Ingresar el Detalle del Reclamo o Queja");
   if(!this.pedidoReclamado?.valid|| this.pedidoReclamado?.value==" ")return
   alert("Ingresar el Pedido del Reclamo o Queja");
   if(!this.acceptTerms?.valid)return alert("Aceptar los terminos y condiciones");
   if(this.combookForm.valid)
    alert("Registro Exitoso");
}
  ngOnInit(): void {
  }

  get nomApellido(){
   return this.combookForm.get('form2.nomApellido');
  }
  get domicilio(){
    return this.combookForm.get('form2.domicilio');
  }
  get nDocumento(){
    return this.combookForm.get('form2.nDocumento');
  }
  get email(){
    return this.combookForm.get('form2.email');
  }
  get telf(){
    return this.combookForm.get('form2.telf');
  }
  get apoderado(){
    return this.combookForm.get('form2.apoderado');
  }
  get tipo(){
    return this.combookForm.get('form3.tipo');
  }
  get montoReclamado(){
    return this.combookForm.get('form3.montoReclamado');
  }
  get descReclamado(){
    return this.combookForm.get('form3.descReclamado');
  }
  get tipo2(){
    return this.combookForm.get('form4.tipo2');
  }
  get detalleReclamado(){
    return this.combookForm.get('form4.detalleReclamado');
  }
  get pedidoReclamado(){
    return this.combookForm.get('form4.pedidoReclamo');
  }
  get acceptTerms(){
    return this.combookForm.get('form4.acceptTerms');
  }
}
