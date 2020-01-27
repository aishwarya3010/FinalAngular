import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
roomid;
room;
  constructor(private UserService: UserService,
    private router:Router) {
    this.getbooklist();
   }
   getbooklist()
   {
     this.roomid=sessionStorage['roomid'];
    this.UserService.getbookdetails(this.roomid).subscribe((res)=>{
      this.room=res;
      delete sessionStorage['roomid'];
    })

   }
  ngOnInit() {
  }
  
  back()
  {
    this.router.navigate(['owner']);
  }

}
