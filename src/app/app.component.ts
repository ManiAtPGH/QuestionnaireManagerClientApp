import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QM-App';
  counter=0
  showSideNav:boolean=false
  handleChildEvent(data:boolean){
    this.showSideNav = data
    console.log("Data From Login", data)
  }

  constructor(private snackBar: MatSnackBar){
    // this.snackBar.open("Welcome to the app", 'Close', 
    // {
    //   duration: 5000
    // });
  }

}
