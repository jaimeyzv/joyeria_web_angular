import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Array<IUser> =[];
  readonly baseUrl ='https://localhost:44343/api/user' ;
  constructor(
    private readonly http:HttpClient
  ) { }
getUsers():Observable<IUser[]> {
return this.http.get<IUser[]>(this.baseUrl).pipe(
map((o)=>
o.map(
    (u):IUser =>({

    Name: u.Name,
    LastName: u.LastName,
    DocumentNumber: u.DocumentNumber,
    Email: u.Email,
    Password: u.Password,
    Address: u.Address,
    Cellphone: u.Cellphone,
    UserTypeId: u.UserTypeId,
    DocumentTypeId: u.DocumentTypeId
    })

))

);

}




  __listUser(){
    return this.http.get<any>('https://localhost:44343/api/user/list');
  }
  __insert(data:any){
    return this.http.post<any>('https://localhost:44343/api/user/create',data);
  }
}
