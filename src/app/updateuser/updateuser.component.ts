import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
user;
userid;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
     this.userid=sessionStorage['userid'];
    this.service.getUserDetsils(this.userid).subscribe((res)=>{
     console.log(res);
      this.user=res;
    })
 
    }
update()
{
  this.user.userid=this.userid;
  this.service. updateuser(this.user).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['']);

  })

}
}
