import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

        {/* 🔥 Hamburger Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔥 Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav d-flex align-items-lg-center gap-1">
            
            <li className="nav-item">
              <a className="nav-link" href="#introduction">
                <span className="nav-icon">
                  <i className="fas fa-user"></i>
                </span>
                <span className="nav-label">Introduction</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                <span className="nav-icon">
                  <i className="fas fa-id-card"></i>
                </span>
                <span className="nav-label">About Me</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <span className="nav-icon">
                  <i className="fas fa-laptop-code"></i>
                </span>
                <span className="nav-label">Projects</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <span className="nav-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="nav-label">Contact</span>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;