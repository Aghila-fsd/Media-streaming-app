import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {
  constructor(private _auth:AuthService,private router:Router)
  {

  }
  canActivate():
  boolean{
    if (this._auth. userloggedIn()  )
    {
      console.log('true')
      return true

    }
    else{
      this.router.navigate(['/login']);
      return false

    }
  }
  
}
