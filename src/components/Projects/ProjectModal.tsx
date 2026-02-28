import type { Project } from "./types";
import "./ProjectModal.css"
interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: Props) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2>{project.title}</h2>

        <img src={project.image} alt={project.title} />

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};