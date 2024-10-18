import { Component } from '@angular/core';
import { ListCourseComponent } from "../../components/list-course/list-course.component";
import { AddCourseComponent } from "../../components/add-course/add-course.component";

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [ListCourseComponent, AddCourseComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
