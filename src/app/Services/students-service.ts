import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { StudentComponent} from '../student/student.component';

@Injectable()
// injecting the student service
export class StudentService {
  // declaring the student array
  studentList: Student[]= [];

  constructor() {}
// getStudents() method to return the student list
  getStudents(): Student[] {
    return this.studentList;
  }
// createStudent() method to add a new student to the studentList array
  createStudent(newStudent: Student) {
    this.studentList.unshift(newStudent);
    console.log(this.studentList);
  }
}
