import { Component, OnInit } from '@angular/core';
import { VedioService} from '../vedio.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sadmin',
  templateUrl: './sadmin.component.html',
  styleUrls: ['./sadmin.component.css']
})
export class SadminComponent implements OnInit {

  vediodata:any;
  format:any;
  url:any;
  constructor(private vedio:VedioService, private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.vedio.getvedio()
    .subscribe((data)=>{
      this.vediodata=JSON.parse(JSON.stringify(data));
      
    })
  }
  displayvedio(vedio:any){
    localStorage.setItem("singlePostId",vedio._id.toString());
    this.router.navigate(['svedio'])
  }
  editVedio(vedio:any){
    localStorage.setItem("editPostId",vedio._id.toString());
    this.router.navigate(['edit'])
  }
  deleteVedio(vedio:any){
    this.vedio.deleteVedio(vedio._id)
    .subscribe((data)=>{
      this.vediodata=this.vediodata.filter((p: any)=>p!=vedio)
    })
  }
}
