import { useTranslation, Trans } from "react-i18next";
import Foto from "../../assets/Foto_CV.png";
import Stack from "../../assets/stack.png";
import "./Hero.css";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="introduction">
      <div className="container hero-wrapper">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <h2 className="hero-greeting">
            <Trans i18nKey="hero.greeting" components={{ 1: <span /> }}>
              Hi, I'm <span>Alejandro Castaneda</span>
            </Trans>
          </h2>

          <h1 className="hero-title">
            <Trans i18nKey="hero.title" components={{ 1: <br /> }}>
              Full-Stack Web
              <br />
              Developer
            </Trans>
          </h1>

          <p className="hero-description">
            {t('hero.description')}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary btn-modern">
              {t('hero.viewProjects')}
            </a>
            <a href="#contact" className="btn btn-outline-light btn-modern">
              {t('hero.contactMe')}
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">
                1<span>+</span>
              </div>
              <div className="hero-stat-label">{t('hero.yearsExp')}</div>
            </div>
            <div>
              <div className="hero-stat-number">
                15<span>+</span>
              </div>
              <div className="hero-stat-label">{t('hero.projects')}</div>
            </div>
            <div>
              <div className="hero-stat-number">
                10<span>+</span>
              </div>
              <div className="hero-stat-label">{t('hero.technologies')}</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-visual">
          <img
            className="hero-profile"
            src={Foto}
            alt="Profile photo of Alejandro Castaneda"
          />

          <img
            className="hero-stack"
            src={Stack}
            alt="Development workspace illustration"
          />

          <div className="hero-available">
            <span className="hero-available-dot" />
            {t('hero.available')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
