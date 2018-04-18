import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User= new User();
  constructor() { }

  ngOnInit() {
    this.user.id=10;
    this.user.name="sending to child";
  }

  userNameChanged(newName){
    this.user.name= newName;
  }
}
