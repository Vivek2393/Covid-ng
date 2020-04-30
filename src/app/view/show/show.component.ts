import { Component, OnInit } from '@angular/core';
import { CallApiService } from 'src/app/call-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

response : any;
username : string = "";
constructor(private http: HttpClient){
 
}
  ngOnInit(): void {
  }

  fetchUser(){
   this.http.get('https://api.github.com/users/'+this.username)
  .subscribe((resp)=>{this.response = resp;
  console.log(resp)})
  }
}
