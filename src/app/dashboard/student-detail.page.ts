import {Component, OnInit} from '@angular/core';
import {StudentInterface} from './student.interface';
import {Observable} from 'rxjs/Observable';
import {StudentService} from '../../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 's-student-detail',
  templateUrl: './student-detail.page.html',
})

export class StudentDetailPage implements OnInit {

  student$: Observable<StudentInterface>;

  //direct injection
  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: { matricNumber: string }) => {
      this.student$ = this.studentService.findStudentByMatricNo(params.matricNumber);
    });
  }

  goBack():void {
    this.router.navigate(['student-host']);
  }
  }
