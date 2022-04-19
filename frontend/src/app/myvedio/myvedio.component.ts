import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myvedio',
  templateUrl: './myvedio.component.html',
  styleUrls: ['./myvedio.component.css']
})
export class MyvedioComponent implements OnInit {
  vediodata:any;
  url:any;
  format:any;
  constructor(private vedio:VedioService, private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
    this.vedio.getvedio()
    .subscribe((data)=>{
      this.vediodata=JSON.parse(JSON.stringify(data));
     
      var vedio=localStorage.getItem("username");
      this.vediodata=this.vediodata.filter((p: any)=>p.user===vedio)
    })
  
  }
  displayvedio(vedio:any){
    localStorage.setItem("singlePostId",vedio._id.toString());
    this.router.navigate(['spost'])
  }
  editVedio(vedio:any){
    localStorage.setItem("editVedioId",vedio._id.toString());
    this.router.navigate(['edit'])
  }
  deleteVedio(vedio:any){
    alert("Post deleted successfully")
    this.vedio.deleteVedio(vedio._id)
    .subscribe((data)=>{
      this.vediodata=this.vediodata.filter((p: any)=>p!=vedio)
    })
  }
 
}
