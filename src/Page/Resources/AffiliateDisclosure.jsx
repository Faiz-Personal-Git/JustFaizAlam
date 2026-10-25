
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import "./Resources.css";
import "./ResourceDetail.css";

function AffiliateDisclosure() {
  return (
    <main className="resource-detail-page">
      <div className="resources-shell">
        <Link
          to="/resources"
          className="resource-breadcrumb"
          style={{ textDecoration: "none" }}
        >
          <ArrowLeft size={14} />
          Back to Resources
        </Link>

        <article className="resource-article">
          <header className="resource-article-header">
            <span className="resources-kicker">
              TRANSPARENCY & TRUST
            </span>

            <h1>Affiliate Disclosure</h1>

            <p className="resource-article-description">
              How affiliate links and commercial recommendations
              may work on JustFaizAlam.
            </p>
          </header>

          <div className="resource-article-body">
            <ShieldCheck
              size={34}
              color="#d5b47a"
              style={{ marginBottom: 12 }}
            />

            <h2>Our approach</h2>
            <p>
              JustFaizAlam may use affiliate links in some articles,
              reviews and recommended-tools pages. If you purchase
              something through an approved affiliate link, we may
              receive a commission at no additional cost to you,
              subject to the relevant program's terms.
            </p>

            <h2>How recommendations are made</h2>
            <p>
              We aim to provide useful information so readers can
              evaluate tools and services based on their needs.
              A commercial relationship should not be treated as
              a guarantee that a product is the right choice for
              every reader.
            </p>

            <h2>How we disclose links</h2>
            <p>
              Where affiliate links are used, we will provide a
              clear disclosure near the relevant recommendation
              or link, as appropriate. We will not label an ordinary
              link as an affiliate link when it is not one.
            </p>

            <h2>Third-party terms</h2>
            <p>
              Prices, availability, commission rates and program
              conditions can change. Always check the relevant
              provider's website for current details before making
              a purchase.
            </p>

            <p>
              Questions about this disclosure can be sent through
              the existing <Link to="/contact">Contact page</Link>.
            </p>

            <p className="resource-disclosure-note">
              This page is a starting disclosure template. Before
              publishing affiliate links, review the specific
              disclosure and wording requirements of each program
              you join and the rules applicable to your audience.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default AffiliateDisclosure;
