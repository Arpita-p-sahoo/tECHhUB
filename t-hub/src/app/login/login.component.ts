import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private mainSvc:MainService){}


  Login(){
    this.mainSvc.isUserLoggedIn = true;
  }
  
}
