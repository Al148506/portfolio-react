import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-1">
          <li className="nav-item">
            <a className="nav-link" href="#introduction" data-i18n="nav.introduction">
              <span className="nav-icon">
                <i className="fas fa-user"></i>
              </span>
              <span className="nav-label">Introduction</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about-me" data-i18n="nav.about">
              <span className="nav-icon">
                <i className="fas fa-id-card"></i>
              </span>
              <span className="nav-label">About Me</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" data-i18n="nav.projects">
              <span className="nav-icon">
                <i className="fas fa-laptop-code"></i>
              </span>
              <span className="nav-label">Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" data-i18n="nav.contact">
              <span className="nav-icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="nav-label">Contact</span>
            </a>
          </li>

          <li className="nav-divider" aria-hidden="true"></li>

          <li className="nav-item dropdown">
            <a
              className="nav-link lang-toggle dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-label="Language selector"
            >
              <span className="globe-icon">🌐</span>
              <span className="lang-caret">
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end lang-dropdown">
              <li>
                <button className="dropdown-item">
                  <span className="lang-flag">EN</span> English
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  <span className="lang-flag">ES</span> Español
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;