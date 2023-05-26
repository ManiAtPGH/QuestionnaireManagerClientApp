import { HttpClient } from '@angular/common/http';
import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuestionnaireMangerService } from 'src/app/Services/questionnaire-manger.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent {
  form: FormGroup;
  post: any = '';

  isLogingSuccess = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _service: QuestionnaireMangerService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({});
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  //@Output() childEvent = new EventEmitter<boolean>();

validateCredentials(): boolean {
  
  this._service.getLoginData(
    this.httpClient,
    this.form.get('userName')?.value,
    this.form.get('password')?.value
  ).subscribe(data=> this.isLogingSuccess =  data)

  return this.isLogingSuccess;
}

  onSubmit(post: any) {
    //this.childEvent.emit(true);

    if (this.validateCredentials()) {
      this.router.navigateByUrl('/home');
      localStorage.setItem("isLoggedIn", "true")
      this.snackBar.open(
        'You have successfully LoggedIn, Welcome to the app',
        'Close',
        {
          duration: 3000,
        }
      );
    } else {
      this.snackBar.open(
        'Incorrect Credentials, please check and retry.',
        'Ok',
        {
          duration: 3000,
        }
      );
    }
  }
}
