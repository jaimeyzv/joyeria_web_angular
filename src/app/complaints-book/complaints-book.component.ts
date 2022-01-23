import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-complaints-book',
  templateUrl: './complaints-book.component.html',
  styleUrls: ['./complaints-book.component.css']
})
export class ComplaintsBookComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
combookForm = this.fb.group({

});
_onSubmit(){

}
  ngOnInit(): void {
  }

}
