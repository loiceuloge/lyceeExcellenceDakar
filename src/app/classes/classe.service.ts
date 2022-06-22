import { Injectable } from '@angular/core';
import { ClasseModel } from '../shared/classe.model';

@Injectable({
  providedIn: 'root',
})
export class ClasseService {
  classes: ClasseModel[] = [
    {
      id: 1,
      name: 'Class1',
    },
    {
      id: 1,
      name: 'Class2',
    },
  ];

  getClasses() {
    return this.classes;
  }

  getClasse(id: number) {
    const classe = this.classes.find((Classe) => Classe.id === id);
    return classe;
  }

  addClasse(name: string) {
    if (name) {
      const classe = new ClasseModel(Date.now(), name);
      this.classes.push(classe);
    }
  }

  removeClasse(id: number) {
    const classeIndex = this.classes.findIndex((classe) => classe.id === id);
    console.log(classeIndex);

    if (classeIndex !== -1) {
      this.classes.splice(classeIndex, 1);
    }
  }

  updateClasse(id: number, name: string) {
    console.log('studient changed: ', id, name);
    const classe = this.classes.find((classe) => classe.id === id);
    console.log(classe);

    if (classe && name) {
      classe.name = name;
      console.log(classe);
    }
  }

  constructor() {}
}
