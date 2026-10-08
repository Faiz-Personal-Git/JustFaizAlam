import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@JustFaizAlam",
      type: "youtube",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/justfaizalam/",
      type: "instagram",
    },
    {
      name: "X",
      url: "https://x.com/JustFaizAlam",
      type: "x",
    },
  ];

  const SocialIcon = ({ type }) => {
    if (type === "youtube") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.5 15.7V8.3l6.4 3.7-6.4 3.7Z"
          />
        </svg>
      );
    }

    if (type === "instagram") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          <circle
            cx="17.5"
            cy="6.5"
            r="1.2"
            fill="currentColor"
          />
        </svg>
      );
    }

    if (type === "x") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M18.9 2H22l-6.8 7.8L23.2 22h-6.2l-4.8-6.2L6.8 22H3.7l7.2-8.3L3.1 2h6.3l4.3 5.7L18.9 2Zm-1.1 17.9h1.7L8.6 4H6.8l11 15.9Z"
          />
        </svg>
      );
    }

    return null;
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* =====================================================
            INFORMATION
        ===================================================== */}

        <section className="footer-information">

          {/* ABOUT */}

          <div className="footer-about">

            <span className="footer-column-label">
              ABOUT
            </span>

            <div className="footer-about-identity">

              <div className="footer-about-image">
                <img
                  src="/Images/dp.png"
                  alt="Faiz Alam"
                />
              </div>

              <h3>
                Faiz Alam
              </h3>

            </div>

            <p>
              Software engineer and creator focused on building
              useful digital products, websites and stories worth
              understanding.
            </p>

            <span className="footer-role">
              SOFTWARE ENGINEER · CREATOR
            </span>

          </div>


          {/* WHAT I DO */}

          <div className="footer-column">

            <span className="footer-column-label">
              WHAT I DO
            </span>

            <Link to="/projects">
              Web Development
            </Link>

            <Link to="/projects">
              React & .NET
            </Link>

            <Link to="/projects">
              API Development
            </Link>

            <Link to="/projects">
              Full-Stack Development
            </Link>

            <Link to="/projects">
              Digital Products
            </Link>

          </div>


          {/* EXPLORE */}

          <div className="footer-column">

            <span className="footer-column-label">
              EXPLORE
            </span>

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/links">
              Social Media
              <span className="footer-small-arrow">↗</span>
            </Link>

          </div>


          {/* CONNECT */}

          <div className="footer-column">

            <span className="footer-column-label">
              CONNECT
            </span>

            {socialLinks.map((social) => (
              <a
                key={social.type}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <span className="footer-social-icon">
                  <SocialIcon type={social.type} />
                </span>

                <span>{social.name}</span>

                <span className="footer-small-arrow">
                  ↗
                </span>
              </a>
            ))}

            <Link to="/links">
              All social links
              <span className="footer-small-arrow">↗</span>
            </Link>

          </div>

        </section>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <section className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Faiz Alam
          </span>

          <span>
            Designed & built by Faiz Alam
          </span>

          <span>
            All rights reserved.
          </span>

        </section>

      </div>
    </footer>
  );
}

export default Footer;