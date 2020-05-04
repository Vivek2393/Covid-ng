import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { CallApiService } from './call-api.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent
  ],
  imports: [
      BrowserModule,
    ViewModule,
    AppRoutingModule,
    HttpClientModule
  ],  
  providers: [CallApiService],
  bootstrap: [AppComponent],
  exports:[AddressCardComponent]
})
export class AppModule { }
