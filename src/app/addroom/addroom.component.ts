import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router
  ) { }
email;
userid;
roomimage;
room;
imgUrl:any;
//   addroom(myForm){

//     let data = myForm.form.value;
//     this.email=sessionStorage['email'];
//     this.userid=sessionStorage['userid'];
//     this.userService.registerroom(this.userid,data).subscribe((res)=>{
//       console.log(res);
    
//     this.router.navigate(['owner']);
//     },(error)=>{
//       if(error.status===200)
//       {
//         alert("somthing went okkk.....");
//       }
//       else{
//         alert("somthing went wrong");

//       }

//     }
// )}
addroom(myForm){

   this.room = myForm.form.value;
  this.email=sessionStorage['email'];
  this.userid=sessionStorage['userid'];
  this.userService.registerroom(this.userid,this.room,this.roomimage).subscribe((res)=>{
    console.log(res);
  
  this.router.navigate(['owner']);
  },(error)=>{
    if(error.status===200)
    {
      alert("somthing went okkk.....");
    }
    else{
      alert("somthing went wrong");

    }

  }
)}
onSelect(event){
  this.roomimage = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.roomimage);
  // reader.onload = ((event) = {
  //   this.imgUrl = reader.result;  
  // }

  reader.onload = (_event) => { 
    this.imgUrl = reader.result; 
  }
}

back()
{
  this.router.navigate(['owner']);
}
  ngOnInit() {
  }

}
