import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: any = [];
  levelNum:number=0;
    documents:any=[
      {num:1, doc:"DNI"},
      {num:2, doc:"RUC"},
      {num:3, doc:"Pasaporte"},
      {num:4, doc:"Carnet de Extranjeria"}
    ];
   toNumber(){
    this.levelNum = +this.levelNum;
    console.log(this.levelNum);
  }
   selectedLevel = this.documents[0];

  selectedLevelCustomCompare = {num: 1, doc: "DNI"}

  compareFn(a:any, b:any) {
    console.log(a, b, a && b && a.num == b.num);
    return a && b && a.num == b.num;
  }
  codigo: any="";
updateForm = this.fb.group({
    name:[this.user.name,[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    documentTypeId:['',Validators.required],
    documentNumber:['',Validators.required],
    address:['',Validators.required],
    cellphone:['',[Validators.required,Validators.min(9)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
confirmpassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    userTypeId:['2']
  })
  constructor(private fb: FormBuilder, private us:UserService, private router: Router) { }
_onSubmit(){

  if(!this.name?.valid|| this.name?.value==" ")return alert("El campo Nombres esta vacio o tiene un minimo de caracteres");
  if(!this.lastName?.valid|| this.lastName?.value==" ")return alert("El campo Apellidos esta vacio o tiene un minimo de caracteres");
  if(!this.documentTypeId?.valid)return alert("No Selecciono el Tipo de Documento de Identidad");
  if(!this.documentNumber?.valid|| this.documentNumber?.value==" ")return alert("Ingrese un Numero de Documento de Identidad");
let number = this.updateForm.controls['documentNumber'].value?.length;
  if(this.documentTypeId?.value=="1"){
    //dni
        //if(this.numberidentidad?.value.length())
    if(number!=8 )return alert("El DNI debe tener 8 caracteres");

  }else if(this.documentTypeId?.value=="2"){
//ruc
    if(number!=12)return alert("El RUC debe tener 12 caracteres");
  }else if(this.documentTypeId?.value=="3"){
// pasaporte
if(number!=12)return alert("El Pasaporte debe tener 12 caracteres");
  }else if(this.documentTypeId?.value=="4"){
//carnet Extranjeria
if(number!=12)return alert("El Carnet de Extranjeria debe tener 12 caracteres");
  }
  //if(!this.email?.valid|| this.email?.value==" ")return alert("Ingrese un correo electronico correcto");
  if(!this.cellphone?.valid|| this.cellphone?.value==" ")return alert("Ingrese numero de celular");
  if(!this.address?.valid|| this.address?.value==" ") return alert("Ingrese una direccion");
  if(!this.password?.valid|| this.password?.value==" ")return alert('Ingrese una contraseña con lo siguiente:\n \tAl menos 8 caracteres de longitud\n\tMinimo una letra minusculas\n\tMinimo una letra mayúscula\n\tMinimo un número de Caracter especial');
 // if(!this.confirmemail?.valid|| this.confirmemail?.value==" ")return alert("Confirme su correo electronico");
  if(!this.confirmpassword?.valid|| this.confirmpassword?.value==" ")return alert("Confirme su contraseña");
  //if(this.email?.value != this.confirmemail?.value)return alert("el correo de confirmación no coinciden");
  if(this.password?.value != this.confirmpassword?.value)return alert("La contraseña de confirmación no coinciden");
  if(this.updateForm.valid ){
    let nombre = this.name?.value;
    let apellido=this.lastName?.value;

   this._update(this.updateForm.value,this.codigo);
  }else{
    alert("Rellene los datos");
  }
}
  ngOnInit(): void {
    this.codigo = sessionStorage.getItem('id');
   var cod = parseInt(this.codigo);
    this.__getUserById(cod);


  }
_update(data:any,id:any){
  this.us.__update(data,id).subscribe((result:any)=>{
    if(result.name !=null){
       alert("Se Actualizaron los datos");
        window.location.reload();

    }else{
      alert("Error al Ingresar Usuario");
    }

  });

}

__getUserById(codigo:number){
  this.us._getUserById().subscribe((rest:any)=>{
    this.user = rest.filter((item:{id:number})=> item.id ==codigo);


  })
}


get name(){
return this.updateForm.get('name');
}
get lastName(){
return this.updateForm.get('lastName');
}
get documentTypeId(){
return this.updateForm.get('documentTypeId');
}
get documentNumber(){
return this.updateForm.get('documentNumber');
}
get cellphone(){
return this.updateForm.get('cellphone');
}
get email(){
return this.updateForm.get('email');
}
get confirmemail(){
return this.updateForm.get('confirmemail');
}
get password(){
return this.updateForm.get('password');
}
get confirmpassword(){
return this.updateForm.get('confirmpassword');
}
get address(){
  return this.updateForm.get('address');
}
}
