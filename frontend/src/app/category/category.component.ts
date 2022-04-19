import { Component, OnInit } from '@angular/core';
import { VedioService } from '../vedio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category={
    category:''
  }
  remove={
   category:''
  }
   constructor( private vedio:VedioService, private router:Router) { }
   cat:any;
   ngOnInit(): void {
     this.vedio.getCat().subscribe((data)=>{
       this.cat=JSON.parse(JSON.stringify(data))
     })
   }
   add(){
  
     this.vedio.addCategory(this.category).subscribe((data)=>{
       if(data.mesg==false){
         alert("Category already exist");
         this.category.category='';
         this.router.navigate(['category'])
       }
       if(data.mesg==true){
         alert("category added successfully");
       this.category.category='';
       this.router.navigate(['sadmin'])
       }
       
     })
   }
   removeCat(i:any){
     alert("category deleted successfully");
     this.vedio.removeCat(i._id).subscribe((data)=>{
       this.cat=this.cat.filter((p: any)=>p!=i)
       this.router.navigate(['sadmin'])
     })
   }
 }
 
