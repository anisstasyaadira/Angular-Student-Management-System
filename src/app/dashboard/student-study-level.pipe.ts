import {Pipe, PipeTransform} from '@angular/core';
import {StudentStudyLevelEnum} from './student-study-level.enum';


@Pipe ({
  name: 'studentStudyLevelPipe'
})
export class StudentStudyLevelPipe implements PipeTransform {
  constructor(){

  }

  transform (value: StudentStudyLevelEnum): any {
    if (!value) {
      return value;
    }
    switch (StudentStudyLevelEnum[value.toString()]){
      case StudentStudyLevelEnum.YEAR_1:{
        return 'Year 1';
      }
      case StudentStudyLevelEnum.YEAR_2:{
        return 'Year 2';
      }
      case StudentStudyLevelEnum.YEAR_3:{
        return 'Year 3';
      }
      case StudentStudyLevelEnum.YEAR_4:{
        return 'Year 4';
      }
      default:{
        return value;
      }
    }
  }
}
