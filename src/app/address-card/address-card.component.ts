import { Component, OnInit, Input } from '@angular/core';
import {User} from './user.model';



@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input('xyz') userObj: User;
  isCollapsed :boolean = false;
  showStr: string = 'Expand';
  
  constructor( ) {
    
   }

  ngOnInit(): void {
   this.userObj = window.history.state && window.history.state.user;    
  }

  toggleShow(){
    this.isCollapsed= !this.isCollapsed;
    if(this.showStr=== 'Expand')
    {this.showStr="Collapse"}
    else this.showStr = 'Expand';
  }

}
