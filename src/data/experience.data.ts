export type InfoType = "work" | "freelance" | "education";

export interface InfoData {
  type: InfoType;
  icon: string;
  titleKey: string;
  subtitleKey?: string;
  organization?: string;
  period?: string;
  listItemsKey?: string;
  badges?: string[];
}

export const infoData: InfoData[] = [
  {
    type: "work",
    icon: "bi-briefcase-fill",
    titleKey: "experience.workTitle",
    subtitleKey: "experience.workSubtitle",
    organization: "AEROCAR EXPRESS",
    period: "Feb 2024 - Aug 2024",
    listItemsKey: "experience.workItems",
    badges: ["ASP.NET MVC", "GitHub", "Trello"],
  },
  {
    type: "freelance",
    icon: "bi-code-slash",
    titleKey: "experience.freelanceTitle",
    subtitleKey: "experience.freelanceSubtitle",
    organization: " ",
    period: "2024 - Present",
    listItemsKey: "experience.freelanceItems",
    badges: ["ASP.NET Core", "React", "Entity Framework", "REST APIs"],
  },
  {
    type: "education",
    icon: "bi-mortarboard-fill",
    titleKey: "experience.educationTitle",
    subtitleKey: "experience.educationSubtitle",
    organization: "Universidad Autónoma de Aguascalientes",
    listItemsKey: "experience.educationItems",
    badges: ["Software Architecture", "Research", "Accessibility"],
  },
];
