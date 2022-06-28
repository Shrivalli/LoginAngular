import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private user:User,private uss:UserserviceService) {
     user.Email='';
     user.UserId=null;
     user.UserName='';
     user.password='';
    
   }

  ngOnInit() {
    this.uss.userlist=[];
  }

  register(user)
  {
    console.log(user);
    this.uss.userlist.push(user);
    console.log(this.uss.userlist.length);
  }
}
