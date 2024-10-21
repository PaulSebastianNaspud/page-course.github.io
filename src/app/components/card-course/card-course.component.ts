import { Component, Input } from '@angular/core';
import { Course } from '../../../models/course';
import {  } from '@angular/core';
@Component({
  selector: 'app-card-course',
  standalone: true,
  imports: [],
  templateUrl: './card-course.component.html',
  styleUrl: './card-course.component.scss'
})
export class CardCourseComponent {
  viewMore = false;
  @Input() course : Course | null = null;

  formatDate(): string {
    if (!this.course?.dateStart) {
        return "";
    }

    const date = new Date(this.course.dateStart);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
}


}
