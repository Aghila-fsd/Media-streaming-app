import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newvedio',
  templateUrl: './newvedio.component.html',
  styleUrls: ['./newvedio.component.css']
})
export class NewvedioComponent implements OnInit {

  newvedio={
    user:localStorage.getItem("username"),
    title:'',
    author:localStorage.getItem("nam"),
    
    category:'',
    vedio:''
   }
  url:any;
  format:any;
   cat:any;
  http: any;
    constructor(private vedioservice:VedioService, private router:Router) { }
   
    ngOnInit(): void {
      this.vedioservice.getCat().subscribe((data)=>{
        this.cat=JSON.parse(JSON.stringify(data))
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

    newbook(){
       this.vedioservice.addvedio(this.newvedio).
       subscribe((data:any)=>{
       
      
      // })
      const formData = new FormData();
      formData.append('newvedio', this.format);
  
      alert("New vedio Added");
      this.router.navigate([''])
    })
       }



}
