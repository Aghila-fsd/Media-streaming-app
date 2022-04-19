import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adminvedio',
  templateUrl: './adminvedio.component.html',
  styleUrls: ['./adminvedio.component.css']
})
export class AdminvedioComponent implements OnInit {

  newvedio={
    user:localStorage.getItem("username"),
    title:'',
    author:localStorage.getItem("nam"),
    
    category:'',
    vedio:''
   }
  url:any;
  format:any;
   
    constructor(private vedioservice:VedioService, private router:Router) { }
    cat:any;
    
    ngOnInit(): void {
      this.vedioservice.getCat().subscribe((data)=>{
        this.cat=JSON.parse(JSON.stringify(data))
      })
    }
    
    newbook(){
      this.vedioservice.addadminvedio(this.newvedio).
      subscribe((data:any)=>{
       
        alert("New Post Added");
        this.router.navigate([''])
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
