import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">

      <div className="header-inner">

        {/* Logo */}
        <Link
          to="/"
          className="site-logo"
          onClick={closeMenu}
        >
          <span className="logo-mark">FA</span>

          <span className="logo-text">
            Faiz Alam
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="header-cta"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="mobile-nav">

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <Link
            to="/profile"
            onClick={closeMenu}
            className="mobile-profile-link"
          >
            My Profile ↗
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Header;