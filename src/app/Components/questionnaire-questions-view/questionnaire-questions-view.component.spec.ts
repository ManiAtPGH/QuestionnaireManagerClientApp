import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireQuestionsViewComponent } from './questionnaire-questions-view.component';

describe('QuestionnaireQuestionsViewComponent', () => {
  let component: QuestionnaireQuestionsViewComponent;
  let fixture: ComponentFixture<QuestionnaireQuestionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireQuestionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireQuestionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
