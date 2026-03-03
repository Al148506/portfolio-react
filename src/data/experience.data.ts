export type InfoType = "work" | "freelance" | "education";

export interface InfoData {
  type: InfoType;
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
    type: "work",
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
    type: "freelance",
    icon: "bi-code-slash",
    title: "Freelance Developer",
    subtitle: "Full-Stack Developer",
    organization: " ",
    period: "2024 - Present",
    listItems: [
      "Designed and developed full-stack web applications using ASP.NET and JS Frameworks.",
      "Built RESTful APIs with JWT authentication and user role management",
      "Streamlined deployment workflows using Azure and Firebase",
    ],
    badges: ["ASP.NET Core", "JavaScript", "Entity Framework", "REST APIs"],
  },
  {
    type: "education",
    icon: "bi-mortarboard-fill",
    title: "Education",
    subtitle: "Bachelor's & Master's in Computer Science",
    organization: "Universidad Autónoma de Aguascalientes",
    listItems: [
      "Bachelor's Degree completed: Dec. 2021",
      "Master's Degree completed: Jun. 2024",
      "Master’s thesis: Accessible serious game for mathematics learning (visually impaired students)",
    ],
    badges: ["Software Architecture", "Research", "Accessibility"],
  },
];
