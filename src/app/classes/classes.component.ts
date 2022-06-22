import { Component, OnInit } from '@angular/core';
import { ClasseModel } from '../shared/classe.model';
import { ClasseService } from './classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classeName: any = '';
  classes: ClasseModel[] = [];
  id: number = 0;

  constructor(private classeService: ClasseService) {}

  ngOnInit(): void {
    this.classes = this.classeService.getClasses();
    console.log(this.classes);
  }

  addClasse() {
    this.classeService.addClasse(this.classeName);
    this.classeName = '';
  }

  deleteClasse(id: number) {
    this.classeService.removeClasse(id);
  }

  updateInput(id: number) {
    this.id = id;
    const student = this.classeService.getClasse(id);
    this.classeName = student?.name;
    console.log(student);
  }

  editClasse() {
    this.classeService.updateClasse(this.id, this.classeName);
    this.classeName = '';
    this.id = 0;
  }
}
