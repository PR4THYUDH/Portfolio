import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
     skills = [
    {
      title: "Frontend",
      description: "Modern web interfaces",
      color: "#4A8CF7",
      skills: [
        { name: "Angular", level: "Advanced", hot: true },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "HTML / CSS", level: "Expert" }
      ]
    },
    {
      title: "Backend",
      description: "Server & Database",
      color: "#22c55e",
      skills: [
        { name: "Python", level: "Advanced", hot: true },
        { name: "Django", level: "Proficient" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MySQL / MongoDB", level: "Proficient" }
      ]
    },
    {
      title: "Tools",
      description: "Development & Productivity Tools",
      color: "#f97316",
      skills: [
        { name: "VS Code", level: "Expert", hot: true },
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Proficient" }
      ]
    }
  ];

  getLevelPercentage(level: string): number {
    switch (level) {
      case "Expert": return 95;
      case "Advanced": return 85;
      case "Proficient": return 75;
      case "Intermediate": return 65;
      default: return 50;
    }
  }

}
