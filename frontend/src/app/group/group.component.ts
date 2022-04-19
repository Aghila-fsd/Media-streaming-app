import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  vediodata:any;
 url:any;
 format:any;
  constructor(private vedio:VedioService, private router:Router, public auth:AuthService) { }
  newvedio={
    category:localStorage.getItem("category")
   }
  ngOnInit(): void {
    this.vedio.getvedio()
    .subscribe((data)=>{
      this.vediodata=JSON.parse(JSON.stringify(data));
     
      var vedio=localStorage.getItem("category");
      this.vediodata=this.vediodata.filter((p: any)=>p.category===vedio)
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
    this.vedio.deleteVedio(vedio._id)
    .subscribe((data)=>{
      this.vediodata=this.vediodata.filter((p: any)=>p!=vedio)
    })
  }
}
