import type { Project } from "./types";
import { useState } from "react";
import { GalleryModal } from "./GalleryModal";
import "./ProjectCard.css";

interface Props {
  project: Project;
  onMoreDetails: () => void;
}

export const ProjectCard = ({ project, onMoreDetails }: Props) => {
  const [openGallery, setOpenGallery] = useState(false);
  return (
    <>
      <div className="showcase-card">
        {/* IMAGE */}
        <div className="showcase-image" onClick={() => setOpenGallery(true)}>
          <img src={project.image} alt={project.title} />
          <div className="showcase-image-overlay" />
        </div>

        {/* CONTENT */}
        <div className="showcase-content">
          <span className="showcase-index">Featured Project</span>

          <h2>{project.title}</h2>

          <p>{project.description}</p>

          <div className="showcase-divider" />

          <section className="project-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <i className="bi bi-github me-2"></i>
              View Code
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-box-arrow-up-right me-2"></i>
              Live Demo
            </a>
          </section>

          <div className="showcase-buttons">
            <button onClick={onMoreDetails}>More Details →</button>
          </div>
        </div>
      </div>
      {openGallery && project.gallery && (
        <GalleryModal projectTitle={project.title}
          images={project.gallery}
          onClose={() => setOpenGallery(false)}
        />
      )}
    </>
  );
};
