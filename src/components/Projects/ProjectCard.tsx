import type { Project } from "./types";
import "./ProjectCard.css";
interface Props {
  project: Project;
  onMoreDetails: () => void;
}

export const ProjectCard = ({ project, onMoreDetails }: Props) => {
  return (
    <div className="showcase-card">
      <div className="showcase-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="showcase-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

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
  );
};
