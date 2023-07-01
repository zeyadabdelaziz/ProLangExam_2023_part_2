import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent {
  @Input() teachers: Observable<any[]> = new Observable<any[]>();

  deleteSkill(teacherId: number, skill: string) {
    this.teachers.subscribe(teachers => {
      const teacher = teachers.find(t => t.id === teacherId);
      if (teacher) {
        const index = teacher.skills.indexOf(skill);
        if (index !== -1) {
          teacher.skills.splice(index, 1);
        }
      }
    });
  }
}
