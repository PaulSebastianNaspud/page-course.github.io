import { Component, Input, input, OnInit } from '@angular/core';
import { Course } from '../../../models/course';
import { FormsModule } from '@angular/forms';
import { CardCourseComponent } from '../../components/card-course/card-course.component';
import { CourseService } from '../../services/storage/LocalStorage';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [CardCourseComponent, FormsModule],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.scss'
})
export class ListCourseComponent {
  
  listCourse : Course [] =  CourseService.getInstance().getList()



}

