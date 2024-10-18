import { Component } from '@angular/core';
import { Course } from '../../../models/course';
import { CardCourseComponent } from "../card-course/card-course.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [CardCourseComponent, FormsModule],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.scss'
})
export class ListCourseComponent {
  listCourseCanche : Course []= generateCancheList()

  

  getNewCourse(newCourse : Course){
    this.listCourseCanche.push(newCourse)
  }
  
}


function generateCancheList(): Course [] {
  return [
      // Programación
      new Course("JavaScript Básico", "Programación", 3, "Juan Pérez",new Date() ,  { description: "Un curso introductorio a JavaScript." }),
      new Course("Python para Ciencia de Datos", "Programación", 3, "Ana Gómez", new Date(), { description: "Curso sobre el uso de Python en ciencia de datos." }),
      new Course("Java para Principiantes", "Programación", 4, "Diego Salas", new Date(), { description: "Curso básico de Java para principiantes." }),
      new Course("Programación en C#", "Programación", 5, "José Rodríguez", new Date(), { description: "Curso completo de C# para desarrollo de aplicaciones." }),
      new Course("Desarrollo de Aplicaciones en .NET", "Programación" , 3, "Juantio", new Date(), { description: "Crea aplicaciones de escritorio y web usando .NET." }),
      new Course("Introducción a PHP", "Programación", 3, "Sofía Torres", new Date(), { description: "Aprende a crear aplicaciones web dinámicas con PHP." }),
      new Course("Fundamentos de Ruby on Rails", "Programación", 3, "Fernando Ruiz", new Date(), { description: "Desarrollo de aplicaciones web con Ruby on Rails." }),
      new Course("Node.js para Principiantes", "Programación", 1, "Miguel López", new Date(), { description: "Crea aplicaciones del lado del servidor con Node.js." }),
      new Course("Introducción a la Programación en Swift", "Programación", 2, "Ana María", new Date(), { description: "Curso básico de programación en Swift para iOS." }),
      new Course("Desarrollo de API REST con Django", "Programación", 2, "Pablo Martínez", new Date(), { description: "Aprende a construir API REST usando Django." }),

    
  ];
}