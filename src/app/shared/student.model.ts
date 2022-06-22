export class StudentModel {
  constructor(
    public id: number,
    public name: string,
    public currentClasse: null | string = null
  ) {}
}
