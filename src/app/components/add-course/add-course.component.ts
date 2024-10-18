import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  name : string = ""
  category : string = ""
  description : string = ""
  imgSrc : string = ""
  teachesname : string = ""
  duration : number = -1
  dateStart : Date = new Date()
  
  @Output() addCourseEvent = new EventEmitter()

  sendDataAddCourse(){
    this.addCourseEvent.emit(new Course(this.name, this.category, this.duration,this.teachesname, this.dateStart))
  }
}
