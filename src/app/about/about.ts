import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { skills } from '../skills';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  skills = skills;
}
  