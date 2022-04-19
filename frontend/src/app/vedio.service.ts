import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class VedioService {
 

 
 

  private url:string="http://localhost:3000/";
  _id: any;
  constructor(private http:HttpClient) { }

  
getvedio(){
    return this.http.get("http://localhost:3000/vedios");
}
dvedio(id:any){
 return this.http.get("http://localhost:3000/vedios/"+id);
}
addvedio(formData:any){
    return this.http.post<any>("http://localhost:3000/newvedio",formData)
}
addadminvedio(vedio:any){
 return this.http.post<any>("http://localhost:3000/adminvedio",vedio)
}
deleteVedio(id:any){
    return this.http.delete("http://localhost:3000/delete/"+id)
}
addCategory(cat:any){
 console.log(cat)
 return this.http.post<any>("http://localhost:3000/categoty",cat)
}
getCat(){
 return this.http.get("http://localhost:3000/cat");
}
editVedio(id:any){
   return this.http.get("http://localhost:3000/edit/"+id);
 
}
updatevedio(vedio:any){
 return this.http.put("http://localhost:3000/updatevedio",vedio)
 .subscribe((data)=>{console.log(data)})
}
removeCat(id:any){
 return this.http.delete("http://localhost:3000/deletecat/"+id)
}
existingcat(cat:any){
 return this.http.post("http://localhost:3000/existing",cat);
}
}
