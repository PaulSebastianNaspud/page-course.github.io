import { Component } from '@angular/core';
import { ListCourseComponent } from "../../components/list-course/list-course.component";
import { AddCourseComponent } from "../../components/add-course/add-course.component";
import { HeaderComponent } from "../../sections/header/header.component";
import { FooterComponent } from "../../sections/footer/footer.component";
import { MainContainerComponent } from "../../sections/main-container/main-container.component";

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [ListCourseComponent, AddCourseComponent, HeaderComponent, FooterComponent, MainContainerComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {

}
