import videogamestore from "../images/videogameStore.png";
import inventorysystem from "../images/InventoryPage.png";
import chataisystem from "../images/ConversationLuke.png";
import moviessystem from "../images/Movies.png";
export interface ProjectModalData {
  id: string;
  title: string;
  image: string;
  objective: string;
  technologies: string[];
  challenges: string;
  learning: string;
}

export const projectsModalData: ProjectModalData[] = [
  {
    id: "videogame-store",
    title: "VideogameStore",
    image: videogamestore,
    objective:
      "A full-stack e-commerce web application designed to manage videogame sales, including authentication, role-based access, and complete product management. The goal was to simulate a real-world online store with structured backend architecture and database relationships.",

    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Bootstrap",
      "Authentication & Authorization",
    ],

    challenges:
      "Designing proper entity relationships between users, roles, and products required careful database modeling. Implementing secure authentication and ensuring clean separation between business logic and presentation layer was a key architectural challenge.",

    learning:
      "Strengthened my understanding of layered architecture, authentication flows, Entity Framework migrations, and the importance of separation of concerns in scalable systems.",
  },

  {
    id: "inventory-system",
    title: "Inventory System",
    image: inventorysystem,
    objective:
      "A web-based inventory management system built to handle product tracking, stock updates, and CRUD operations in a structured and maintainable way. The project focused on backend reliability and clean data handling.",

    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Razor Views",
      "Bootstrap",
    ],

    challenges:
      "Ensuring data consistency when updating stock quantities and handling validation logic across multiple layers required thoughtful implementation. Managing database migrations while maintaining data integrity was also a key aspect.",

    learning:
      "Improved my experience working with Entity Framework, database migrations, validation patterns, and implementing structured CRUD operations with clean and readable backend logic.",
  },

  {
    id: "chat-ai",
    title: "Chat AI System",
    image: chataisystem,
    objective:
      "An AI-powered chat application that integrates backend services to process user messages and generate intelligent responses. The objective was to design a structured API capable of handling asynchronous communication and external service integration.",

    technologies: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "RESTful APIs",
      "Azure Deployment",
    ],

    challenges:
      "Handling asynchronous communication between frontend and backend while managing API responses required careful error handling and response structuring. Deployment configuration and environment setup were also important technical steps.",

    learning:
      "Deepened my understanding of RESTful API design, asynchronous programming patterns, API integration, and deployment processes in Azure environments.",
  },

  {
    id: "cinema-system",
    title: "Cinema Management System",
    image: moviessystem,
    objective:
      "A full-stack cinema management application designed to handle movie listings, showtimes, and administrative management. The goal was to separate frontend and backend responsibilities using modern web technologies.",

    technologies: [
      "Angular",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
    ],

    challenges:
      "Connecting the Angular frontend with the ASP.NET Core API required proper routing, data binding, and structured API responses. Managing state and ensuring smooth communication between client and server was a key challenge.",

    learning:
      "Gained stronger understanding of frontend-backend separation, REST API consumption, Angular component architecture, and structured full-stack application design.",
  },
];
