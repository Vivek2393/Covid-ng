import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user : any;
  @Input('user') username: string;
  constructor() {
   }

  ngOnInit(): void {
    
    this.user = {
      name : this.username,
      title: 'Software Developer',
      address: '06, Adarsh Nagar, Bank Colony',
      phone: [
            '787-0908-877'
        ]
    }
  }

}
