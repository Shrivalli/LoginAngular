import { Injectable } from '@angular/core';
import {User} from '../app/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 userlist:User[];

  constructor(private user:User) { }

  refreshlist()
  {
    return this.userlist;
  }
}
