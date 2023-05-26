import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard {

    constructor(private router:Router){    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
      // The user is logged in, so allow navigation
      return true;
    } else {
      // The user is not logged in, so redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }

}