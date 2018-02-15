import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {StudentInterface} from '../app/dashboard/student.interface';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentService {

  //request direct injection via constructor
  constructor(private http: HttpClient) {

  }

  //find all students
  public findStudents(): Observable<StudentInterface[]> {
    return  this.http.get('/data/students.json').map(res => <StudentInterface[]>res);
  }

  //find a student
  public findStudentByMatricNo(matricNumber: string): Observable<StudentInterface> {
    return this.http.get('/data/student.json').map(res => <StudentInterface>res);
  }
}
