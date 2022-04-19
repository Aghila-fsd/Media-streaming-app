import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server_address: string = 'api';

  constructor( private http:HttpClient) { }
  loginUser(user:any){
    return this.http.post<any>("http://localhost:3000/login",user)
    
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  adminloggedIn(){
    return !!localStorage.getItem('admintoken');
  }
  userloggedIn(){
    return !!localStorage.getItem('usertoken');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getUsertoken(){
    return localStorage.getItem('usertoken');
  }
  getAdmintoken(){
    
    return localStorage.getItem('admintoken');
  }

}