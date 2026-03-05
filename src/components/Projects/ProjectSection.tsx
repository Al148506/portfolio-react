import { ProjectCarousel } from "./ProjectCarousel";
import "./ProjectsSection.css";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      {/* Header dentro del container */}
      <div className="container">
        <span className="section-eyebrow">Selected Work</span>
        <h2 className="section-title">
          Recent <span>Projects</span>
        </h2>
        <p className="section-description">
          Selected projects that showcase my backend and full-stack experience
        </p>
      </div>

      {/* Carrusel fuera del container → ancho completo */}
      <ProjectCarousel />

      {/* Footer dentro del container */}
      <div className="container">
        <div className="more-projects">
          <a
            href="https://github.com/Al148506"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
};
