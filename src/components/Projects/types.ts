export interface GalleryImage {
  src: string;
  caption?: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  gallery?: GalleryImage[];
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  featured?: boolean;
}
