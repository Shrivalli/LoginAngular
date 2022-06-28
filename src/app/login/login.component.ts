import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  Login()
  {
    sessionStorage.setItem("uname",this.uname);
    console.log(this.pwd);
   if((this.uname=="admin") && (this.pwd=="welcome"))
    {
      this.route.navigateByUrl("dashboard");
    }
    else{
      this.route.navigateByUrl("login");
    }
  }

}
