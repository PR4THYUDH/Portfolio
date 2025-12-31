import { Component } from '@angular/core';
import { Ptojects } from '../ptojects';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [CommonModule,RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects:Ptojects[] = [
    {
      id:1,
      title:'Eyemate – Assistive Vision Web App',
      description:'Python-Django + Android integration to help visually impaired users recognize objects through voice feedback.',
      image:'/projects/eyemate.png',
      technologies:['Python','Django','Android','Vision API'],
      demo:'https://your-demo-link.com'
    },
    {
      id:2,
      title:'Daily Expense Tracker',
      description:'Track and manage expenses with visualization and category-based spending history.',
      image:'/projects/expensetracker.png',
      technologies:['Django','SQLite','Bootstrap'],
      demo:'https://your-demo-link.com'
    },
    // Add more projects
  ];
}
