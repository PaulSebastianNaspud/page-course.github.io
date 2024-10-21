import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigatorBarComponent } from "./components/navigator-bar/navigator-bar.component";
import { HeaderComponent } from "./sections/header/header.component";
import { AbountUsComponent } from "./components/abount-us/abount-us.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { ListCourseComponent } from './sections/list-course/list-course.component';
import { AddCourseComponent } from "./components/add-course/add-course.component";
import { NewCourseComponent } from "./components/new-course/new-course.component";
import { Course } from '../models/course';
import { CourseService } from './services/storage/LocalStorage';
import { PictureService } from './services/api/picture.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigatorBarComponent, HeaderComponent, ListCourseComponent, AbountUsComponent, FooterComponent, AddCourseComponent, NewCourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  @ViewChild("list_course") componentListCourse! : ListCourseComponent

  constructor(private imgService : PictureService) {} 

  async addCourse(course: Course) {
    if (course.imagen === "") {
        const nameCourse = course.name.replace(/\s+/g, '_');
        console.log(nameCourse);

        try {
            const response = await this.imgService.getImg(nameCourse);
            if (response.results.length > 0) {
                const url = response.results[0].urls.raw; 
                course.imagen = url;
            } else {
                course.imagen = "../../../assets/img/default-img.jpg"; 
            }
        } catch (error) {
            course.imagen = "../../../assets/img/default-img.jpg";
        }
    }

    CourseService.getInstance().addCourse(course);
    const newListCourse: Course[] = CourseService.getInstance().getList();
    this.componentListCourse.listCourse = [];
    this.componentListCourse.listCourse = newListCourse;
  }

  
}
