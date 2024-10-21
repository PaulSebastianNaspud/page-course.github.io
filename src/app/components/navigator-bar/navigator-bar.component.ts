import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigator-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigator-bar.component.html',
  styleUrls: ['./navigator-bar.component.scss']
})
export class NavigatorBarComponent {
  navItems = ['Inicio', 'Acerca de Nosotros', 'Cursos', 'Nuevo Curso', 'Contactanos'];
  navItemsID = ['#header-page', '#about-cour', '#list-course', '#add-course', '#footer'];
  selectedNav: string = 'Inicio';

  selectNav(item: string): void {
    this.selectedNav = item; 
  }
}
