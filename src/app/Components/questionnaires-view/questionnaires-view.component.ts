import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { QuestionnaireMangerService } from 'src/app/Services/questionnaire-manger.service';
import { AddQuestionnaireDialogComponent } from '../dialog -models/add-questionnaire-dialog/add-questionnaire-dialog.component';

export interface QuestionnaireDetails {
  questionnaireId: number;
  questionnaireName: string;
  description: string;
}

@Component({
  selector: 'app-questionnaires-view',
  templateUrl: './questionnaires-view.component.html',
  styleUrls: ['./questionnaires-view.component.scss'],
})
export class QuestionnairesViewComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private myService: QuestionnaireMangerService,
    public dialog: MatDialog
  ) {}
  questionnaires: QuestionnaireDetails[] = [];
  displayedColumns: string[] = ['Name', 'Description', 'Actions'];
  ngOnInit() {
    this.myService
      .getQuestionnaireData(this.httpClient)
      .subscribe((data) => (this.questionnaires = data));
  }

  delete(row_obj: any) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AddQuestionnaireDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
