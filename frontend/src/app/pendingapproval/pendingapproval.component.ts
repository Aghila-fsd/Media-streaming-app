import { Component, OnInit } from '@angular/core';
import { UservedioService } from '../uservedio.service';
import { AuthService } from '../auth.service';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pendingapproval',
  templateUrl: './pendingapproval.component.html',
  styleUrls: ['./pendingapproval.component.css']
})

  export class PendingapprovalComponent implements OnInit {
    vediodata:any;
    url:any;
format:any;
    constructor(private userservice:UservedioService, public auth:AuthService, private vedio:VedioService, private router:Router) { }
  
    ngOnInit(): void {
      this.userservice.getvedios()
      .subscribe((data)=>{
        this.vediodata=JSON.parse(JSON.stringify(data));
      })
    }
    approve(vedio:any){
      localStorage.setItem("userIdtocomment",vedio.user);
      localStorage.setItem("titleTocomment",vedio.title)
      this.userservice.deleteVedio(vedio._id)
      .subscribe()
      this.vedio.addvedio(vedio).
      subscribe((data:any)=>{
       alert("Vedio approved");
  
        this.router.navigate(['comment'])
      })
    }
    reject(vedio:any){
      localStorage.setItem("userIdtocomment",vedio.user);
      localStorage.setItem("titleTocomment",vedio.title)
     alert("vedio rejected");
      this.userservice.deleteVedio(vedio._id)
      .subscribe((data)=>{
      this.router.navigate(['comment'])
      })
    }

}
