import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  errorSubject: any = new BehaviorSubject<any>(null);
  errorMessage: any = this.errorSubject.asObservable();
  userSubject: any = new BehaviorSubject<any>(null);
  user: any = this.userSubject.asObservable();

  constructor(private http: HttpClient,private router: Router,) { }
  url: any = 'https://hullupay.herokuapp.com/login';
  
  
  login(Username: string, Password: string): any 
  {
   let rq={
          'phoneNumber':Username ,
          'password':   Password
          }
    this.http.post(this.url,  rq  ).subscribe(data =>
    {
       if (data['userName']!=null){
        this.router.navigateByUrl('admin');
       }
        
      
    });

    
  }

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }
}
