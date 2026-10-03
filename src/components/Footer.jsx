import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-inner">

        <div className="footer-top">

          <div>
            <span className="footer-eyebrow">
              HAVE A PROJECT?
            </span>

            <h2>
              Let's create
              <br />
              something <em>meaningful.</em>
            </h2>
          </div>

          <Link
            to="/contact"
            className="footer-contact-btn"
          >
            Start a conversation
            <ArrowUpRight size={18} />
          </Link>

        </div>

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Faiz Alam
          </span>

          <div className="footer-links">

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
              Profile ↗
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;