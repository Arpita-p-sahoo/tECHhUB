import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't-hub';
  dropdownOpen = false;
  isMobileMenuOpen = false;

  constructor(public mainSvc:MainService){}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


}
