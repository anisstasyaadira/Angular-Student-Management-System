import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {StudentInterface} from './student.interface';
import {Observable} from 'rxjs/Observable';
import {StudentDialog} from './student.dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'qs-student-host',
  templateUrl: './student-host.page.html',
})

export class StudentHostPage implements OnInit {

  creatorDialogRef: MatDialogRef<StudentDialog>;
  students$:Observable<StudentInterface[]>;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private studentService: StudentService,
              private dialog: MatDialog,
              private router: Router,
              private vcf: ViewContainerRef,
              private route: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private snack: MatSnackBar,) {

  }

  ngOnInit(): void {
    this.students$ = this.studentService.findStudents();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  showAddDialog(): void {
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '30%';
    config.height = '70%';
    config.position = {top: '20px'};
    this.creatorDialogRef = this.dialog.open(StudentDialog, config);
  }

  viewStudent(student: StudentInterface): void {
    this.router.navigate(['/student-detail',student.matricNumber] );
  }

  submit(): void{
    this.snack.open('You have successfully add a user!', '', {duration: 1000});
  }
}
