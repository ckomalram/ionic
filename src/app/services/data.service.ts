import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuPoints(){
    return this.http.get<Componente[]>('/assets/data/menu-points.json');
  }
}
