export interface InfoData {
  icon: string;
  title: string;
  subtitle?: string;
  organization?: string;
  period?: string;
  listItems?: string[];
  badges?: string[];
}

export const infoData: InfoData[] = [
  {
    icon: "bi-briefcase-fill",
    title: "Professional Experience",
    subtitle: "IT Intern",
    organization: "AEROCAR EXPRESS",
    period: "Feb 2024 - Aug 2024",
    listItems: [
      "Developed and maintained an ASP.NET MVC system.",
      "Provided technical support and created user documentation.",
      "Collaborated using GitHub and Trello.",
    ],
    badges: ["ASP.NET MVC", "GitHub", "Trello"],
  },
  {
    icon: "bi-mortarboard-fill",
    title: "Education",
    subtitle: "Bachelor's & Master's in Computer Science",
    organization: "Universidad Autónoma de Aguascalientes",
    listItems: [
      "Bachelor's Degree completed: Dec. 2021",
      "Master's Degree completed: Jun. 2024",
      
      "Master’s thesis: Accessible serious game for mathematics learning (visually impaired students)",
    
    ],
    badges: ["Software Architecture", "Research ", "Accessibility"]
  },
  {
    icon: "bi-gear-fill",
    title: "Technical Skills",
    listItems: [
      "Backend: C#, ASP.NET MVC, REST API, Python",
      "Frontend: React, Angular, HTML, CSS, JavaScript, Bootstrap",
      "Databases: SQL Server, SQLite, MySQL",
      "DevOps & Tools: Docker, Git, Trello, Postman, Azure",
    ],
    badges: ["C#", "ASP.NET", "SQL Server", "React"],
  },
];
