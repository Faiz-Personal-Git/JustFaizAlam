
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import SEO from "./SEO";
import "./LegalPage.css";

function LegalPage({ title, subtitle, updated, sections, path }) {
  return (
    <div className="legal-page">
      <SEO
        title={`${title} | Faiz Alam`}
        description={subtitle}
        path={path}
      />

      <div className="legal-container">
        <div className="legal-topline">
          <span className="legal-eyebrow">
            <ShieldCheck size={15} />
            FAIZ ALAM · WEBSITE POLICIES
          </span>

          <span className="legal-updated">
            LAST UPDATED: {updated}
          </span>
        </div>

        <header className="legal-header">
          <Link to="/" className="legal-back">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>

        <div className="legal-layout">
          <aside className="legal-sidebar">
            <span className="legal-sidebar-label">
              ON THIS PAGE
            </span>

            {sections.map((section, index) => (
              <a
                href={`#legal-section-${index + 1}`}
                key={section.heading}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </a>
            ))}
          </aside>

          <article className="legal-content">
            {sections.map((section, index) => (
              <section
                id={`legal-section-${index + 1}`}
                className="legal-section"
                key={section.heading}
              >
                <span className="legal-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{section.heading}</h2>

                {section.paragraphs?.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {section.items && (
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="legal-contact">
              <div>
                <span>HAVE A QUESTION?</span>
                <h3>Let's talk.</h3>
                <p>
                  If you have any questions about this policy,
                  feel free to get in touch.
                </p>
              </div>

              <a href="mailto:justfaizalam@gmail.com">
                Contact me
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="legal-bottom">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
              <Link to="/">Home</Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
