import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})
export class BookroomComponent implements OnInit {
userid;
roomid;
rent;
  constructor(private userService:UserService,
    private router:Router
  ) { }
  
  bookroom(myForm)
  {
    this.userid=sessionStorage['userid'];
    this.roomid=sessionStorage['roomid'];
    let data=myForm.form.value;
    this.userService.bookroom(this.userid,this.roomid,data).subscribe((res)=>{
      console.log(res);
      delete sessionStorage['roomid'];
      delete sessionStorage['rent'];
      alert("Room Booked Successfully!!!");
      this.router.navigate(['user']);
      

    })

  }
  ngOnInit() {
    this.rent= sessionStorage['rent'];
  }

}
