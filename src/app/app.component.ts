import { Component } from '@angular/core';
//import { AuthenticationService } from '../app/Services/authentication/authentication.service';
import { LoginComponent } from 'src/app/login/login.component'
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HulluPay Login';
  
  

  constructor(){

  }

  logout(){
    
  }


 
}
