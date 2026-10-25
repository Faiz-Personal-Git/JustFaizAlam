import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";

import resources from "../../data/resources";
import "./ResourceCategory.css";

const categoryConfig = {
  tutorials: {
    eyebrow: "LEARN & BUILD",
    title: "Tutorials & Guides",
    description:
      "Practical Hinglish guides for developers and content creators.",
    categories: ["Web Development", "Content Creation", "SEO & Growth"],
  },
  reviews: {
    eyebrow: "TOOLS & INSIGHTS",
    title: "Tools & Reviews",
    description:
      "Explore software, compare useful tools and make informed decisions.",
    categories: ["Tools & Reviews"],
  },
  freebies: {
    eyebrow: "FREE RESOURCE LIBRARY",
    title: "Freebies & Downloads",
    description:
      "Useful templates, checklists and practical resources to download.",
    categories: ["Free Resources"],
  },
  "recommended-tools": {
    eyebrow: "THE TOOLKIT",
    title: "Recommended Tools",
    description:
      "Discover tools for building websites, creating content and growing online.",
    categories: ["Tools & Reviews", "Web Development", "Content Creation"],
  },
};

function ResourceCategory({ categorySlug }) {
  const config = categoryConfig[categorySlug] || categoryConfig.tutorials;

  const categoryResources = resources.filter((resource) =>
    config.categories.includes(resource.category)
  );

  return (
    <main className="resource-category-page">
      <section className="rc-hero">
        <div className="rc-hero-grid" aria-hidden="true" />

        <div className="rc-container rc-hero-inner">
          <Link to="/resources" className="rc-back-link">
            <ArrowLeft size={15} />
            All Resources
          </Link>

          <div className="rc-eyebrow">
            <Sparkles size={14} />
            {config.eyebrow}
          </div>

          <h1>{config.title}</h1>

          <p className="rc-hero-description">{config.description}</p>

          <div className="rc-hero-bottom">
            <span>
              <BookOpen size={15} />
              {String(categoryResources.length).padStart(2, "0")} RESOURCES
            </span>

            <a href="#category-library" className="rc-browse-link">
              Browse library
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="rc-library" id="category-library">
        <div className="rc-container">
          <div className="rc-library-heading">
            <div>
              <span className="rc-section-label">CURATED FOR YOU</span>
              <h2>Explore the collection.</h2>
            </div>

            <span className="rc-library-count">
              {categoryResources.length}{" "}
              {categoryResources.length === 1 ? "ITEM" : "ITEMS"}
            </span>
          </div>

          {categoryResources.length > 0 ? (
            <div className="rc-grid">
              {categoryResources.map((resource, index) => (
                <article className="rc-card" key={resource.slug}>
                  <div className="rc-card-top">
                    <span className="rc-type">
                      <FileText size={14} />
                      {resource.type}
                    </span>

                    <span className="rc-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="rc-card-body">
                    <span className="rc-card-category">
                      {resource.category}
                    </span>

                    <h3>{resource.title}</h3>

                    <p>{resource.description}</p>

                    {resource.tags?.length > 0 && (
                      <div className="rc-tags">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rc-card-meta">
                    <span>
                      <Clock3 size={14} />
                      {resource.readTime}
                    </span>
                  </div>

                  <div className="rc-card-footer">
                    {resource.downloadUrl ? (
                      <a
                        href={resource.downloadUrl}
                        className="rc-card-link"
                        download
                      >
                        <Download size={16} />
                        {resource.downloadLabel || "Download Resource"}
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <Link
                        to={`/resources/${resource.slug}`}
                        className="rc-card-link"
                      >
                        Read Guide
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rc-empty">
              <BookOpen size={28} />
              <h3>More resources are on the way.</h3>
              <p>We are preparing more resources for this collection.</p>
              <Link to="/resources">Explore all resources</Link>
            </div>
          )}
        </div>
      </section>

      <section className="rc-bottom">
        <div className="rc-container rc-bottom-inner">
          <div>
            <span className="rc-section-label">KEEP EXPLORING</span>
            <h2>Find your next useful resource.</h2>
          </div>

          <Link to="/resources" className="rc-bottom-button">
            All Resources
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ResourceCategory;