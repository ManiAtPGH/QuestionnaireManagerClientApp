import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionnaireMangerService } from 'src/app/Services/questionnaire-manger.service';
import { AddUserDialogComponent } from '../dialog -models/add-user-dialog/add-user-dialog.component';

export interface UserDetails {
  role: string,
  userId: string,
  createdDate: Date,
  fullName: string,
  email: string,
}

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss']
})
export class UsersViewComponent {
  constructor(
    private httpClient: HttpClient,
    private myService: QuestionnaireMangerService,
    public dialog: MatDialog
  ) {}
  users: UserDetails[] = [];
  displayedColumns: string[] = ['Name', 'Email','Role', 'Actions'];
  ngOnInit() {
    this.myService
      .getUserData(this.httpClient)
      .subscribe((data) => {this.users = data , console.log(data, 'user Data')});
  }

  delete(row_obj: any) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddUserDialogComponent, {
      width: '1000px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
