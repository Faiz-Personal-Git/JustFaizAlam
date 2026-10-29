
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
} from "lucide-react";

import resources from "../../data/resources";
import SEO from "../../components/SEO";

import "./Resources.css";
import "./ResourceDetail.css";

function ResourceDetail() {
  const { slug } = useParams();

  const resource = resources.find(
    (item) => item.slug === slug
  );

  // Resource not found
  if (!resource) {
    return (
      <>
        <SEO
          title="Resource Not Found | Faiz Alam"
          description="The requested resource could not be found. Explore tutorials, guides, tools and free resources in the Faiz Alam resource library."
          path="/resources"
        />

        <main className="resource-detail-page">
          <div className="resources-shell resource-not-found">
            <span className="resources-kicker">
              RESOURCE LIBRARY
            </span>

            <h1>Resource not found.</h1>

            <p>
              This resource may have moved or the URL may be incorrect.
            </p>

            <Link
              to="/resources"
              className="resources-button resources-button-primary"
            >
              <ArrowLeft size={16} />
              Back to resources
            </Link>
          </div>
        </main>
      </>
    );
  }

  // Dynamic SEO metadata
  const seoTitle = `${resource.title} | Faiz Alam`;

  const seoDescription = (
    resource.description ||
    resource.intro ||
    `Explore ${resource.title} in the Faiz Alam resource library.`
  )
    .replace(/\s+/g, " ")
    .slice(0, 160);

  // Related resources
  const relatedResources = resources
    .filter(
      (item) =>
        item.slug !== resource.slug &&
        item.category === resource.category
    )
    .slice(0, 2);

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={`/resources/${resource.slug}`}
      />

      <main className="resource-detail-page">
        <div className="resources-shell">

          {/* Resource Article */}
          <article className="resource-article">
            <header className="resource-article-header">
              <span className="resources-kicker">
                {resource.category}
              </span>

              <h1>{resource.title}</h1>

              <p className="resource-article-description">
                {resource.description}
              </p>

              <div className="resource-article-meta">
                <span>
                  <BookOpen size={15} />
                  {resource.type}
                </span>

                <span>
                  <Clock3 size={15} />
                  {resource.readTime}
                </span>

                <span>
                  <CalendarDays size={15} />
                  {resource.date}
                </span>
              </div>
            </header>

            <div className="resource-article-body">
              <p className="resource-article-intro">
                {resource.intro}
              </p>

              {resource.sections?.map((section, index) => (
                <section
                  className="resource-article-section"
                  key={section.heading}
                >
                  <span className="resource-article-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2>{section.heading}</h2>
                    <p>{section.body}</p>
                  </div>
                </section>
              ))}

              {resource.takeaway && (
                <aside className="resource-takeaway">
                  <span className="resources-kicker">
                    KEY TAKEAWAY
                  </span>

                  <p>{resource.takeaway}</p>
                </aside>
              )}

              <p className="resource-disclosure-note">
                Some resources may include affiliate links in the
                future. Any affiliate relationship will be disclosed
                clearly alongside relevant recommendations.{" "}

                <Link to="/affiliate-disclosure">
                  Read our affiliate disclosure
                </Link>
                .
              </p>
            </div>
          </article>

          {/* Related Resources */}
          {relatedResources.length > 0 && (
            <section className="resource-related">
              <div className="resource-related-heading">
                <div>
                  <span className="resources-kicker">
                    CONTINUE LEARNING
                  </span>

                  <h2>Related resources</h2>
                </div>

                <Link to="/resources">
                  View all <ArrowRight size={15} />
                </Link>
              </div>

              <div className="resource-related-grid">
                {relatedResources.map((item) => (
                  <Link
                    to={`/resources/${item.slug}`}
                    className="resource-related-card"
                    key={item.slug}
                  >
                    <span>{item.category}</span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <ArrowRight size={17} />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default ResourceDetail;
