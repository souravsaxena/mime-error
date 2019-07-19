import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BindingComponent } from './binding/binding.component';
//import { MiddleComponent } from './middle/middle.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { AnkletComponent } from './anklet/anklet.component';
import { EarringsComponent } from './earrings/earrings.component';
import { RingsComponent } from './rings/rings.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'binding',component:BindingComponent},
  //{path:'middle',component:MiddleComponent},
  {path:'necklace',component:NecklaceComponent},
  {path:'bracelet',component:BraceletComponent},
  {path:'anklet',component:AnkletComponent},
  {path:'address',component:AddressComponent},
  {path:'earrings',component:EarringsComponent},
  {path:'rings',component:RingsComponent},
  {path:'contact',component:ContactComponent},

  
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
