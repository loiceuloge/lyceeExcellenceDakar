import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../classes/classe.service';
import { ClasseModel } from '../shared/classe.model';
import { StudentModel } from '../shared/student.model';
import { StudientService } from '../students/studient-service.service';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css'],
})
export class ClassRoomComponent implements OnInit {
  students: StudentModel[] = [];
  classes: ClasseModel[] = [];
  classroomStudient: StudentModel[] = [];
  className: string = '';

  constructor(
    private studentService: StudientService,
    private classeService: ClasseService
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudients();
    console.log(this.students);
    this.classes = this.classeService.getClasses();
  }

  join(studentID: string, className: string) {
    this.studentService.attachClasse(+studentID, className);
    const students = this.studentService.getStudients();
    console.log(students);

    this.filter(this.className);
  }

  filter(classeName: string) {
    console.log(classeName);
    this.classroomStudient = this.studentService
      .getStudients()
      .filter((student) => {
        return student.currentClasse === classeName;
      });

    this.className = classeName;

    console.log(this.classroomStudient);
  }

  remove(id: number) {
    this.studentService.detachClasse(id);
    const studientIndex = this.classroomStudient.findIndex(
      (studient) => studient.id === id
    );
    console.log(studientIndex);

    if (studientIndex !== -1) {
      this.classroomStudient.splice(studientIndex, 1);
    }
  }
}
