import { Component, Input } from '@angular/core';
import { Course } from '../../../models/course';

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
}
