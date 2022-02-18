import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComplaintsBookService } from '../services/complaints-book.service';


@Component({
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.css']
})
export class ComplaintsBookComponent implements OnInit {
anio:any=(new Date()).getFullYear();
fechaactual:any=(new Date()).getDate();
contador:number=0;
complaints:any=[];
combookForm = this.fb.group({
/*
    fechaReclamo:['23-01-2022'],
    codReclamacion:['00001-2022'],
    razSEmpresa:['Enjoya EIRL'],
    dirEmpresa:['general santa cruz, Jesus Maria']
 ,*/

name:['',Validators.required],
address:['',Validators.required],
ndoc:['',Validators.required],
email:['',[Validators.required, Validators.email]],
cellphone:['',Validators.required],
repre:['']
 ,

typep:['',Validators.required],
price:[''],
descp:['',Validators.required],

typc:['',Validators.required],
descc:['',Validators.required],
pedic:['',Validators.required]
/*,
acceptTerms:['',Validators.required]*/

});
 constructor(private fb: FormBuilder, private readonly cs: ComplaintsBookService) { }
 _topShow(){

            window.scroll(0,0);
 }
_onSubmit(){

   if(!this.name?.valid|| this.name?.value==" ")return alert("Ingresar Nombre y Apellido");
   if(!this.ndoc?.valid|| this.ndoc?.value==" ")return alert("Ingresar N.Documento");
   if(!this.address?.valid|| this.address?.value==" ")return alert("Ingresar Direccion de Domicilio");
   if(!this.email?.valid|| this.email?.value==" ")return alert("Ingresar correo electronico");
   if(!this.cellphone?.valid|| this.cellphone?.value==" ")return alert("Ingresar un numero de telefono o celular");
   if(!this.typep?.valid)return  alert("Marque si es Producto o Servicio");
   if(!this.descp?.valid|| this.descp?.value==" ")return alert("Ingresar descripción del Producto o Servicio");
   if(!this.typc?.valid)return alert("Marque si es Reclamo o Queja");
   if(!this.descc?.valid|| this.descc?.value==" ")return  alert("Ingresar el Detalle del Reclamo o Queja");
   if(!this.pedic?.valid|| this.pedic?.value==" ")return  alert("Ingresar el Pedido del Reclamo o Queja");
 //  if(!this.acceptTerms?.valid)return alert("Aceptar los terminos y condiciones");
   if(this.combookForm.valid){
    console.log(this.combookForm.value);
    this._create(this.combookForm.value);
    //alert("Se registro tu solicitud se enviara una respuesta al siguiente Email: "+ this.Email.value + "durante  una espera de 30 dias. Gracias");


   }

}
_listComplaint(){
   this.anio = (new Date()).getFullYear();
   this.fechaactual  =(new Date());
  this.cs.__listComplaint().subscribe(
    (rest:any)=>{
      this.complaints = rest;
       this.contador = (this.complaints[this.complaints.length-1].id)+1;
      console.log(this.complaints);
    }
  )
}
 _create(data:any){
    this.cs.__insert(data).subscribe((result:any)=>{
      if(result){
  alert("se registro con exito su "+this.typc?.value +". Se enviara la respuesta al siguiente correo "+this.email?.value+" entre los proximos 30 dias habiles.");
      }


    });

 }
  ngOnInit(): void {
     this._topShow();
     this._listComplaint();
  }

  get name(){
   return this.combookForm.get('name');
  }
  get address(){
    return this.combookForm.get('address');
  }
  get ndoc(){
    return this.combookForm.get('ndoc');
  }
  get email(){
    return this.combookForm.get('email');
  }
  get cellphone(){
    return this.combookForm.get('cellphone');
  }
  get repre(){
    return this.combookForm.get('repre');
  }
  get typep(){
    return this.combookForm.get('typep');
  }
  get price(){
    return this.combookForm.get('price');
  }
  get descp(){
    return this.combookForm.get('descp');
  }
  get typc(){
    return this.combookForm.get('typc');
  }
  get descc(){
    return this.combookForm.get('descc');
  }
  get pedic(){
    return this.combookForm.get('pedic');
  }
  get acceptTerms(){
    return this.combookForm.get('acceptTerms');
  }
}
