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
    // this.studentService.getStudients().subscribe((data) => {
    //   this.students = data;
    //   console.log(this.students);
    // });

    // console.log(this.students);
    // this.classeService.getClasses().subscribe((data) => {
    //   this.classes = data;
    //   console.log(this.classes);
    // });

    this.getStudientInit();
    this.getClassesInit();
  }

  getStudientInit() {
    this.studentService.getStudients().subscribe((data) => {
      this.students = data;
    });
  }

  getClassesInit() {
    this.classeService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  filter(classeName: string) {
    console.log(classeName);
    this.studentService.getStudients().subscribe((students) => {
      this.classroomStudient = students.filter((student: StudentModel) => {
        this.className = classeName;
        return student.currentClasse === classeName;
      });
    });

    console.log(this.classroomStudient);
  }

  join(studentID: string, className: string) {
    console.log(className, studentID);
    this.studentService.attachClasse(studentID, className).subscribe((data) => {
      console.log('join succed');
      this.studentService.getStudients().subscribe((data) => {
        this.students = data.filter((student) => {
          return student.currentClasse === 'null';
        });
        this.filter(this.className);
        console.log(this.students);
      });
    });
  }

  remove(id: number) {
    this.studentService.detachClasse(id).subscribe((data) => {
      this.getStudientInit();
      this.filter(this.className);
    });
  }
}
