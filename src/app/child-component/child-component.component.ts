import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  isbtnInfo:boolean=true;
  userImage:string='assets/bike.jpg';

  @Input("childUser")
  public user:User;

  @Output()
  change : EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  childClick(){
    this.change.emit(new Date().toString());
  }

}
