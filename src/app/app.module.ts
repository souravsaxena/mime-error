import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { AnkletComponent } from './anklet/anklet.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { RingsComponent } from './rings/rings.component';
import { EarringsComponent } from './earrings/earrings.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
//import { MiddleComponent } from './middle/middle.component';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    NecklaceComponent,
    AnkletComponent,
    BraceletComponent,
    RingsComponent,
    EarringsComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    BindingComponent,
    ViewComponent,
    //MiddleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
