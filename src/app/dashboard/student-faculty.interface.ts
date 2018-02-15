import {StudentCourseInterface} from './student-course.interface';
import {StudentDepartmentInterface} from './student-department.interface';
import {StudentFacultyNameEnum} from './student-faculty-name.enum';

export interface StudentFacultyInterface {
  facultyName: StudentFacultyNameEnum;
  courses: StudentCourseInterface;
  department: StudentDepartmentInterface;
}
