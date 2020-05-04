import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import{Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-tracker';

  public user1 : User;
  user2 : User;
  
  constructor(public router: Router    )
  { 
   
    this.user1  = new User();
    this.user1.name = "Vivek";
    this.user1.address = "06, Adarsh Nagar";
    this.user1.designation= "Software Developer";
    this.user1.phone = ['741-510-2635'];
  

  this.user2  = new User();
  this.user2.name = "Mishra";
  this.user2.address = "06, Adarsh Nagar";
  this.user2.designation= "Software Developer";
  this.user2.phone = ['1213-4242-534','3424-784'];
  console.log(" USer 1 and user 2 intialized")
  }

  checkworking()
  {
    this.router.navigateByUrl('/AddCrd', { state: { user: this.user1 } });
  }

  ngOnInit() {
  
  }
}
