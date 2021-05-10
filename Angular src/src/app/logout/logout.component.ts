import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
message:string;
  constructor(authService:AuthenticationService) {
    if(authService.isLoggedIn()){
    authService.logout();
    this.message="You have been successfully logged out";
    }
    else{
      this.message="You have not loogged in";
    }
   }

}
