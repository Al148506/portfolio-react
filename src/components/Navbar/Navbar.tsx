import { useTranslation } from "react-i18next";
import "./Navbar.css";

function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

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
                <span className="nav-label">{t('navbar.introduction')}</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                <span className="nav-icon">
                  <i className="fas fa-id-card"></i>
                </span>
                <span className="nav-label">{t('navbar.aboutMe')}</span>
              </a>
            </li>

               <li className="nav-item">
              <a className="nav-link" href="#technologies">
                <span className="nav-icon">
                  <i className="fas fa-id-card"></i>
                </span>
                <span className="nav-label">{t('navbar.technologies')}</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <span className="nav-icon">
                  <i className="fas fa-laptop-code"></i>
                </span>
                <span className="nav-label">{t('navbar.projects')}</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <span className="nav-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="nav-label">{t('navbar.contact')}</span>
              </a>
            </li>

          </ul>

          {/* Language Switch */}
          <button 
            className="btn btn-outline-light btn-sm ms-lg-3 mt-3 mt-lg-0" 
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {i18n.language.startsWith('en') ? 'ES' : 'EN'}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;