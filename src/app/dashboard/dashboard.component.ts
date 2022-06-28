import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
uname:string;
  constructor(private route:Router) { }

  ngOnInit() {
this.uname=sessionStorage.getItem("uname");
if(this.uname==null)
{
  this.route.navigateByUrl("login");
}
 }

  logout()
  {
    window.sessionStorage.clear();
    console.log("uname"+this.uname);
    this.route.navigateByUrl("login");
  }

}
