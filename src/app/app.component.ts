import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-tracker';

  user1 : User;
  user2 : User;
  constructor()
  {
    this.user1  = new User();
    this.user1.name = "Vivek";
    this.user1.address = "06, Adarsh Nagar";
    this.user1.designation= "Software Developer";
    this.user1.phone = ['3424-784'];
  

  this.user2  = new User();
  this.user2.name = "Mishra";
  this.user2.address = "06, Adarsh Nagar";
  this.user2.designation= "Software Developer";
  this.user2.phone = ['1213-4242-534','3424-784'];
  }
}
