import { Component } from '@angular/core';
import { TeacherService } from './teacher.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teachers: Observable<any[]> = new Observable<any[]>();

  constructor(private teacherService: TeacherService) {
    this.teachers = teacherService.getTeachers();
  }

}
