import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editvedio',
  templateUrl: './editvedio.component.html',
  styleUrls: ['./editvedio.component.css']
})

export class EditvedioComponent implements OnInit {
  newvedio={
    title:'',
    author:'',
    
    
    vedio:''
   }
   constructor(private vedio:VedioService, private router:Router) { }

   ngOnInit(): void {
     let vedioId=localStorage.getItem("editVedioId");
     this.vedio.editVedio(vedioId)
     .subscribe((data)=>{
       this.newvedio=JSON.parse(JSON.stringify(data))
       
     })
   }
   newbook(){
     console.log(this.newvedio)
     this.vedio.updatevedio(this.newvedio);
     alert("Updated Successfully");
     this.router.navigate([''])
   }

}
