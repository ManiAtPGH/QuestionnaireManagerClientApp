import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent {
  formGroup: FormGroup;
  post: any = '';
  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, 
    private formBuilder: FormBuilder) {
      this.formGroup= this.formBuilder.group({})
    }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'Name': [null],
      'Description': [null],
    });
  }

  onSubmit(post:any){

  }
}
