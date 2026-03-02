import type { ProjectModalData } from "../../data/projects.modal.data"
import "./ProjectModal.css"

interface Props {
  project: ProjectModalData | null
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: Props) => {
  if (!project) return null

  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal">

        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Imagen */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} />
          <div className="modal-image-overlay">
            <h3>{project.title}</h3>
          </div>
        </div>

        {/* Contenido */}
        <div className="modal-content-body">

          <section>
            <h6><i className="bi bi-bullseye me-2"></i>Objective</h6>
            <p>{project.objective}</p>
          </section>

          <section>
            <h6><i className="bi bi-tools me-2"></i>Technologies</h6>
            <div className="tech-badges">
              {project.technologies.map((tech: string, index: number) => (
                <span key={index} className="badge bg-primary">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h6><i className="bi bi-exclamation-triangle me-2"></i>Challenges</h6>
            <p>{project.challenges}</p>
          </section>

          <section>
            <h6><i className="bi bi-graph-up me-2"></i>What I Learned</h6>
            <p>{project.learning}</p>
          </section>

        </div>

      </div>
    </div>
  )
}

export default ProjectModal