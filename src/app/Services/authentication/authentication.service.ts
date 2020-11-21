// import { registerLocaleData } from '@angular/common';
// import { Route } from '@angular/compiler/src/core';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Customer } from 'src/app/model/customer';
// import { SignInData } from 'src/app/model/signInData';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// const httpOptions = {
//   headers: new HttpHeaders({
//   'Content-Type': 'application/json'})
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   ServerUrl:string = 'https://hullupay.herokuapp.com/login';
//   private readonly mockedUser = this.getUser();
//   IsAuthenticated = false;
//   customer: Customer;
  
//   constructor(private router: Router,private http:HttpClient) { }
// // Get Users
//  getUser():Observable<SignInData[]> {
//    return this.http.get<SignInData[]>(this.ServerUrl);
  
//   } 
//   authenticate(signInData: SignInData): boolean {
//     if(this.checkCreadentials(signInData)){
//       this.IsAuthenticated =true;
//       this.router.navigate(['admin'])
//       return true;
//     }
//     this.IsAuthenticated = false;
//     return false;
//   }
//   private checkCreadentials(signInData: SignInData): boolean {
//     return this.checkEmail(signInData.getEmail()) 
//     && this.checkPassword(signInData.getPassword());

//   }

//   private checkEmail(email: string): boolean{
//     return email === this.mockedUser.getEmail();

//   }
//   private checkPassword(password: string): boolean{
//     return password === this.mockedUser.getPassword();
//   }
//   getEmail():string
//   {
//     return;
//   }
//   logout(){
//     this.IsAuthenticated = false;
//     this.router.navigate([''])
//   }

//   register(user){
  
//     return this.IsAuthenticated = false;
//   }

//   //signUp():any{        
//    //   this.http.post<Customer>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
//      //     this.customer = data;
//      // })
//    //return Customer;
//   //}
// }

