import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './view/show/show.component';
import { AddressCardComponent } from './address-card/address-card.component';

const routes: Routes = [
  {path:"",redirectTo: "/gitCard" ,pathMatch:"full"},
{path:"gitCard",component: ShowComponent },
{path:"AddCrd", component: AddressCardComponent },
{path:"**",redirectTo:"/gitCard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
