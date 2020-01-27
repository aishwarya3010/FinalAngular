import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router) { }
data;
  confirmPassword(myForm)
  {
    
    this.data=myForm.form.value;
   // console.log(this.data.password);
    //console.log(this.data.confirmpassword);
   this.data.email=sessionStorage['email'];
   
   
    if(this.data.password==this.data.confirmpassword)
    {
    
     //console.log(this.data);
      this.userService.resetPassword(this.data).subscribe((res)=>{
        this.router.navigate(['login'])
      })

  }
}

 
  ngOnInit() {
  }

}
