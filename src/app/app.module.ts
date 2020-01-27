import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddroomComponent } from './addroom/addroom.component';
import { OwnerComponent } from './owner/owner.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CitysearchComponent } from './citysearch/citysearch.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    OtpComponent,
    ResetpasswordComponent,
    AddroomComponent,
    OwnerComponent,
    UpdateComponent,
    UserComponent,
    BookroomComponent,
    AboutusComponent,
    CitysearchComponent,
    BookdetailsComponent,
    UpdateuserComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
      {path:"forgot",component:ForgotpasswordComponent},
      {path:"otp",component:OtpComponent,canActivate:[AuthGuard]},
      {path:"resetpassword",component:ResetpasswordComponent},
      {path:"addroom",component:AddroomComponent,canActivate:[AuthGuard]},
      {path:"owner",component:OwnerComponent,canActivate:[AuthGuard]},
      {path:"update/:roomid",component:UpdateComponent,canActivate:[AuthGuard]},
      {path:"user",component:UserComponent,canActivate:[AuthGuard]},
      {path:"book",component:BookroomComponent,canActivate:[AuthGuard]},
      {path:"aboutus",component:AboutusComponent},
      {path:"citysearch",component:CitysearchComponent,canActivate:[AuthGuard]},
      {path:"bookdetails",component:BookdetailsComponent,canActivate:[AuthGuard]},
      {path:"updateuser",component:UpdateuserComponent,canActivate:[AuthGuard]},
      {path:"contactus",component:ContactusComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
