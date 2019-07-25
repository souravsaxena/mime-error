import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fname;
   lname;
  subject;
  // message;
  constructor(private us:UsersService) { }
  ngOnInit() {
  }
  
   addData(){
     this.us.addData(this.fname,this.lname,this.subject)
   }

}
