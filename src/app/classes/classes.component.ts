import { Component, OnInit } from '@angular/core';
import { ClasseModel } from '../shared/classe.model';
import { ClasseService } from './classe.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classeName: string = '';
  classes: ClasseModel[] = [];
  id: number = 0;

  constructor(private classeService: ClasseService) {}

  ngOnInit(): void {
    this.classeService.getClasses().subscribe((data) => {
      this.classes = data;
      console.log(this.classes);
    });
  }

  getClassesInit() {
    this.classeService.getClasses().subscribe((data) => {
      this.classes = data;
    });
  }

  addClasse() {
    this.classeService.addClasse(this.classeName).subscribe((data) => {
      console.log(data);
      this.getClassesInit();
    });

    this.getClassesInit();
    this.classeName = '';
  }

  deleteClasse(id: number) {
    console.log(id);
    this.classeService.removeClasse(id).subscribe((data) => {
      this.getClassesInit();
    });
  }

  updateInput(id: number) {
    this.id = id;
    this.classeService.getClasse(id).subscribe((data) => {
      const classe = data;
      this.classeName = classe?.name;
      console.log(classe);
    });
  }

  editClasse() {
    this.classeService
      .updateClasse(this.id, this.classeName)
      .subscribe((data) => {
        console.log(data);
        this.getClassesInit();
        this.classeName = '';
        this.id = 0;
      });
  }
}
