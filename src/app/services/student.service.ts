import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

  private _histories = [
    {
      year: 2006,
      school: 'ABC School'
    },
    {
      year: 2010,
      school: 'XYZ School'
    }
  ];

  private _students = [
    {
      id: 1,
      name: 'Ayyanar',
      grade: 10,
      histories: this._histories
    },
    {
      id: 2,
      name: 'Subash',
      grade: 9,
      histories: this._histories
    },
    {
      id: 3,
      name: 'John',
      grade: 11,
      histories: this._histories
    }
  ];

  constructor() { }

  public getStudents(): any[] {
    return this._students;
  }

}
