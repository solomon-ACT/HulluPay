import { Component, OnInit } from '@angular/core';
import {LoginService} from '../Services/LoginService/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: any = null;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.userSubject.subscribe(user => {this.user = user; });
  }

}
