import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-singlevedio',
  templateUrl: './singlevedio.component.html',
  styleUrls: ['./singlevedio.component.css']
})
export class SinglevedioComponent implements OnInit {
url:any;
format:any;
  vedio:any;
  constructor(private vedioservice:VedioService, private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
    let vedioId=localStorage.getItem("singleVedioId");
    this.vedioservice.dvedio(vedioId)
    .subscribe((data)=>{
      this.vedio.JSON.parse(JSON.stringify(data))
    })

  }
  editVedio(vedio:any){
    localStorage.setItem("editVedioId",vedio._id.toString());
    this.router.navigate(['edit'])
  }
  deleteVedio(vedio:any){
    this.vedioservice.deleteVedio(vedio._id)
    .subscribe((data)=>{
      console.log(data)
    })
    this.router.navigate(['']);
  }
  

}
