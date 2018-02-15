import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher, MatDialogRef, MatSnackBar} from '@angular/material';
import {StudentInterface} from './student.interface';

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'qs-student-dialog',
  templateUrl: './student.dialog.html',
})

export class StudentDialog implements OnInit {

  editorForm: FormGroup;
  nationality: FormControl = new FormControl();
  // studyLevel = new FormControl('', [Validators.required]);

  options = [
    'Malaysian',
    'Non-Malaysian'
  ];

  constructor (private dialog: MatDialogRef<StudentDialog>,
               private snack: MatSnackBar,
               private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.editorForm = this.formBuilder.group({
      matricNumber: ['', Validators.required],
      name: ['', Validators.required],
      // icNumber: ['', Validators.required],
      // // passportNumber: [''],
      // // address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      // // homeNumber: [''],
      email: ['', Validators.required],
      // emailAddress: ['', Validators.required],
      nationality: [''],
      // // // faculty: ['', Validators.required],
      // // // department: ['', Validators.required],
      course: ['', Validators.required],
      studyLevel: [''],
      sponsor: ['']
    });
  }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // matcher = new MyErrorStateMatcher();

  close(): void {
    this.dialog.close();
  }

  save(student: StudentInterface): void {
    console.log(JSON.stringify(student));
    this.snack.open('You have successfully add a student!', '', {duration: 2000});
    this.dialog.close();
  }
}
