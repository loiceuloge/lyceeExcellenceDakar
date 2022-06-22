import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../shared/student.model';
import { StudientService } from './studient-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  studentName: any = '';
  students: StudentModel[] = [];
  id: number = 0;

  constructor(private studientService: StudientService) {}

  ngOnInit(): void {
    this.students = this.studientService.getStudients();
    console.log(this.students);
  }

  addStudient() {
    this.studientService.addStudient(this.studentName);
    this.studentName = '';
  }

  deleteStudent(id: number) {
    this.studientService.removeStudent(id);
  }

  updateInput(id: number) {
    this.id = id;
    const student = this.studientService.getStudient(id);
    this.studentName = student?.name;
    console.log(student);
  }

  editStudient() {
    this.studientService.updateStudent(this.id, this.studentName);
    this.studentName = '';
    this.id = 0;
  }
}
