import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private mainSvc:MainService,private router:Router){}


  Login(){
    this.mainSvc.isUserLoggedIn = true;
    this.router.navigate(['/']);
  }
  
}
