import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userslist:any =[];
  users!: Array<IUser>;
  loginForm= this.fb.group({
    usuario:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
  constructor(
    private fb:FormBuilder,
    private readonly us: UserService,
    private ar:ActivatedRoute,
    private router: Router
    ) { }

  __listUser(){
    this.us.__listUser().subscribe((rest: any)=>{
      console.log(rest);
       this.userslist = rest;

      /*   alert(rest[0].id);
        console.log(rest);*/
      /*
        if(rest.email == this.usuario && rest.password == this.password){
          alert("Logeaste");

        */
    });
  }
  __login(){
    let correo ="";
    let pass="";
    let user="";
    let tipo="";
    let exist = false;
    this.us.__listUser().subscribe((rest:any)=>{
        console.log(rest);

        for(let r of rest){

        if(this.usuario?.value == r.email){
            correo = r.email;
            pass = r.password;
           user = r.name+' '+rest.lastName;
           tipo = r.userTypeId;
          exist = true;
        }
      }
       if(exist == false)return alert("'Correo y/o Contraseña Invalido'");

       if(this.password?.value==pass){
               sessionStorage.setItem('user',user);
               sessionStorage.setItem('tipo',tipo);

          this.router.navigateByUrl('/home',{skipLocationChange:false}).then(
              ()=>{
                this.router.navigate(['home']);
                window.location.reload();
              });
        }else{
         alert('Correo y/o Contraseña Invalido');
        }

    });

  }
  _onSubmit(){

    if(!this.usuario?.valid || this.usuario?.value==" ")return alert("Ingrese Correo Electronico");
     if(!this.password?.valid || this.password?.value==" ")return alert("Ingrese password");
    if(this.loginForm.valid){
       this.__login();

    }else{
      alert("Rellene los datos");
    }
  }
  ngOnInit(): void {
//this.__listUser();

  }
  get usuario(){
return this.loginForm.get('usuario');
}
get password(){
return this.loginForm.get('password');
}
}
