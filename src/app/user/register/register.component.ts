import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:Array<IUser> = [];
  registerForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    documentTypeId:['',Validators.required],
    documentNumber:['',Validators.required],
    address:['',Validators.required],
    cellphone:['',[Validators.required,Validators.min(9)]],
    email:['',[Validators.required,Validators.email]],
    confirmemail:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
confirmpassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
userTypeId:['2']

  })
  constructor( private fb: FormBuilder, private readonly us: UserService, private router:Router) { }
_onSubmit(){

  if(!this.name?.valid|| this.name?.value==" ")return alert("El campo Nombres esta vacio o tiene un minimo de caracteres");
  if(!this.lastName?.valid|| this.lastName?.value==" ")return alert("El campo Apellidos esta vacio o tiene un minimo de caracteres");
  if(!this.documentTypeId?.valid)return alert("No Selecciono el Tipo de Documento de Identidad");
  if(!this.documentNumber?.valid|| this.documentNumber?.value==" ")return alert("Ingrese un Numero de Documento de Identidad");
let number = this.registerForm.controls['documentNumber'].value?.length;
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
  if(!this.email?.valid|| this.email?.value==" ")return alert("Ingrese un correo electronico correcto");
  if(!this.cellphone?.valid|| this.cellphone?.value==" ")return alert("Ingrese numero de celular");
  if(!this.address?.valid|| this.address?.value==" ") return alert("Ingrese una direccion");
  if(!this.password?.valid|| this.password?.value==" ")return alert('Ingrese una contraseña con lo siguiente:\n \tAl menos 8 caracteres de longitud\n\tMinimo una letra minusculas\n\tMinimo una letra mayúscula\n\tMinimo un número de Caracter especial');
  if(!this.confirmemail?.valid|| this.confirmemail?.value==" ")return alert("Confirme su correo electronico");
  if(!this.confirmpassword?.valid|| this.confirmpassword?.value==" ")return alert("Confirme su contraseña");
  if(this.email?.value != this.confirmemail?.value)return alert("el correo de confirmación no coinciden");
  if(this.password?.value != this.confirmpassword?.value)return alert("La contraseña de confirmación no coinciden");
  if(this.registerForm.valid ){
    let nombre = this.name?.value;
    let apellido=this.lastName?.value;
    alert(this.registerForm.value);
    console.log(this.registerForm.value);
    this._create(this.registerForm.value);


   // alert("Registro Exitoso. Bienvenido, "+ nombre+ " "+apellido);
  }else{
    alert("Rellene los datos");
  }
}

_create(data:any){

  this.us.__insert(data).subscribe((result:any)=>{
    if(result.name !=null){
       alert("Se registro con exito, Ingrese su correo y contraseña");
      this.router.navigate(['login']);

    }else{
      alert("Error al Ingresar Usuario");
    }

  });

}


  ngOnInit(): void {
  }
get name(){
return this.registerForm.get('name');
}
get lastName(){
return this.registerForm.get('lastName');
}
get documentTypeId(){
return this.registerForm.get('documentTypeId');
}
get documentNumber(){
return this.registerForm.get('documentNumber');
}
get cellphone(){
return this.registerForm.get('cellphone');
}
get email(){
return this.registerForm.get('email');
}
get confirmemail(){
return this.registerForm.get('confirmemail');
}
get password(){
return this.registerForm.get('password');
}
get confirmpassword(){
return this.registerForm.get('confirmpassword');
}
get address(){
  return this.registerForm.get('address');
}

}
