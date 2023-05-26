import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-side-nav-view',
  templateUrl: './side-nav-view.component.html',
  styleUrls: ['./side-nav-view.component.scss'],
})
export class SideNavViewComponent  {
  showSideNav: boolean = false;
  color: ThemePalette = 'primary';
  checked = true;
  disabled = false;
  isOpen =true
  constructor(){
  }
  
  sideToggle() {
    this.showSideNav = !this.showSideNav;
  }
}
