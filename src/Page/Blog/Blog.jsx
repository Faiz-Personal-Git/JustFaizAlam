import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { articles } from "../../data/articles";
import "./Blog.css";

function Blog() {
  return (
    <main className="blog-page">
      <SEO
        title="Blog & Articles | Faiz Alam"
        description="Read articles by Faiz Alam covering software development, React, technology, YouTube, documentary research and creative projects."
        path="/blog"
      />

      {/* =========================
          HERO
      ========================== */}
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-top">
            <span className="blog-eyebrow">05 / JOURNAL</span>

            <span className="blog-hero-location">
              IDEAS · STORIES · BUILDING
            </span>
          </div>

          <div className="blog-hero-content">
            <h1>
              Thoughts,
              <br />
              <em>experiments</em>
              <br />
              &amp; stories.
            </h1>

            <div className="blog-hero-description">
              <p>
                A collection of things I learn, build, research and discover
                along the way.
              </p>

              <span className="blog-scroll-label">
                SCROLL TO EXPLORE ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ARTICLES
      ========================== */}
      <section className="blog-list-section">
        <div className="blog-container">

          <div className="blog-section-header">
            <div>
              <span className="blog-section-number">01</span>
              <h2>
                Latest <em>articles.</em>
              </h2>
            </div>

            <p>
              Notes on technology, creativity, development,
              storytelling and the things I'm currently exploring.
            </p>
          </div>

          <div className="blog-grid">
            {articles.map((article, index) => (
              <article
                className={`blog-card ${
                  index === 0 ? "blog-card-featured" : ""
                }`}
                key={article.id}
              >
                {/* IMAGE */}
                <Link
                  to={`/blog/${article.slug}`}
                  className="blog-card-image"
                >
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="blog-card-image-placeholder">
                      <span>{article.category}</span>
                    </div>
                  )}

                  <div className="blog-card-image-overlay" />

                  <div className="blog-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="blog-card-arrow">↗</div>
                </Link>

                {/* CONTENT */}
                <div className="blog-card-content">

                  <div className="blog-card-meta">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3>
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p>{article.excerpt}</p>

                  <div className="blog-card-footer">
                    <span>{article.date}</span>

                    <Link
                      to={`/blog/${article.slug}`}
                      className="blog-read-link"
                    >
                      READ ARTICLE
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* EMPTY STATE */}
          {articles.length === 0 && (
            <div className="blog-empty">
              <span>COMING SOON</span>
              <h3>New articles are on the way.</h3>
              <p>
                I'm currently working on new stories, tutorials and
                behind-the-scenes articles.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Blog;