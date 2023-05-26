import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionnaireMangerService } from 'src/app/Services/questionnaire-manger.service';
import { AddUserDialogComponent } from '../dialog -models/add-user-dialog/add-user-dialog.component';
import { HttpClient } from '@angular/common/http';

export interface UserQuestionnaireDetails {
  userQuestionnaireId: string,
  userName: string,
  questionnaireName: string,
  startDate: Date,
  expiryDate: Date,
  dueDuration: string,
  status: string
}
@Component({
  selector: 'app-user-questionnaire-view',
  templateUrl: './user-questionnaire-view.component.html',
  styleUrls: ['./user-questionnaire-view.component.scss']
})
export class UserQuestionnaireViewComponent {
  constructor(
    private httpClient: HttpClient,
    private myService: QuestionnaireMangerService,
    public dialog: MatDialog
  ) {}
  userQuestionnaires: UserQuestionnaireDetails[] = [];
  displayedColumns: string[] = ['Name', 'Questionnaire','Start Date','Expiry Date' ,'Due Duration','Status', 'Actions'];
  ngOnInit() {
    this.myService
      .getUserQuestionnaireData(this.httpClient)
      .subscribe((data) => {this.userQuestionnaires = data});
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
