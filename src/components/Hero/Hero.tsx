import Foto from "../../assets/Foto_CV.png"
import Stack from "../../assets/stack.png"
import "./Hero.css"
function Hero() {
  return (
    
    <section className="section hero-principal " style={{minHeight: "100vh"}}>
        <div className="hero-imagen-container">
          <img
            className="hero-imagen-desarrollador"
            src= {Foto}
            alt="Profile photo of Alejandro Castaneda Garcia"
          />
        </div>
      <div className="container text-center">
        <h1 className="display-4 fw-bold">
          Hi, I'm <span className="highlight">Alejandro Castaneda</span>
        </h1>

        <p className="lead mt-3">
Full-Stack Web Developer specializing in ASP.NET & modern web technologies
        </p>

        <div className="mt-4">
          <a href="#projects" className="btn btn-primary btn-modern me-3">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline-light btn-modern">
            Contact Me
          </a>
        </div>
      </div>

      
      <div className="hero-inferior">
        <img
          className="hero-inferior-imagen img-fluid"
          src={Stack}
          alt="Development workspace illustration"
        />
      </div>
      
    </section>
  )
}

export default Hero