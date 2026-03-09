import { useTranslation, Trans } from "react-i18next";
import { ProjectCarousel } from "./ProjectCarousel";
import "./ProjectsSection.css";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects-section">
      {/* Header dentro del container */}
      <div className="container">
        <span className="section-eyebrow">{t('projects.eyebrow')}</span>
        <h2 className="section-title">
          <Trans i18nKey="projects.title" components={{ 1: <span /> }}>
            Recent <span>Projects</span>
          </Trans>
        </h2>
        <p className="section-description">
          {t('projects.description')}
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
            {t('projects.viewMore')}
          </a>
        </div>
      </div>
    </section>
  );
};
