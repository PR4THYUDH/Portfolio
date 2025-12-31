import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { About } from "../about/about";
import { Skill } from "../skill/skill";
import { Contact } from "../contact/contact";


@Component({
  selector: 'app-home',
  imports: [CommonModule, About, Skill, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
