import videogamestore from "../images/videogameStore.png";
import inventorysystem from "../images/InventoryPage.png";
import chataisystem from "../images/ConversationLuke.png";
import moviessystem from "../images/Movies.png";
export interface ProjectModalData {
  id: string;
  titleKey: string;
  image: string;
  objectiveKey: string;
  technologies: string[];
  challengesKey: string;
  learningKey: string;
}

export const projectsModalData: ProjectModalData[] = [
  {
    id: "videogame-store",
    titleKey: "projectsSection.videogameStore.title",
    image: videogamestore,
    objectiveKey: "projectsSection.videogameStore.objective",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap",
      "Authentication & Authorization",
    ],

    challengesKey: "projectsSection.videogameStore.challenges",
    learningKey: "projectsSection.videogameStore.learning",
  },

  {
    id: "inventory-system",
    titleKey: "projectsSection.inventorySystem.title",
    image: inventorysystem,
    objectiveKey: "projectsSection.inventorySystem.objective",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Razor Views",
      "Bootstrap",
    ],

    challengesKey: "projectsSection.inventorySystem.challenges",
    learningKey: "projectsSection.inventorySystem.learning",
  },

  {
    id: "chat-ai",
    titleKey: "projectsSection.chatAi.title",
    image: chataisystem,
    objectiveKey: "projectsSection.chatAi.objective",
    technologies: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "RESTful APIs",
      "Azure Deployment",
    ],

    challengesKey: "projectsSection.chatAi.challenges",
    learningKey: "projectsSection.chatAi.learning",
  },

  {
    id: "cinema-system",
    titleKey: "projectsSection.cinemaSystem.title",
    image: moviessystem,
    objectiveKey: "projectsSection.cinemaSystem.objective",
    technologies: [
      "Angular",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
    ],

    challengesKey: "projectsSection.cinemaSystem.challenges",
    learningKey: "projectsSection.cinemaSystem.learning",
  },
];
