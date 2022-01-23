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
    if(this.loginForm.valid){
      alert(this.loginForm.value);
    }else{
      alert("Rellene los datos");
    }
  }
  ngOnInit(): void {
  }

}
