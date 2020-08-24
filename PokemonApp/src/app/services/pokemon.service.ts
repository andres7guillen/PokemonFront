import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Connections } from './ConnectionService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private _http:HttpClient,
    private _conn:Connections) { }

  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
});

getAll():Observable<any>{
  return this._http.get(this._conn.pokemon,{headers:this.headers});
}

getById(url:string):Observable<any>{
  return this._http.get(this._conn.pokemon + 'getById?url=' + url, {headers: this.headers });
}

getByName(name:string):Observable<any>{
  return this._http.get(this._conn.pokemon + 'getByName?name=' + name, {headers: this.headers});
}
 
}
