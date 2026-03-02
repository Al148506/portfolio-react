import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`custom-navbar fixed-top${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo (optional - add your name or logo here) */}
        <a className="navbar-brand" href="#introduction">
          <span className="brand-dot" />
          Portfolio
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links */}
        <ul className={`navbar-nav${menuOpen ? " nav-open" : ""}`}>
          {[
            { href: "#introduction", icon: "fa-user", label: "Introduction" },
            { href: "#about-me", icon: "fa-id-card", label: "About Me" },
            { href: "#projects", icon: "fa-laptop-code", label: "Projects" },
            { href: "#contact", icon: "fa-envelope", label: "Contact" },
          ].map(({ href, icon, label }) => (
            <li className="nav-item" key={href}>
              <a className="nav-link" href={href} onClick={handleLinkClick}>
                <span className="nav-icon">
                  <i className={`fas ${icon}`} />
                </span>
                <span className="nav-label">{label}</span>
              </a>
            </li>
          ))}

          <li className="nav-divider" aria-hidden="true" />

          {/* Language dropdown */}
          <li className="nav-item dropdown lang-item">
            <button
              className="nav-link lang-toggle"
              data-bs-toggle="dropdown"
              aria-label="Language selector"
              aria-haspopup="true"
            >
              <span className="globe-icon">🌐</span>
              <span className="lang-caret">
                <i className="fas fa-chevron-down" />
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end lang-dropdown">
              <li>
                <button className="dropdown-item" onClick={handleLinkClick}>
                  <span className="lang-flag">🇺🇸</span> English
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLinkClick}>
                  <span className="lang-flag">🇪🇸</span> Español
                </button>
              </li>
            </ul>
          </li>
        </ul>

        {/* Backdrop for mobile menu */}
        {menuOpen && (
          <div
            className="nav-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
