import videogamestore from "../images/videogameStore.png";
import inventorysystem from "../images/InventoryPage.png";
import chataisystem from "../images/ConversationLuke.png";
import moviessystem from "../images/Movies.png";
import { importProjectImages } from "../helper/importProjectImages";
import type { Project } from "../components/Projects/types";


export const projects: Project[] = [
  {
    id: "videogame-store",
    titleKey: "projectsSection.videogameStore.title",
    descriptionKey: "projectsSection.videogameStore.description",
    image: videogamestore,
    gallery: importProjectImages("VideogamePOS"),
    githubUrl: "https://github.com/Al148506/GameStore",
    liveUrl: "https://videogamestoreacg.web.app/",
    technologies: ["ASP.NET", "SQL Server", "Bootstrap"],
  },
  {
    id: "inventory-system",
    titleKey: "projectsSection.inventorySystem.title",
    descriptionKey: "projectsSection.inventorySystem.description",
    image: inventorysystem,
    gallery: importProjectImages("InventorySystem"),
    githubUrl: "https://github.com/Al148506/InventorySystem",
    liveUrl: "https://inventorysystemacg.azurewebsites.net/",
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
  {
    id: "chat-ai",
    titleKey: "projectsSection.chatAi.title",
    descriptionKey: "projectsSection.chatAi.description",
    image: chataisystem,
    gallery: importProjectImages("ChatAISystem"),
    githubUrl: "https://github.com/Al148506/ChatAISystem",
    liveUrl: "https://chataisystemacg.azurewebsites.net/",
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
  {
    id: "cinema-system",
    titleKey: "projectsSection.cinemaSystem.title",
    descriptionKey: "projectsSection.cinemaSystem.description",
    image: moviessystem,
    gallery: importProjectImages("MoviesSystem"),
    githubUrl: "https://github.com/Al148506/MoviesAngular",
    liveUrl: "https://moviesangularacg.web.app/",
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
];
