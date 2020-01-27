import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
 

  constructor(private userService:UserService,private router:Router) { }
data;
  ngOnInit() {
  }
  forgot(forgotForm)
  {
   
    this.data=forgotForm.form.value;
    sessionStorage['email']=this.data.email;
    this.userService.forgot(this.data).subscribe((res)=>{
      this.router.navigate(['otp']);
    },(err)=>{

    alert("Enter register email address");
   })
}

}
