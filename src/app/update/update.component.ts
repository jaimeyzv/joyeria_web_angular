import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
updateForm = this.fb.group({
    nombres:['',[Validators.required,Validators.minLength(3)]],
    apellidos:['',[Validators.required,Validators.minLength(3)]],
    docidentidad:['',Validators.required],
    numberidentidad:['',Validators.required],
    direction:['',Validators.required],
    celular:['',[Validators.required,Validators.min(9)]],
    email:['',[Validators.required,Validators.email]],
    confirmemail:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
confirmpassword:['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
  })
  constructor(private fb: FormBuilder) { }
_onSubmit(){

  if(!this.nombres?.valid|| this.nombres?.value==" ")return alert("El campo Nombres esta vacio o tiene un minimo de caracteres");
  if(!this.apellidos?.valid|| this.apellidos?.value==" ")return alert("El campo Apellidos esta vacio o tiene un minimo de caracteres");
  if(!this.docidentidad?.valid)return alert("No Selecciono el Tipo de Documento de Identidad");
  if(!this.numberidentidad?.valid|| this.numberidentidad?.value==" ")return alert("Ingrese un Numero de Documento de Identidad");
let number = this.updateForm.controls['numberidentidad'].value?.length;
  if(this.docidentidad?.value=="1"){
    //dni
        //if(this.numberidentidad?.value.length())
    if(number!=8 )return alert("El DNI debe tener 8 caracteres");

  }else if(this.docidentidad?.value=="2"){
//ruc
    if(number!=12)return alert("El RUC debe tener 12 caracteres");
  }else if(this.docidentidad?.value=="3"){
// pasaporte
if(number!=12)return alert("El Pasaporte debe tener 12 caracteres");
  }else if(this.docidentidad?.value=="4"){
//carnet Extranjeria
if(number!=12)return alert("El Carnet de Extranjeria debe tener 12 caracteres");
  }
  if(!this.email?.valid|| this.email?.value==" ")return alert("Ingrese un correo electronico correcto");
  if(!this.celular?.valid|| this.celular?.value==" ")return alert("Ingrese numero de celular");
  if(!this.direction?.valid|| this.direction?.value==" ") return alert("Ingrese una direccion");
  if(!this.password?.valid|| this.password?.value==" ")return alert('Ingrese una contraseña con lo siguiente:\n \tAl menos 8 caracteres de longitud\n\tMinimo una letra minusculas\n\tMinimo una letra mayúscula\n\tMinimo un número de Caracter especial');
  if(!this.confirmemail?.valid|| this.confirmemail?.value==" ")return alert("Confirme su correo electronico");
  if(!this.confirmpassword?.valid|| this.confirmpassword?.value==" ")return alert("Confirme su contraseña");
  if(this.email?.value != this.confirmemail?.value)return alert("el correo de confirmación no coinciden");
  if(this.password?.value != this.confirmpassword?.value)return alert("La contraseña de confirmación no coinciden");
  if(this.updateForm.valid ){
    let nombre = this.nombres?.value;
    let apellido=this.apellidos?.value;

    alert("Se actualizo tu información");
  }else{
    alert("Rellene los datos");
  }
}
  ngOnInit(): void {
  }
get nombres(){
return this.updateForm.get('nombres');
}
get apellidos(){
return this.updateForm.get('apellidos');
}
get docidentidad(){
return this.updateForm.get('docidentidad');
}
get numberidentidad(){
return this.updateForm.get('numberidentidad');
}
get celular(){
return this.updateForm.get('celular');
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
get direction(){
  return this.updateForm.get('direction');
}
}
