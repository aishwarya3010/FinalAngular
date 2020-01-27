import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  userid;
  room: any;
  roomid;
  constructor(private UserService: UserService,
    private router:Router) {
     this.getRoomList();
  }
  getRoomList()
  {
    this.userid = sessionStorage['userid'];
    this.UserService.getRooms(this.userid).subscribe((res) => {
      console.log(res);
      this.room = res;
    })
  }

  delete(roomid){
    const res = confirm("Are you sure want to delete emp with ID : "+roomid);
    if(res==true){
      this.UserService.deleteRoomInfo(roomid).subscribe((res)=>{
        this.getRoomList();
      })
    }
  }
  viewbooking(roomid)
  {
    
      sessionStorage.setItem("roomid",roomid);
      this.router.navigate(['bookdetails']);
  }
  ngOnInit() {
  }

}
