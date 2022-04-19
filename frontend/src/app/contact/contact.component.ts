import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private router:Router ,private fb:FormBuilder,private contactservice:ContactService ) { }

  User={
    name:'',
    email:'',
    message:''
  }
  ngOnInit(): void {}
  
  send(){
    
      this.contactservice.contactUser(this.User)
       
        alert("Message is send successfully");
        this.router.navigate(['home'])
      
    }
    
  }



 



