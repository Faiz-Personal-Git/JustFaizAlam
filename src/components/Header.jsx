import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MagneticButton from "./MagneticButton";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Work", path: "/projects" },
    { label: "Videos", path: "/videos" },
    { label: "Quiz", path: "/quiz" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
    { label: "Social Media", path: "/links" },
  ];

  return (
    <header
      className={`floating-header ${scrolled ? "is-scrolled" : ""
        } ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="floating-header-inner">

        {/* Brand */}

        <Link
          to="/"
          className="header-brand"
          onClick={closeMenu}
          aria-label="Faiz Alam home"
        >
          <span className="header-avatar">
            <img
              src="/Images/dp.png"
              alt="Faiz Alam"
            />
          </span>

          <span className="header-brand-info">
            <strong>Faiz Alam</strong>
            <small>Engineer · Creator</small>
          </span>
        </Link>


        {/* Desktop Nav */}

        <nav className="header-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `header-nav-link ${isActive ? "active" : ""
                }`
              }
            >
              <span className="header-nav-text">
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>


        {/* Desktop CTA */}
        <MagneticButton>
          <Link
            to="/contact"
            className="header-talk"
          >
            <span>Let's talk</span>

            <span className="header-talk-icon">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </MagneticButton>

        {/* Mobile Button */}

        <button
          className={`header-menu-button ${menuOpen ? "is-open" : ""
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          type="button"
        >
          <span className="menu-icon menu-icon-menu">
            <Menu size={21} />
          </span>

          <span className="menu-icon menu-icon-close">
            <X size={21} />
          </span>
        </button>

      </div>


      {/* Mobile Menu */}

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""
          }`}
      >
        <div className="mobile-menu-inner">

          <span className="mobile-menu-label">
            NAVIGATION
          </span>

          <nav>
            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? "active" : ""
                  }`
                }
                style={{
                  "--mobile-index": index,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {item.label}
                </strong>

                <ArrowUpRight size={19} />
              </NavLink>
            ))}
          </nav>

        </div>
      </div>

    </header>
  );
}

export default Header;