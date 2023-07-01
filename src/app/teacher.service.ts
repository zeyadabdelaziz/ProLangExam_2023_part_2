import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers(): Observable<any[]> {
    const teachers = [
      {
        id: 1,
        firstName: "James",
        lastName: "Bond",
        skills: [
          "Fighting",
          "Spying",
          "Weapons",
          "Driving"
        ]
      },
      {
        id: 2,
        firstName: "Andrzej",
        lastName: "Gołota",
        skills: [
          "Boxing",
          "Dancing",
          "Acting"
        ]
      }
    ];

    return of(teachers);
  }
}
