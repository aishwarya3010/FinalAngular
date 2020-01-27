import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  register(user){

    return this.http.post("http://localhost:8081/DacAug19/user/register",user);

  }
  login(user)
  {
    return this.http.post("http://localhost:8081/DacAug19/user/login",user);
  }
  forgot(user)
  {
    return this.http.post("http://localhost:8081/DacAug19/user/forgot",user);
  }
  confirmOtp(otp)
  {
    return this.http.post("http://localhost:8081/DacAug19/user/confirmOtp",otp);
  }

  resetPassword(pass)
  {
    return this.http.post("http://localhost:8081/DacAug19/user/resetpassword",pass);
  }
  registerroom(userid,room,roomimage)
  {
    console.log(userid,room);
    console.log(room);
    
    const formdata = new FormData();
    
    formdata.append("roomtype",room.roomtype);
    console.log(room.roomtype);
    formdata.append("city",room.city);
    console.log(room.city);
    formdata.append("area",room.area);
        formdata.append("pincode",room.pincode);
    formdata.append("resiadd",room.resiadd);
    formdata.append("rent",room.rent);
    formdata.append("status",room.status);
    formdata.append("facilities",room.facilities);
    formdata.append("roomimage",roomimage);    
    console.log(roomimage);
    console.log(formdata);
    return this.http.post("http://localhost:8081/DacAug19/owner/insertroom/"+userid,formdata);
  }
  getRooms(userid)
  {
    return this.http.get("http://localhost:8081/DacAug19/owner/getroomlist/"+userid);
  }
  deleteRoomInfo(roomid)
  {
    return this.http.delete("http://localhost:8081/DacAug19/owner/"+roomid);
  }

  getDataById(roomid){
    console.log(roomid);
    return this.http.get("http://localhost:8081/DacAug19/owner/getroom/"+roomid);

   }

  update(room)
   {
    console.log("Updated Data: "+room.roomid);
    return this.http.put(`http://localhost:8081/DacAug19/owner/${room.roomid}`,room);
   }
   getRoomsByCity(city)
   {
          return this.http.get("http://localhost:8081/DacAug19/owner/"+city);
   }
   bookroom(userid,roomid,data)
   {
    return this.http.post("http://localhost:8081/DacAug19/owner/bookroom/"+userid+"/"+roomid,data);
   }
   getAllRooms()
   {
    return this.http.get("http://localhost:8081/DacAug19/owner/allroomlist");
   }
   getbookdetails(roomid)
   {
    return this.http.get("http://localhost:8081/DacAug19/owner/bookdetails/"+roomid);
   }
   getUserDetsils(userid)
   {
    return this.http.get("http://localhost:8081/DacAug19/user/getuserbyid/"+userid);
   }
   updateuser(user)
   {
    console.log("Updated Data: "+user.userid);
    return this.http.put(`http://localhost:8081/DacAug19/user/update/${user.userid}`,user);
   }
}
