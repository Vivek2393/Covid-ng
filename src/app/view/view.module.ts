import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import {FormsModule} from '@angular/forms';
 


@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ShowComponent]
})
export class ViewModule { }
