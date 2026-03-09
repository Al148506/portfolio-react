import { useTranslation, Trans } from "react-i18next";
import { InfoCard } from "../InfoCard/InfoCard";
import { infoData } from "../../data/experience.data";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about-me">
      <div className="about-container">

        {/* ── Top: eyebrow + title lado izquierdo, bio lado derecho ── */}
        <div className="about-top">
          <div className="about-top__left">
            <p className="about-eyebrow">
              <span className="about-eyebrow__dot" />
              {t('about.eyebrow')}
            </p>
            <h2 className="about-title">
              <Trans i18nKey="about.title" components={{ 1: <br />, 2: <span /> }}>
                Turning ideas<br />
                into <span>reliable systems</span>
              </Trans>
            </h2>
          </div>

          <div className="about-top__right">
            <p className="about-bio-text">
              <Trans i18nKey="about.bio" components={{ 1: <strong />, 2: <strong /> }}>
                I'm a <strong>full-stack developer</strong> with a backend mindset —
                focused on clean architecture, maintainable code, and systems that
                scale. I care about <strong>how</strong> software is built, not just
                that it works.
              </Trans>
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-icon">
                  <i className="bi bi-layers" />
                </span>
                <div>
                  <div className="about-stat-label">{t('about.stats.fullStack.label')}</div>
                  <div className="about-stat-sub">{t('about.stats.fullStack.sub')}</div>
                </div>
              </div>

              <div className="about-stat">
                <span className="about-stat-icon">
                  <i className="bi bi-patch-check" />
                </span>
                <div>
                  <div className="about-stat-label">{t('about.stats.codeQuality.label')}</div>
                  <div className="about-stat-sub">{t('about.stats.codeQuality.sub')}</div>
                </div>
              </div>

              <div className="about-stat">
                <span className="about-stat-icon">
                  <i className="bi bi-arrow-repeat" />
                </span>
                <div>
                  <div className="about-stat-label">{t('about.stats.improving.label')}</div>
                  <div className="about-stat-sub">{t('about.stats.improving.sub')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="about-divider" />

        {/* ── Info cards ── */}
        <div className="about-cards-grid">
          {infoData.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;