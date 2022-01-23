import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= this.fb.group({
    usuario:['',Validators.required],
    password:['',Validators.required]
  });
  constructor( private fb:FormBuilder) { }
  _onSubmit(){
    if(!this.usuario?.valid|| this.usuario?.value==" ")return alert("Ingrese usuario")
     if(!this.password?.valid|| this.password?.value==" ")return alert("Ingrese password")
    if(this.loginForm.valid){
      alert("Bienvenido");
    }else{
      alert("Rellene los datos");
    }
  }
  ngOnInit(): void {
  }
  get usuario(){
return this.loginForm.get('usuario');
}
get password(){
return this.loginForm.get('password');
}
}
