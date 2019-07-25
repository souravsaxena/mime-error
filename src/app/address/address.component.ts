import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  fname;
   lname;
  subject;

  constructor(private us:UsersService) { }
  ngOnInit() {
  }
  
   addData1(){
     this.us.addData(this.fname,this.lname,this.subject)
   }

}
