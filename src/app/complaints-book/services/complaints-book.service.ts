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
  Datec: c.Datec,
  Name: c.Name ,
  Address: c.Address,
  Ndoc: c.Ndoc,
  Email: c.Email,
  Cellphone: c.Cellphone,
  Repre: c.Repre,
  Typep: c.Typc,
  Price: c.Price,
  Descp: c.Descp,
  Typc: c.Typc,
  Descc: c.Descc,
  Pedic: c.Pedic,
  StatusC: c.StatusC
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
