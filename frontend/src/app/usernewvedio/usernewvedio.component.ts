import { Component, OnInit } from '@angular/core';
import { UservedioService } from '../uservedio.service';
import { Router } from '@angular/router';
import { VedioService } from '../vedio.service';
@Component({
  selector: 'app-usernewvedio',
  templateUrl: './usernewvedio.component.html',
  styleUrls: ['./usernewvedio.component.css']
})
export class UsernewvedioComponent implements OnInit {
  newvedio={
    user:localStorage.getItem("username"),
    title:'',
    author:localStorage.getItem("nam"),
    
    category:'',
    vedio:''
   }
   cat:any;
   url:any;
   format:any;
  constructor(private userservice:UservedioService, private router:Router, private vedio:VedioService) { }

  ngOnInit(): void {
    this.vedio.getCat().subscribe((data:any)=>{
      this.cat=JSON.parse(JSON.stringify(data))
    })
  }
  newbook(){

    this.userservice.addVedio(this.newvedio).
    subscribe((data:any)=>{
     
      alert("Post send for approval from admin");
      this.router.navigate(['myvedio'])
    })
  }
  onSelectFile(event:any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
 

}
