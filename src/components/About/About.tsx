import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";
import { infoData } from "../../data/experience.data";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* ── Header ── */}
        <div className="about-header">
          <p className="about-eyebrow">
            <i className="bi bi-person-circle me-2" />
            Who I am
          </p>
          <h2 className="about-title">
            <i className="bi bi-lightbulb"> </i>
            Turning ideas
            <br />
            into <span>reliable systems</span>
          </h2>
        </div>

        {/* ── Bio + highlights ── */}
        <div className="about-bio">
          <p className="about-bio-text">
            I'm a <strong>full-stack developer</strong> with a backend mindset —
            focused on clean architecture, maintainable code, and systems that
            scale. I care about <strong>how</strong> software is built, not just
            that it works.
          </p>

          <div className="about-divider-v" />

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-icon">
                <i className="bi bi-layers" />
              </span>
              <div>
                <div className="about-stat-label">Full-Stack</div>
                <div className="about-stat-sub">From APIs to polished UIs</div>
              </div>
            </div>

            <div className="about-stat">
              <span className="about-stat-icon">
                <i className="bi bi-patch-check" />
              </span>
              <div>
                <div className="about-stat-label">Code Quality</div>
                <div className="about-stat-sub">
                  Readable, tested, maintainable
                </div>
              </div>
            </div>

            <div className="about-stat">
              <span className="about-stat-icon">
                <i className="bi bi-arrow-repeat" />
              </span>
              <div>
                <div className="about-stat-label">Always Improving</div>
                <div className="about-stat-sub">
                  Better decisions every iteration
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {infoData.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
