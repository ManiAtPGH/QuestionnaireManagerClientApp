import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-questionnaire-dialog',
  templateUrl: './add-questionnaire-dialog.component.html',
  styleUrls: ['./add-questionnaire-dialog.component.scss']
})
export class AddQuestionnaireDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddQuestionnaireDialogComponent>, 
    private formBuilder: FormBuilder, private router: Router) {
      this.formGroup= this.formBuilder.group({})
    }

  formGroup: FormGroup;
  post: any = '';


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'Name': [null, Validators.required],
      'Description': [null],
    });
  }

  onSubmit(post:any){

  }

}
