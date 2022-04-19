import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vediodata:any;
  constructor(private post:VedioService, private router:Router,public auth:AuthService) { }
  
  ngOnInit(): void {
    this.post.getvedio()
    .subscribe((data)=>{
      this.vediodata=JSON.parse(JSON.stringify(data));
      
    })
  }
  displayvedio(vedio:any){
    localStorage.setItem("singleVedioId",vedio._id.toString());
    this.router.navigate(['svedio'])
  }
  editVedio(vedio:any){
    localStorage.setItem("editVedioId",vedio._id.toString());
    this.router.navigate(['edit'])
  }
  deleteVedio(vedio:any){
    this.post.deleteVedio(vedio._id)
    .subscribe((data)=>{
      this.vediodata=this.vediodata.filter((p: any)=>p!=vedio)
    })
  }
  }
  

