import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Array<ICategory> = [];
  readonly baseUrl = 'https://localhost:44343/api/category';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.baseUrl).pipe(
      map((o) =>
        o.map(
          (p): ICategory => ({
            id: p.id,
            name: p.name,
          })
        )
      )
    );
  }
  __insert(data:any){
    return this.http.post<any>('https://localhost:44343/api/category',data);
  }
  __update(data:any,id:number){
return this.http.put<any>('https://localhost:44343/api/category/'+id,data);
  }





}
