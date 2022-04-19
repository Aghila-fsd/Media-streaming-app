import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  
  intercept(req:any,nxt:any)
  {
    let authService = this.injector.get(AuthService)
    //initial state without anyone loggedin
     if(!authService.loggedIn()&&!authService.adminloggedIn()&&!authService.userloggedIn()){
    
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer`
        }
      }
    )
    return nxt.handle(tokenizedReq)
  }
  //if admin is logged in
  if(authService.loggedIn()){
    
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)
  }
//if trainer is logged in
  if(authService.adminloggedIn()){
    
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getAdmintoken()}`
        }
      }
    )
    
    return nxt.handle(tokenizedReq)
  }
  //if user logged in
  if(authService.userloggedIn()){
  
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getUsertoken()}`
        }
      }
    )
   
    return nxt.handle(tokenizedReq)
  }

}



}
