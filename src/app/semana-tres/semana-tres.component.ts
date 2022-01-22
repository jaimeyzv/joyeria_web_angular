import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-semana-tres',
  templateUrl: './semana-tres.component.html',
  styleUrls: ['./semana-tres.component.css'],
})
export class SemanaTresComponent implements OnInit {
  contactUsForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  _onClick() {
    console.log('Submitted');
  }
}
