import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers() {
    return [
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
    ]
  }
}
