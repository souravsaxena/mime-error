import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="http://localhost:3000/user"
  constructor(private http:HttpClient) { }
  addData(fname,lname,subject){
    const obj={fname,lname,subject}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }

  
  addData1(fname,lname,subject){
    const obj={fname,lname,subject}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }

  addData2(fname,lname,subject){
    const obj={fname,lname,subject}
    this
      .http
        .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  }
}
