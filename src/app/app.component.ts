import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeScreenComponent } from "./pages/home-screen/home-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
