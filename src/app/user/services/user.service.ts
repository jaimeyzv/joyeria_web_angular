import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<IUser> =[];
  readonly baseUrl ='https://localhost:44343/api/user' ;
  constructor(
    private readonly http:HttpClient
  ) { }
getUsers():Observable<IUser[]> {
return this.http.get<IUser[]>(this.baseUrl).pipe(
map((o)=>
o.map(
    (u):IUser =>({
    id:u.id,
    name: u.name,
    lastName: u.lastName,
    documentNumber: u.documentNumber,
    email: u.email,
    password: u.password,
    address: u.address,
    cellphone: u.cellphone,
    userTypeId: u.userTypeId,
    documentTypeId: u.documentTypeId
    })

))

);

}

_getUserById(){
return this.http.get<any>('https://localhost:44343/api/user');
}


  __listUser(){
    return this.http.get<any>('https://localhost:44343/api/user');
  }
  __insert(data:any){
    return this.http.post<any>('https://localhost:44343/api/user',data);
  }
  __update(data:any,id:any){
    return this.http.put<any>('https://localhost:44343/api/user/'+id,data);

  }
  __delete(id:number){
  return this.http.delete('https://localhost:44343/api/user/'+id);
}
}
