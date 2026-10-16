import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Cookie,
  ShieldCheck,
} from "lucide-react";
import SEO from "../../components/SEO";
import "./CookiePolicy.css";

const sections = [
  {
    id: "what-are-cookies",
    number: "01",
    title: "What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files that websites may store on your
          device when you visit them. They help websites remember certain
          information and can support functionality, security, and
          performance.
        </p>
        <p>
          Similar technologies, such as local storage or tracking pixels,
          may also be used for related purposes.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We May Use Cookies",
    content: (
      <>
        <p>
          The Faiz Alam website may use cookies or similar technologies
          for the following purposes, where applicable:
        </p>
        <ul>
          <li>
            <strong>Essential functionality:</strong> To support basic
            website features, navigation, and security.
          </li>
          <li>
            <strong>Preferences:</strong> To remember certain settings
            or choices, if this functionality is available.
          </li>
          <li>
            <strong>Analytics:</strong> To understand website traffic,
            page performance, and how visitors use the website, if
            analytics tools are enabled.
          </li>
          <li>
            <strong>Embedded content:</strong> To support content
            provided by third-party services, such as embedded videos.
          </li>
        </ul>
        <p>
          The technologies actually used may change as the website and
          its features evolve.
        </p>
      </>
    ),
  },
  {
    id: "types",
    number: "03",
    title: "Types of Cookies",
    content: (
      <>
        <p>
          Cookies generally fall into the following categories:
        </p>
        <ul>
          <li>
            <strong>Strictly necessary cookies:</strong> Support
            essential website operations and security.
          </li>
          <li>
            <strong>Preference cookies:</strong> Remember choices and
            settings.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help measure traffic
            and understand website usage.
          </li>
          <li>
            <strong>Third-party cookies:</strong> May be set by external
            services whose content or features appear on the website.
          </li>
        </ul>
        <p>
          Not every category is necessarily active on this website.
          Their use depends on the services and features enabled.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    number: "04",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Some pages may contain embedded videos, external links, or
          other features provided by third parties. These providers may
          use their own cookies or similar technologies when you interact
          with their content.
        </p>
        <p>
          Their data practices are governed by their own policies, not
          this Cookie Policy. We recommend reviewing the relevant
          provider's privacy and cookie policies.
        </p>
      </>
    ),
  },
  {
    id: "manage-cookies",
    number: "05",
    title: "How to Manage Cookies",
    content: (
      <>
        <p>
          Most web browsers allow you to view, block, or delete cookies
          through their settings. You can usually find these options in
          the browser's Privacy or Security section.
        </p>
        <ul>
          <li>Review the cookies stored by your browser.</li>
          <li>Delete existing cookies when needed.</li>
          <li>Block some or all cookies through browser settings.</li>
        </ul>
        <p>
          Blocking certain cookies may affect the availability or
          functionality of some website features. Browser controls do
          not necessarily prevent all forms of tracking.
        </p>
      </>
    ),
  },
  {
    id: "consent",
    number: "06",
    title: "Your Choices and Consent",
    content: (
      <>
        <p>
          Where required by applicable law, non-essential cookies should
          only be used after obtaining the necessary consent. You may
          withdraw or change your consent where a suitable preference
          mechanism is provided.
        </p>
        <p>
          This page describes our general approach; it does not itself
          provide a cookie preference or consent-management control.
        </p>
      </>
    ),
  },
  {
    id: "data",
    number: "07",
    title: "Personal Data and Privacy",
    content: (
      <>
        <p>
          Information collected through cookies may, depending on the
          technology used, include browser details, device information,
          approximate usage patterns, and interactions with website
          pages.
        </p>
        <p>
          For more information about how personal information may be
          handled, please read our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    number: "08",
    title: "Updates to This Policy",
    content: (
      <p>
        We may update this Cookie Policy when website functionality,
        third-party services, or applicable legal requirements change.
        Any revised version will be published on this page with an
        updated revision date.
      </p>
    ),
  },
  {
    id: "contact",
    number: "09",
    title: "Contact",
    content: (
      <>
        <p>
          If you have questions about this Cookie Policy, contact us
          using the email address below.
        </p>
        <a
          className="cp-email"
          href="mailto:justfaizalam@gmail.com?subject=Cookie%20Policy%20Question"
        >
          justfaizalam@gmail.com
          <ArrowUpRight size={16} />
        </a>
      </>
    ),
  },
];

export default function CookiePolicy() {
  return (
    <>
      <SEO
        title="Cookie Policy | Faiz Alam"
        description="Learn how the Faiz Alam website may use cookies and similar technologies, how third-party services work, and how to manage your browser cookie settings."
        path="/cookie-policy"
      />

      <main className="cp-page">
        <div className="cp-container">
          <Link to="/" className="cp-back">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <header className="cp-hero">
            <div className="cp-eyebrow">
              <Cookie size={15} />
              <span>WEBSITE POLICIES</span>
            </div>

            <h1>
              Cookie <span>Policy.</span>
            </h1>

            <p className="cp-intro">
              Transparency matters. Learn how cookies and similar
              technologies may be used when you visit this website
              and how you can manage your preferences.
            </p>

            <div className="cp-meta">
              <span>LAST UPDATED: OCTOBER 16, 2026</span>
              <span className="cp-meta-divider" />
              <span className="cp-status">
                <ShieldCheck size={14} />
                Transparency & Privacy
              </span>
            </div>
          </header>

          <div className="cp-layout">
            <aside className="cp-sidebar">
              <div className="cp-sidebar-inner">
                <span className="cp-sidebar-label">
                  ON THIS PAGE
                </span>

                <nav aria-label="Cookie Policy sections">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                    >
                      <span>{section.number}</span>
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="cp-content">
              <div className="cp-notice">
                <Cookie size={20} />
                <p>
                  <strong>A note about cookies</strong>
                  <span>
                    This policy explains possible cookie uses. The
                    actual cookies on the website depend on the
                    services and integrations currently enabled.
                  </span>
                </p>
              </div>

              {sections.map((section) => (
                <section
                  className="cp-section"
                  id={section.id}
                  key={section.id}
                >
                  <div className="cp-section-number">
                    {section.number}
                  </div>

                  <div className="cp-section-body">
                    <h2>{section.title}</h2>
                    <div className="cp-section-text">
                      {section.content}
                    </div>
                  </div>
                </section>
              ))}

              <div className="cp-footer-links">
                <span>RELATED POLICIES</span>
                <div>
                  <Link to="/privacy-policy">
                    Privacy Policy <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/terms-and-conditions">
                    Terms & Conditions <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/disclaimer">
                    Disclaimer <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/content-usage">
                    Copyright & Content Usage{" "}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <footer className="cp-bottom">
            <span>© {new Date().getFullYear()} FAIZ ALAM</span>
            <span>BUILT ON TRANSPARENCY.</span>
          </footer>
        </div>
      </main>
    </>
  );
}
