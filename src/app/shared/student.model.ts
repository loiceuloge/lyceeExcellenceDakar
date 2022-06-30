export class StudentModel {
  constructor(
    public _id: number,
    public name: string,
    public currentClasse: null | string = null
  ) {}
}
