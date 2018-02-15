import {StudentAddressInterface} from './student-address.interface';
import {StudentFacultyInterface} from './student-faculty.interface';
import {StudentDepartmentInterface} from './student-department.interface';
import {StudentCourseInterface} from './student-course.interface';
import {StudentStudyLevelEnum} from './student-study-level.enum';
import {StudentSponsorInterface} from './student-sponsor.interface';

export interface StudentInterface {
  matricNumber: string;
  icNumber: string;
  passportNumber?: string;
  name: string;
  address: StudentAddressInterface;
  phoneNumber: string;
  homeNumber?: string;
  emailAddress: string;
  nationality: string;
  faculty: StudentFacultyInterface;
  department: StudentDepartmentInterface;
  course: StudentCourseInterface;
  studyLevel: StudentStudyLevelEnum;
  sponsor?: StudentSponsorInterface;
}
