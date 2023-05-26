import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss']
})
export class HeaderViewComponent {
isLoggedIn:boolean=false;
  constructor(private router:Router){
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  }

  LogOut(){
    this.router.navigateByUrl('/')
    localStorage.setItem("isLoggedIn", "false")

  }
}
