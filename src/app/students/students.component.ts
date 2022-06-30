import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../shared/student.model';
import { StudientService } from './studient-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  studentName: string = '';
  students: StudentModel[] = [];
  id: number = 0;

  constructor(private studientService: StudientService) {}

  ngOnInit(): void {
    this.studientService.getStudients().subscribe((data) => {
      this.students = data;
      // console.log(this.students);
    });
  }

  getStudient() {
    this.studientService.getStudients().subscribe((data) => {
      this.students = data;
    });
  }

  addStudient() {
    this.studientService.addStudient(this.studentName).subscribe((data) => {
      console.log(data);
      this.getStudient();
    });

    this.getStudient();
    this.studentName = '';
  }

  deleteStudent(id: number) {
    console.log(id);
    this.studientService.removeStudent(id).subscribe((data) => {
      this.getStudient();
    });
  }

  updateInput(id: number) {
    this.id = id;
    this.studientService.getStudient(id).subscribe((data) => {
      const student = data;
      this.studentName = student?.name;
      console.log(student);
    });
  }

  editStudient() {
    this.studientService
      .updateStudent(this.id, this.studentName)
      .subscribe((data) => {
        console.log(data);
        this.getStudient();
        this.studentName = '';
        this.id = 0;
      });
  }
}
