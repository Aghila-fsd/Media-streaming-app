import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UservedioService {

  
  constructor(private http:HttpClient) { }
  getvedios(){
    return this.http.get("http://localhost:3000/userposts");
}

addVedio(post:any){
    return this.http.post<any>("http://localhost:3000/usernewpost",post);
}
deleteVedio(id:any){
  
    return this.http.delete("http://localhost:3000/deleteUserPost/" +id)
}




  
}
