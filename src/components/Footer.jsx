import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import "./Footer.css";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-top">

          <div className="footer-heading-wrap">
            <span className="footer-eyebrow">
              HAVE A PROJECT?
            </span>

            <h2>
              Let's create
              <br />
              something <em>meaningful.</em>
            </h2>
          </div>

          <MagneticButton>
            <Link
              to="/contact"
              className="footer-contact-btn"
            >
              <span>Start a conversation</span>

              <span className="footer-contact-icon">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </MagneticButton>

        </div>

        <div className="footer-bottom">

          <span className="footer-copyright">
            © {new Date().getFullYear()} Faiz Alam
          </span>

          <div className="footer-links">

            <Link to="/about">
              <span>About</span>
            </Link>

            <Link to="/projects">
              <span>Projects</span>
            </Link>

            <Link to="/contact">
              <span>Contact</span>
            </Link>

            <Link to="/links">
              <span>Social Media</span>
              <ArrowUpRight size={13} />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;