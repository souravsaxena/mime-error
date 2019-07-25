import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  psw;

  constructor(private us:UsersService) { }
  ngOnInit() {
  }
  register(){
    this.us.signIn(this.email,this.psw)
  }
}
