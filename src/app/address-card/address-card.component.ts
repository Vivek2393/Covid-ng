import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user : any;
  
  constructor() {
    this.user = {
      name : 'Vivek Mishra',
      title: 'Software Developer',
      address: '06, Adarsh Nagar, Bank Colony',
      phone: [
            '123-456-788',
            '786-456-788'
        ]
    }
   }

  ngOnInit(): void {
  }

}
