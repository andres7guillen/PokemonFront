import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Connections } from './ConnectionService';
import { UserRolModel } from '../models/user.rol.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string = '';   
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
});
  constructor(private http:HttpClient,
              private conn:Connections) { }
  
  
  Login(user:User) {
    return this.http.post(this.conn.urlCuenta + '/Login', JSON.stringify(user),{headers: this.headers})
    .pipe(
      map(resp => {
        this.saveToken(resp['token']);
        return resp;
      })
    )
  }
   
  LogOut(){
    localStorage.removeItem('token');
  }
  
  CreateUser(user:User) {
    return this.http.post(this.conn.urlCuenta + '/Create', JSON.stringify(user),{headers: this.headers})
    .pipe(
      map(resp => {
        this.saveToken(resp['token']);
        return resp;
      })
    )
  }

  private saveToken(token:string){
    this.userToken = token;
    localStorage.setItem('token',token);
  }

  readToken():string{
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  isAuthenticated():boolean {
    return this.userToken.length > 2;
  }

  associateUserRol(usuRol:UserRolModel){
    return this.http.post(this.conn.urlUsuario + 'UserRol', JSON.stringify(usuRol),{headers: this.headers});
  }

  removerUserRol(usuRol:UserRolModel){
    return this.http.post(this.conn.urlUsuario + 'RemoveUserRol', JSON.stringify(usuRol),{headers:this.headers});
  }
}

