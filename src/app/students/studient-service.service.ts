import { EventEmitter, Injectable } from '@angular/core';
import { StudentModel } from '../shared/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudientService {
  students: StudentModel[] = [
    {
      id: 1,
      name: 'Loic Euloge',
      currentClasse: null,
    },
    {
      id: 2,
      name: 'Student 2',
      currentClasse: null,
    },
    {
      id: 3,
      name: 'Student 3',
      currentClasse: null,
    },
  ];

  getStudients() {
    return this.students;
  }

  // getStudientsByClasseName(classeName: string) {
  //   const tempStudents = this.students.filter((students) => {
  //     return (students.currentClasse = classeName);
  //   });
  //   console.log(tempStudents);

  //   return tempStudents;
  // }

  getStudient(id: number) {
    const student = this.students.find((student) => student.id === id);
    return student;
    // if (student) {
    //   return student;
    // }
  }

  addStudient(name: string) {
    if (name) {
      const student = new StudentModel(Date.now(), name);
      this.students.push(student);
    }
  }

  removeStudent(id: number) {
    const studientIndex = this.students.findIndex(
      (studient) => studient.id === id
    );
    console.log(studientIndex);

    if (studientIndex !== -1) {
      this.students.splice(studientIndex, 1);
    }
  }

  updateStudent(id: number, name: string) {
    console.log('studient changed: ', id, name);
    const studient = this.students.find((studient) => studient.id === id);
    console.log(studient);

    if (studient && name) {
      studient.name = name;
      console.log(studient);
    }
  }

  attachClasse(id: number, classe: string) {
    const studient = this.students.find((studient) => studient.id === id);
    if (studient) {
      studient.currentClasse = classe;
    }
  }

  detachClasse(id: number) {
    const studient = this.students.find((studient) => studient.id === id);
    if (studient) {
      studient.currentClasse = null;
    }
  }

  updateInput = new EventEmitter<number>();

  constructor() {}
}

// const students = [];
// const classes = [];
// let currentClasse = null;

// function addStudent(name) {
//   students.push({ name, id: Date.now(), currentClasse: null });
// }

// function removeStudent(id) {
//   students.filter((student) => {
//     return student.id === id;
//   });
// }

// function attachClasse(classe, studentId) {
//   const index = students.findIndex((student) => student.id === studentId);
//   students[index].classe = classe;
// }

// function detachClasse(studentId) {
//   const index = students.findIndex((student) => student.id === studentId);
//   students[index].classe = null;
// }

// function filter(classe) {
//   return students.filter((student) => student.classe === classe);
// }
