export interface Skills {
  name: string;
  icon: string;     
  category: string;
  level?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  hot?: boolean;
}

export const skills = [
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "Angular", icon: "fa-brands fa-angular" },
  { name: "React", icon: "fa-brands fa-react" },

  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Django", icon: "fa-solid fa-d" },
  { name: "Node.js", icon: "fa-brands fa-node" },
  { name: "Express.js", icon: "fa-solid fa-e" },

  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "MySQL", icon: "fa-solid fa-database" },

  { name: "REST API", icon: "fa-solid fa-network-wired" },
  { name: "Linux", icon: "fa-brands fa-linux" },
  { name: "VS Code", icon: "fa-solid fa-code" },
  { name: "GitHub", icon: "fa-brands fa-github" },

];

