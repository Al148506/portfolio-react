import { useTranslation } from "react-i18next";
import "./TechCarousel.css";
import { technologies } from "../../data/technologies.data";

export const TechCarousel = () => {
  const { t } = useTranslation();
  return (
    <section className="tech-section" id="technologies">

      {/* Header */}
      <div className="tech-header">
        <p className="tech-eyebrow"> {t('tech.subtitle')}</p>
        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="tech-slider">
        <div className="tech-track">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div className="tech-item" key={index}>
              <div className="tech-icon-wrap">
                <img src={tech.icon} alt={tech.name} />
              </div>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="tech-count">
        <strong>{technologies.length}</strong> {t('tech.summarize')}
      </p>

    </section>
  );
};