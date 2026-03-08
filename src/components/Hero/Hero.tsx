import Foto from "../../assets/Foto_CV.png";
import Stack from "../../assets/stack.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="introduction">
      <div className="container hero-wrapper">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <h2 className="hero-greeting">
            Hi, I'm <span>Alejandro Castaneda</span>
          </h2>

          <h1 className="hero-title">
            Full-Stack Web
            <br />
            Developer
          </h1>

          <p className="hero-description">
            Specializing in ASP.NET &amp; modern web technologies — crafting
            scalable, clean, and high-performance applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary btn-modern">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline-light btn-modern">
              Contact Me
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats">
            <div>
              <div className="hero-stat-number">
                1<span>+</span>
              </div>
              <div className="hero-stat-label">Years exp.</div>
            </div>
            <div>
              <div className="hero-stat-number">
                15<span>+</span>
              </div>
              <div className="hero-stat-label">Projects</div>
            </div>
            <div>
              <div className="hero-stat-number">
                10<span>+</span>
              </div>
              <div className="hero-stat-label">Technologies</div>
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
            Available for hire
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
