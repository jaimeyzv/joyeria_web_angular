import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= this.fb.group({
    usuario:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
  constructor(
    private fb:FormBuilder,
    private readonly us: UserService,
    private router: Router
    ) { }
  __login(data:any){
    this.us.__login(data).subscribe((rest: any)=>{
         alert(rest);

        
        if(rest.email == this.usuario && rest.password == this.password){
          alert("Logeaste");
          /*  sessionStorage.setItem('user',rest.name+' '+rest.lastName);
            this.router.navigateByUrl('/home',{skipLocationChange:false}).then(
              ()=>{
                this.router.navigate(['home']);
                window.location.reload();
              });*/
        }else{
            alert("correo y/o contraseña Incorrecta");
        }
    });
  }

  _onSubmit(){
    if(!this.usuario?.valid || this.usuario?.value==" ")return alert("Ingrese Correo Electronico");
     if(!this.password?.valid || this.password?.value==" ")return alert("Ingrese password");
    if(this.loginForm.valid){
      this.__login(this.loginForm.value);
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
