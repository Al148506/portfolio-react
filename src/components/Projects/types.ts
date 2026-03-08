export interface GalleryImage {
  src: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gallery?: GalleryImage[];
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured?: boolean;
}
