import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AuthenticationService } from '../Services/authentication/authentication.service';
import { SignInData } from '../model/signInData';
import { UpperCasePipe } from '@angular/common';
import {LoginService} from '../Services/LoginService/login.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;
  error: any = null;
  isFormInvalid = false;
  areCredentialsInvalid =false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.errorSubject.subscribe(errorMessage => {this.error = errorMessage;});
  }
  
  validateUsername(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.username)) {
      this.isUsernameValid = true;
    } else {
      this.isUsernameValid = false;
    }
  }
  onKey(event: any, type: string) {
   
    if (type === 'email' ) {
      this.username = event.target.value;
      this.validateUsername();
    } else if (type === 'password') {
      this.password = event.target.value;
    } 
    
  }
  // onSubmit() {
  //   if (this.isUsernameValid) {
  //     this.loginService.login(this.username, this.password);
  //   }
  // }

  // onSubmit(signInForm: NgForm) {
  //   if (!signInForm.valid){
  //     this.isFormInvalid = true;
  //     this.areCredentialsInvalid = false;
  //     return;

  //   }
    
  //   this.checkCredentials(signInForm);
  //   //console.log(signInForm.value);
  //   const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
  //   this.authenticationService.authenticate(signInData)
  // }

  onSubmit() {
    
    if (this.isUsernameValid) {
      if(this.username != null && this.password != null)
       this.loginService.login(this.username, this.password);
      console.log(this.username + " " + this.password); 
    }
  }
  // private checkCredentials(signInForm: NgForm){
  //   const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
  //   if(!this.authenticationService.authenticate(signInData))
  //   this.isFormInvalid=false;
  //   this.areCredentialsInvalid = true;
  // }
  cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
    document.getElementById('cont_form_login').style.display = "block";
    document.getElementById('cont_form_sign_up').style.opacity = "0";               
  
   setTimeout(function(){  
     document.getElementById('cont_form_login').style.opacity = "1"; },400);  
    
   setTimeout(function(){    
    document.getElementById('cont_form_sign_up').style.display = "none";},200);  
}
                      
  cambiar_sign_up() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.getElementById('cont_form_sign_up').style.display = "block";
    document.getElementById('cont_form_login').style.opacity = "0";
    
    setTimeout(function(){  
      document.getElementById('cont_form_sign_up').style.opacity = "1";},100);  
  
    setTimeout(function(){   
      document.getElementById('cont_form_login').style.display = "none"; },400);  
  
  } 

  ocultar_login_sign_up()
  {
  
    document.querySelector('.cont_forms').className = "cont_forms";  
    document.getElementById('cont_form_sign_up').style.opacity = "0";               
    document.getElementById('cont_form_login').style.opacity = "0"; 
    
    setTimeout(function()
    {
      document.getElementById('cont_form_sign_up').style.display = "none";
      document.getElementById('cont_form_login').style.display = "none";
    },500);  
      
  }	
}
