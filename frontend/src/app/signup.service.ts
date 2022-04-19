import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  server_address:string='api';
  constructor(private http:HttpClient) { }
  signupUser(user:any){
    
    return this.http.post<any>("http://localhost:3000/signup",{user})
    }
}