import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireMangerService {
  baseUrl = 'https://localhost:44354/api/';
  headers = new HttpHeaders({
    Authorization: 'Basic ' + window.btoa('admin@philips.com:Apassword'),
  });

  constructor() {}

  getLoginData(
    httpClient: HttpClient,
    userName: string,
    password: string
  ): Observable<any> {
    return httpClient.get<any>(
      this.baseUrl + 'Login?userName=' + userName + '&password=' + password
    );
  }

  getQuestionnaireData(httpClient: HttpClient): Observable<any> {
    return httpClient.get<any>(this.baseUrl + 'Questionnaire', {
      headers: this.headers,
    });
  }

  getUserData(httpClient: HttpClient): Observable<any> {
    return httpClient.get<any>(this.baseUrl + 'User', {
      headers: this.headers,
    });
  }

  getUserQuestionnaireData(httpClient: HttpClient): Observable<any> {
    return httpClient.get<any>(this.baseUrl + 'UserQuestionnaire', {
      headers: this.headers,
    });
  }
}
