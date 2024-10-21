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
  
  @Output() sendData = new EventEmitter<Course>()

  addCourse(){
    const today = new Date(); 
    
    if (this.dateStart < today || this.duration <= 0) {
      if (this.dateStart < today) {
          alert("La fecha de inicio no puede ser anterior a hoy.");
      }
      if (this.duration <= 0) {
          alert("La duración debe ser mayor a 0.");
      }
      return; 
  }
    const course : Course = new Course(this.name, this.category, this.duration,this.teachesname, this.dateStart, this.description, this.imgSrc)
    alert("Nuevo curos registrado")
    this.clearCamps()
    this.sendData.emit(course)
  }

  clearCamps(){
    this.name = ""
    this.category = ""
    this.description = ""
    this.imgSrc = ""
    this.teachesname = ""
    this.duration = -1
    this.dateStart = new Date()
  }
}
