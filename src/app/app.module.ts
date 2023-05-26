import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderViewComponent } from './Components/header-view/header-view.component';
import { LoginViewComponent } from './Components/login-view/login-view.component';
import { UsersViewComponent } from './Components/users-view/users-view.component';
import { QuestionnairesViewComponent } from './Components/questionnaires-view/questionnaires-view.component';
import { QuestionnaireQuestionsViewComponent } from './Components/questionnaire-questions-view/questionnaire-questions-view.component';
import { UserQuestionnaireViewComponent } from './Components/user-questionnaire-view/user-questionnaire-view.component';
import { SideNavViewComponent } from './Components/side-nav-view/side-nav-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterViewComponent } from './Components/footer-view/footer-view.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddQuestionnaireDialogComponent } from './Components/dialog -models/add-questionnaire-dialog/add-questionnaire-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderViewComponent,
    LoginViewComponent,
    UsersViewComponent,
    QuestionnairesViewComponent,
    QuestionnaireQuestionsViewComponent,
    UserQuestionnaireViewComponent,
    SideNavViewComponent,
    PageNotFoundComponent,
    FooterViewComponent,
    HomeComponent,
    AddQuestionnaireDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
