import type { Project } from "./types";
import "./ProjectCard.css"
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

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="showcase-buttons">
          <button onClick={onMoreDetails}>
            More Details →
          </button>
        </div>
      </div>
    </div>
  );
};