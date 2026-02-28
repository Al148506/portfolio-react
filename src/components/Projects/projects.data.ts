import videogamestore from "../../images/videogameStore.png";
import inventorysystem from "../../images/InventoryPage.png";
import chataisystem from "../../images/ConversationLuke.png";
import moviessystem from "../../images/Movies.png";

import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "videogame-store",
    title: "VideogameStore",
    description: "E-commerce web application for videogame sales.",
    image: videogamestore,
    githubUrl: "https://github.com/Al148506/GameStore",
    liveUrl: "https://videogamestoreacg.web.app/",
    technologies: ["ASP.NET", "SQL Server", "Bootstrap"],
  },
  {
    id: "inventory-system",
    title: "Inventory System",
    description: "Inventory management system built with ASP.NET.",
    image: inventorysystem,
    githubUrl: "https://github.com/Al148506/InventorySystem",
    liveUrl: "https://inventorysystemacg.azurewebsites.net/",
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
  {
    id: "chat-ai",
    title: "Chat AI System",
    description: "AI-powered chat system integrated with backend services.",
    image: chataisystem,
    githubUrl: "https://github.com/Al148506/ChatAISystem",
    liveUrl: "https://chataisystemacg.azurewebsites.net/",
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
  {
    id: "cinema-system",
    title: "Cinema Management System",
    description: "Angular-based cinema management application.",
    image: moviessystem,
    githubUrl: "https://github.com/Al148506/MoviesAngular",
    liveUrl: "https://moviesangularacg.web.app/",
    technologies: ["ASP.NET Core", "Entity Framework"],
  },
];
