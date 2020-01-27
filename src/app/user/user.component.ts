import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //roomlist:boolean; 
  room;
  roomid;
  rent;
  city;
isRole;
  constructor(private UserService: UserService,public router:Router) {
    //this.roomlist = true;
 }
  search(myForm)
  {
    let data=myForm.form.value;
    sessionStorage["city"]=this.city;
  
   // this.getRoomListByCity();
    //this.roomlist = false;
    //this.UserService.getRoomsByCity(data.city).subscribe((res)=>{
     
     // this.room=res;
      //this.router.navigate['user'];
       // })
       this.UserService.getRoomsByCity(data.city).subscribe((res)=>{
     
         this.room=res;
         this.router.navigate['citysearch'];
          })
  }
  book(roomid,rent)
  {
   
   sessionStorage["roomid"]=roomid;
   this.router.navigate(['book']);
   sessionStorage["rent"]=rent;
  }

  ngOnInit() {
    this.UserService.getAllRooms().subscribe((res)=>{
     
      this.room=res;
      this.router.navigate['user'];
       })
  }
  

}
