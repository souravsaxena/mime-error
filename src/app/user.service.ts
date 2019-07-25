//import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
//import { LoginComponent } from './login/login.component';
//@Injectable({
//  providedIn: 'root'
//})
//export class UserService {
  //url="http://localhost:3000/user"
  //constructor(private http:HttpClient) { }
  //addData(fname,lname,subject){
    //const obj={fname,lname,subject}
    //this
      //.http
        //.post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
  //}

  
 // addData1(fname,lname,subject){
   // const obj={fname,lname,subject}
   // this
   //   .http
   //     .post(`${this.url}/adds`,obj).subscribe(res=>console.log(res))
 // }

  //addData2(fname,lname,subject){
    //const obj={fname,lname,subject}
    //this
      //.http
       // .post(`${this.url}/add`,obj).subscribe(res=>console.log(res))
 // }
//}

//login(email,psw){
  //const obj = {email, psw}
  //console.log(obj);
  //this
   // .http
    //.post(`${thi bs.url}/signin`,obj)
   // .subscribe((res:any) => {
    //  if(res.message){
        //alert(res.message);
      //}
      //else{

        //this.router.navigateByUrl(`/dashboard/${res._id}`);
      //}
    //});
//}
//getDataById(id){
//  return this
//    .http
  //  .get(`${this.url}/getbyid/${id}`);
//}

//register(psw,pswrepeat,email) {
// console.log(password);
// let length = password.lenght;import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  res:any;

  url = 'http://localhost:3000/user';
  url1 = 'http://localhost:3000/user1';
  constructor(private http: HttpClient , private router : Router) { }
  addData(fname,lname,subject) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {fname,lname,subject};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
  }
  addData1(fname,lname,address) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {fname,lname,address};
      this
          .http
          .post(`${this.url}/adds`, obj)
          .subscribe(res => console.log(res));
  }
  
  getData() {
      return(
      this
          .http
          .get(`${this.url}`)
      );
  }
  upData(id, fname) {
      const obj = { fname };
      this
          .http
          .post(`${this.url}/update/${id}`, obj)
          .subscribe(res => console.log(res));
  }
  delData(id) {
      return this.http.get(`${this.url}/delete/${id}`).subscribe();
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(name,city, password,address,email, id) {

      const obj = {
          name: name,
          city: city,
          password: password,
          address:address,
          email:email
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
    
    signIn(email,psw){
      const obj = {email, psw};
      console.log(obj);
      this
        .http
        .post(`${this.url1}/signin`,obj)
        .subscribe((res:any) => {
          if(res.message){
            alert(res.message);
          }
          else{
 
            this.router.navigateByUrl(`/contact`);
          }
        });
    }
    getDataById(id){
      return this
        .http
        .get(`${this.url}/getbyid/${id}`);
    }
    
  register(email,psw,pswrepeat) {
    // console.log(password);
    // let length = password.lenght;
    // console.log(length);
      const obj = {email,psw,pswrepeat};
      this
          .http
          .post(`${this.url1}/addRegister`, obj)
          .subscribe(res => console.log(res));
  }
}

// console.log(length);
  //const obj = {psw,pswrepeat,email};
  //this
     // .http
   //   .post(`${this.url}/addRegister`, obj)
 //     .subscribe(res => console.log(res));
//}
//}


