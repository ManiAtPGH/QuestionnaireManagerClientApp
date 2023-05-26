import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionnaireMangerService } from 'src/app/Services/questionnaire-manger.service';
import { AddQuestionnaireDialogComponent } from '../dialog -models/add-questionnaire-dialog/add-questionnaire-dialog.component';


export interface QuestionnaireQuestionDetails {
  questionnaireId: number;
  questionnaireName: string;
  description: string;
}

@Component({
  selector: 'app-questionnaire-questions-view',
  templateUrl: './questionnaire-questions-view.component.html',
  styleUrls: ['./questionnaire-questions-view.component.scss']
})
export class QuestionnaireQuestionsViewComponent {
  constructor(
    private httpClient: HttpClient,
    private myService: QuestionnaireMangerService,
    public dialog: MatDialog
  ) {}
  questionnaires: QuestionnaireQuestionDetails[] = [];
  displayedColumns: string[] = ['Question','Type', 'Score', 'Actions'];
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