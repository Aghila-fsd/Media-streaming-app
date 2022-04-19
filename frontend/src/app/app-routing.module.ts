import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'





import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
//import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';

import { SignupComponent } from './signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { MyvedioComponent } from './myvedio/myvedio.component';
import { SadminComponent } from './sadmin/sadmin.component';
import { NewvedioComponent } from './newvedio/newvedio.component';
import { AdminvedioComponent } from './adminvedio/adminvedio.component';
import { EditvedioComponent } from './editvedio/editvedio.component';
import { UsernewvedioComponent } from './usernewvedio/usernewvedio.component';
import { SinglevedioComponent } from './singlevedio/singlevedio.component';
import { GroupComponent } from './group/group.component';
import { PendingapprovalComponent } from './pendingapproval/pendingapproval.component';
import { AuthGuard } from './auth.guard';
import { NewvedioauthGuard } from './newvedioauth.guard';
import { UserauthGuard } from './userauth.guard';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'newvedio',canActivate:[NewvedioauthGuard],component:NewvedioComponent},
  {path:'category',canActivate:[AuthGuard],component:CategoryComponent},
  {path:'myvedio',component:MyvedioComponent},
  {path:'sadmin',canActivate:[AuthGuard],component:SadminComponent},
  {path:'adminvedio',component:AdminvedioComponent},
  {path:'edit',component:EditvedioComponent},
  {path:'usernewvedio',canActivate:[UserauthGuard],component:UsernewvedioComponent},
  {path:'svedio',component:SinglevedioComponent},
  {path:'categorywise',component:GroupComponent},
  {path:'approval',canActivate:[AuthGuard],component:PendingapprovalComponent},
  {path:'contactus',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent}
   
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }