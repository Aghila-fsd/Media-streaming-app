import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { VedioService } from './vedio.service';
import { SignupService } from './signup.service';
import { CategoryComponent } from './category/category.component';
import { SadminComponent } from './sadmin/sadmin.component';
import { MyvedioComponent } from './myvedio/myvedio.component';
import { SinglevedioComponent } from './singlevedio/singlevedio.component';
import { GroupComponent } from './group/group.component';
import { EditvedioComponent } from './editvedio/editvedio.component';
import { PendingapprovalComponent } from './pendingapproval/pendingapproval.component';
import { AdminvedioComponent } from './adminvedio/adminvedio.component';
import { UsernewvedioComponent } from './usernewvedio/usernewvedio.component';
import { NewvedioComponent } from './newvedio/newvedio.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  
    CategoryComponent,
    SadminComponent,
    MyvedioComponent,
    SinglevedioComponent,
    GroupComponent,
    EditvedioComponent,
    PendingapprovalComponent,
    AdminvedioComponent,
    UsernewvedioComponent,
    NewvedioComponent,
    AboutusComponent,
    ContactComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
 
  ],
  providers: [AuthService,VedioService,SignupService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
