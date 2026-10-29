
import { Link } from "react-router-dom";
import "./Footer.css";

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

function SocialIcon({ type }) {
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
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
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
}

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <section className="footer-information">
          {/* ABOUT */}

          <div className="footer-about">
            <span className="footer-column-label">ABOUT</span>

            <Link
              to="/"
              className="footer-about-identity"
              aria-label="Faiz Alam home"
            >
              <span className="footer-about-image">
                <img src="/Images/dp.png" alt="Faiz Alam" />
              </span>

              <span className="footer-about-name">
                <strong>Faiz Alam</strong>
                <small>Software Engineer · Creator</small>
              </span>
            </Link>

            <p>
              Software engineer and creator focused on building
              useful digital products, websites and stories worth
              understanding.
            </p>

            <span className="footer-role">
              SOFTWARE ENGINEER · CREATOR
            </span>
          </div>

          {/* LEGAL & POLICIES */}

          <nav
            className="footer-column"
            aria-label="Legal and policies"
          >
            <span className="footer-column-label">
              LEGAL &amp; POLICIES
            </span>

            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/content-usage">
              Copyright &amp; Content Usage
            </Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </nav>

          {/* EXPLORE */}

          <nav className="footer-column" aria-label="Explore">
            <span className="footer-column-label">EXPLORE</span>

            <Link to="/resources">Resources</Link>
            <Link to="/store">Digital Store</Link>
            <Link to="/services/web-development">
              Web Development
            </Link>
            <Link to="/tools">AI Tools</Link>
            <Link to="/social">Post Timeline</Link>
          </nav>

          {/* CONNECT */}

          <div className="footer-column" aria-label="Connect">
            <span className="footer-column-label">CONNECT</span>

            {socialLinks.map((social) => (
              <a
                key={social.type}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={`Visit Faiz Alam on ${social.name}`}
              >
                <span className="footer-social-icon">
                  <SocialIcon type={social.type} />
                </span>

                <span>{social.name}</span>

                <span className="footer-small-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}

            <Link to="/links" className="footer-social-link">
              <span>All social links</span>

              <span className="footer-small-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </section>

        {/* COPYRIGHT */}

        <section className="footer-bottom">
          <span>© {currentYear} Faiz Alam</span>

          <span className="footer-credit">
            Designed &amp; built by Faiz Alam
          </span>

          <span>All rights reserved.</span>

        </section>
      </div>
    </footer>
  );
}

export default Footer;
