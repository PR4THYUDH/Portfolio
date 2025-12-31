import { Component,} from '@angular/core';
import { About } from './about/about';
import { RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Projects } from "./projects/projects";
import { Header } from "./header/header";
import { Skill } from "./skill/skill";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Header, RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  stars = Array.from({ length: 80 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  isDark = true;

toggleTheme() {
  this.isDark = !this.isDark;
  document.body.classList.toggle('light-mode', !this.isDark);
}

}

