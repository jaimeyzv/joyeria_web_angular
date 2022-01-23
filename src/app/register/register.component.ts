import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    nombres:['',Validators.required],
    apellidos:['',Validators.required],
    docidentidad:['',Validators.required],
    numberidentidad:['',Validators.required],
    celular:[0,[Validators.required,Validators.min(9)]],
    email:['',[Validators.required,Validators.email]],
    confirmemail:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
confirmpassword:['',Validators.required]
  })
  constructor( private fb: FormBuilder) { }
_onSubmit(){
  if(this.registerForm.valid ){
    alert(this.registerForm.get('usuario'));
  }else{
    alert("Rellene los datos");
  }
}
  ngOnInit(): void {
  }

}
