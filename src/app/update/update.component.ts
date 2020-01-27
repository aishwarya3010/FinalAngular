import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
roomid;
room;

constructor(public activeRoute:ActivatedRoute,
  public service:UserService,
  public router:Router
) { 

activeRoute.paramMap.subscribe((params)=>{
this.roomid=params.get("roomid");
console.log(this.roomid);
this.service.getDataById(this.roomid).subscribe((res)=>{

console.log(res);
this.room=res;
console.log(this.room);
})
})
}
update(){
  this.room.roomid=this.roomid;
   this.service.update(this.room).subscribe((res)=>{
     console.log(res);
     this.router.navigate(['owner']);

   })

 }



  ngOnInit() {
  }

}
