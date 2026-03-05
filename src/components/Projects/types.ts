export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured?: boolean;
}
