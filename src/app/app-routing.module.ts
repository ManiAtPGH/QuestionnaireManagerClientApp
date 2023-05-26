import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './Components/login-view/login-view.component';
import { QuestionnaireQuestionsViewComponent } from './Components/questionnaire-questions-view/questionnaire-questions-view.component';
import { QuestionnairesViewComponent } from './Components/questionnaires-view/questionnaires-view.component';
import { UsersViewComponent } from './Components/users-view/users-view.component';
import { UserQuestionnaireViewComponent } from './Components/user-questionnaire-view/user-questionnaire-view.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuard } from './gards/auth-gaurd';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginViewComponent },
  {
    path: 'home', canActivate: [localStorage.getItem('isLoggedIn') === 'true'],
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'questionnaires', pathMatch: 'full' },
      { path: 'questionnaires', canActivate: [localStorage.getItem('isLoggedIn') === 'true'], component: QuestionnairesViewComponent,  },
      { path: 'users', canActivate:[localStorage.getItem('isLoggedIn') === 'true'], component: UsersViewComponent },
      { path: 'user-questionnaires', canActivate:[localStorage.getItem('isLoggedIn') === 'true'], component: UserQuestionnaireViewComponent },
      { path: 'questionnaireQuestions', canActivate:[localStorage.getItem('isLoggedIn') === 'true'], component: QuestionnaireQuestionsViewComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
