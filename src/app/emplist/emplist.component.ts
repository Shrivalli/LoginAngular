import { Component, OnInit } from '@angular/core';
import {User} from '../User.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
users:User[];
  constructor(private user:User,private uss:UserserviceService) { }

  ngOnInit() {
    this.users=this.uss.refreshlist();
  }

}
