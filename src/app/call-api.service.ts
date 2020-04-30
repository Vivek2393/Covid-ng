import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  printToconsole(arg){
console.log(arg);
  }
}
