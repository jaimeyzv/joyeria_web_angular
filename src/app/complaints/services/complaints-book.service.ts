import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IComplaint } from '../models/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsBookService {
  complaint:Array<IComplaint> =[];
 readonly baseUrl ='https://localhost:44343/api/complaint' ;
  constructor( private readonly http:HttpClient) { }

  _getComplaints(): Observable<IComplaint[]> {
    return this.http.get<IComplaint[]>(this.baseUrl).pipe(
      map((o) =>
        o.map(
          (c): IComplaint => ({
    id: c.id,
  datec: c.datec,
  name: c.name ,
  address: c.address,
  ndoc: c.ndoc,
  email: c.email,
  cellphone: c.cellphone,
  repre: c.repre,
  typep: c.typc,
  price: c.price,
  descp: c.descp,
  typc: c.typc,
  descc: c.descc,
  pedic: c.pedic,
  statusC: c.statusC
          })
        )
      )
    );
  }



 __listComplaint(){
    return this.http.get<any>('https://localhost:44343/api/complaint');
  }



__insert(data:any){
/*
  var name = data?.form2.Name;
  var adress=data?.form2.Address
  var doc = data?.form2.Ndoc;
  var email = data?.form2.Email;
  var cell = data?.form2.Cellphone;
  var  repre = data?.form2.Repre;
  var typep = data?.form3.Typep;
  var price = data?.form3.Price;
  var descp= data?.form3.Descp;
  var  typc = data?.form4.Typc;
  var descc= data?.form4.Descc;
  var pedic = data?.form4.Pedic;*/
   let complaint = {

   };
   console.log("datos ingresados");
   console.log(data);
   return this.http.post<any>('https://localhost:44343/api/complaint', data);

  }




}
