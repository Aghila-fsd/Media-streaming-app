import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { VedioService } from '../vedio.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cat:any;
  constructor( public auth:AuthService ,private router:Router,private vedioservice:VedioService) { }

  ngOnInit(): void {
    this.vedioservice.getCat().subscribe((data)=>{
      this.cat=JSON.parse(JSON.stringify(data))
     
    })
  }
  logoutUser(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  category(cat:any){
    localStorage.setItem("category",cat);
    this.router.navigate(['categorywise'])
  }
}