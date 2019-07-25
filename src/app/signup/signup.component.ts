import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
email;
psw;
pswrepeat;
  constructor(private us:UsersService) { }

  ngOnInit() {
  }
  register(){
    this.us.register(this.email,this.psw,this.pswrepeat)
  }
}
