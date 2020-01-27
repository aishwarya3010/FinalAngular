import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { EmtrService } from '../emtr.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router,private emService:EmtrService,private translateService: TranslateService) {
      translateService.addLangs(["en", "ge", "hi"]);
      translateService.setDefaultLang("en");
     }
  ngOnInit() {
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
  login(loginForm)
  {
  let data = loginForm.form.value;
   this.userService.login(data).subscribe((res:any)=>{
    sessionStorage['email']=res['email'];
   sessionStorage.setItem("userid",res.userid);
  sessionStorage.setItem("usertype",res.usertype);
    this.emService.logInBtnSwitch(true);
    //this.router.navigate(['']);
    //alert(res['usertype']);
    if(res['usertype']=="OWNER")
      this.router.navigate(['owner']);
      else
      this.router.navigate(['user'])
   },(err)=>{

    alert("Enter Valid Email and Password");
   })
  }
  signup()
  {
    this.router.navigate(['signup']);
  }
  cancel()
  {
    this.router.navigate(['']);
  }
  
}
