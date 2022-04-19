import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User={
    uname:'',
    password:''
  }
  constructor( private _auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._auth.loginUser(this.User)
    .subscribe((data:any)=>{
      
    if(data.mesg=="notfound"){
      this.User.uname="";
      this.User.password=""
      alert("User not found");
      this.router.navigate(['login']);
    }
    else{
      if(data.role=="user"){
        localStorage.setItem('username',this.User.uname)
        localStorage.setItem('usertoken',data.mesg)
        localStorage.setItem('nam',data.nam)
        this.router.navigate(['mypost']);
      }
      if(data.role=="admin"){
        localStorage.setItem('username',this.User.uname)
        localStorage.setItem('admintoken',data.mesg)
        localStorage.setItem('nam',data.nam)
        this.router.navigate(['mypost']);
      }
      if(data.role=="sadmin"){
        localStorage.setItem('username',this.User.uname)
        localStorage.setItem('token',data.mesg)
        localStorage.setItem('nam',"admin")
        this.router.navigate(['sadmin']);
      }
    }
   
    })
  }
}
