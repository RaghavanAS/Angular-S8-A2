import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { StudentService } from '../Services/students-service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
 // providers: [StudentService]
})
export class StudentComponent implements OnInit {
// initialising the student object
  mystudent: Student = new Student();
  // declaring the student array
  studentList: Student[] = [];
  // flag to hide or display the student. Set to false initially
  hideTable: boolean = false;
// constructor dependency injection to inject the student service
  constructor(private studentService: StudentService) {}
// calling the getStudents() method to return the student list
  ngOnInit() {
  this.studentList = this.studentService.getStudents();
}
// calling the onsave method on button click which passes the student details to student service to add it to student list 

onSave(studentName, studentAge) {
  console.log(studentName);
  this.mystudent.name = studentName;
  this.mystudent.age = studentAge;
  this.studentService.createStudent(this.mystudent);
  if (this.studentList.length > 0) {
    this.hideTable = true;
  }
  this.mystudent = new Student;
}
}
