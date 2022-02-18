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
_delete(id:number){
  return this.http.delete('https://localhost:44343/api/complaint/'+id);
}
_getComplaintById(){
return this.http.get<any>('https://localhost:44343/api/complaint');
}

 __listComplaint(){
    return this.http.get<any>('https://localhost:44343/api/complaint');
  }
 __update(data:any,id:any){
    return this.http.put<any>('https://localhost:44343/api/complaint/'+id,data);

  }


__insert(data:any){

   return this.http.post<any>('https://localhost:44343/api/complaint', data);

  }




}
