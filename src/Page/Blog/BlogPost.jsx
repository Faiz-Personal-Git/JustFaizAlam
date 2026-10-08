import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SEO from "../../components/SEO";
import { articles } from "../../data/articles";
import "./BlogPost.css";

function BlogPost() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="blog-post-page">
        <section className="blog-post-not-found">
          <div className="blog-post-container">
            <span>404 / ARTICLE NOT FOUND</span>

            <h1>
              This article
              <br />
              doesn't <em>exist.</em>
            </h1>

            <p>
              The article you're looking for may have been moved,
              deleted or never existed.
            </p>

            <Link to="/blog" className="blog-post-back-button">
              ← BACK TO BLOG
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  const relatedVideoPath = article.relatedVideoId
    ? `/videos/${article.relatedVideoId}`
    : null;

  const relatedQuizPath = article.relatedVideoId
    ? `/quiz/video/${article.relatedVideoId}`
    : null;

  const publishedDate =
    article.publishedAt || "2026-10-08T00:00:00+05:30";

  const updatedDate =
    article.updatedAt || publishedDate;

  const articleImage = article.image
    ? `https://justfaizalam.vercel.app${article.image}`
    : undefined;

  return (
    <main className="blog-post-page">

      <SEO
        title={
          article.seoTitle ||
          `${article.title} | Faiz Alam`
        }
        description={
          article.seoDescription ||
          article.excerpt
        }
        path={`/blog/${article.slug}`}
        image={articleImage}
      />

      {/* =====================================================
          ARTICLE HERO
      ====================================================== */}

      <section className="blog-post-hero">
        <div className="blog-post-container">

          <Link
            to="/blog"
            className="blog-post-back"
          >
            <span>←</span>
            BACK TO JOURNAL
          </Link>

          <div className="blog-post-category">
            <span>{article.category}</span>
            <i />
            <span>{article.readTime}</span>
          </div>

          <h1>{article.title}</h1>

          <p className="blog-post-excerpt">
            {article.excerpt}
          </p>

          <div className="blog-post-meta">

            <div className="blog-post-author">
              <div className="author-card-avatar">
                <img
                  src="/Images/dp.png"
                  alt="Faiz Alam"
                />
              </div>

              <div>
                <span>WRITTEN BY</span>
                <strong>
                  {article.author || "Faiz Alam"}
                </strong>
              </div>
            </div>

            <div className="blog-post-date">
              <span>PUBLISHED</span>
              <strong>{article.date}</strong>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}

      <section className="blog-post-featured">
        <div className="blog-post-container">

          <div className="blog-post-featured-image">

            {article.image ? (
              <img
                src={article.image}
                alt={article.title}
              />
            ) : (
              <div className="blog-post-image-placeholder">
                <span>{article.category}</span>
              </div>
            )}

            <div className="blog-post-featured-overlay" />

            <span className="blog-post-featured-label">
              FAIZ ALAM / JOURNAL
            </span>

          </div>

        </div>
      </section>


      {/* =====================================================
          ARTICLE CONTENT
      ====================================================== */}

      <section className="blog-post-content-section">
        <div className="blog-post-container">

          <div className="blog-post-layout">

            {/* SIDEBAR */}

            <aside className="blog-post-sidebar">

              <div className="blog-post-sidebar-block">
                <span className="sidebar-label">
                  ARTICLE
                </span>

                <div className="sidebar-number">
                  {String(
                    articles.findIndex((item) => item.slug === article.slug) + 1
                  ).padStart(2, "0")}
                </div>
              </div>

              <div className="blog-post-sidebar-block">
                <span className="sidebar-label">
                  CATEGORY
                </span>

                <p>{article.category}</p>
              </div>

              <div className="blog-post-sidebar-block">
                <span className="sidebar-label">
                  READING TIME
                </span>

                <p>{article.readTime}</p>
              </div>

              {article.tags?.length > 0 && (
                <div className="blog-post-sidebar-block">
                  <span className="sidebar-label">
                    TOPICS
                  </span>

                  <div className="blog-post-tags">
                    {article.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </aside>


            {/* MAIN ARTICLE */}

            <article className="blog-post-article">

              {article.content?.map((block, index) => {

                if (block.type === "heading") {
                  return (
                    <h2 key={index}>
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote key={index}>
                      <span>“</span>
                      <p>{block.text}</p>
                    </blockquote>
                  );
                }

                if (block.type === "image") {
                  return (
                    <figure key={index}>
                      <img
                        src={block.src}
                        alt={block.alt || ""}
                        loading="lazy"
                      />

                      {block.caption && (
                        <figcaption>
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return (
                  <p key={index}>
                    {block.text}
                  </p>
                );
              })}

              {/* ARTICLE FOOTER */}

              <div className="blog-post-article-footer">

                <div className="article-footer-line" />

                <div className="article-footer-content">

                  <div>
                    <span>LAST UPDATED</span>
                    <strong>
                      {article.updatedDate || article.date}
                    </strong>
                  </div>

                  <Link to="/blog">
                    ← ALL ARTICLES
                  </Link>

                </div>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          AUTHOR
      ====================================================== */}

      <section className="blog-post-author-section">
        <div className="blog-post-container">

          <div className="blog-post-author-card">

            <div className="author-card-avatar">
              <img
                src="/Images/dp.png"
                alt="Faiz Alam"
              />
            </div>

            <div className="author-card-content">

              <span className="sidebar-label">
                ABOUT THE AUTHOR
              </span>

              <h3>Faiz Alam</h3>

              <p>
                Software engineer, YouTuber, creator and builder
                exploring technology, storytelling and digital
                experiences.
              </p>

              <Link to="/about">
                MORE ABOUT ME →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RELATED ARTICLES
      ====================================================== */}

      {relatedArticles.length > 0 && (
        <section className="blog-related-section">
          <div className="blog-post-container">

            <div className="blog-related-header">
              <div>
                <span className="sidebar-label">
                  KEEP READING
                </span>

                <h2>
                  Related <em>articles.</em>
                </h2>
              </div>

              <Link to="/blog">
                VIEW ALL →
              </Link>
            </div>


            <div className="blog-related-grid">

              {relatedArticles.map((related) => (
                <Link
                  to={`/blog/${related.slug}`}
                  className="blog-related-card"
                  key={related.id}
                >

                  <div className="blog-related-image">

                    {related.image ? (
                      <img
                        src={related.image}
                        alt={related.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="blog-related-placeholder">
                        {related.category}
                      </div>
                    )}

                    <span>↗</span>
                  </div>

                  <div className="blog-related-info">

                    <div>
                      <span>{related.category}</span>
                      <span>•</span>
                      <span>{related.readTime}</span>
                    </div>

                    <h3>{related.title}</h3>

                    <p>
                      {related.excerpt}
                    </p>

                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>
      )}

      {/* =====================================================
    VIDEO + QUIZ CONNECTION
===================================================== */}

      {article.relatedVideoId && (
        <section className="blog-post-content-links">
          <div className="blog-post-container">

            <div className="content-links-card">

              <div className="content-links-header">

                <div>
                  <span className="sidebar-label">
                    CONTINUE THE STORY
                  </span>

                  <h2>
                    Read it.
                    <br />
                    <em>Watch it.</em>
                    <br />
                    Test it.
                  </h2>
                </div>

                <p>
                  Want to go deeper? Watch the documentary
                  behind this article and test what you
                  remember with the interactive quiz.
                </p>

              </div>


              <div className="content-links-grid">

                {/* VIDEO */}

                <Link
                  to={relatedVideoPath}
                  className="content-link-card"
                >
                  <div className="content-link-number">
                    01
                  </div>

                  <div className="content-link-content">

                    <span>
                      DOCUMENTARY
                    </span>

                    <h3>
                      Watch the full story
                    </h3>

                    <p>
                      Watch the documentary, explore the
                      research and understand the story
                      behind this article.
                    </p>

                    <div className="content-link-action">
                      WATCH VIDEO
                      <ArrowUpRight size={16} />
                    </div>

                  </div>
                </Link>


                {/* QUIZ */}

                <Link
                  to={relatedQuizPath}
                  className="content-link-card"
                >
                  <div className="content-link-number">
                    02
                  </div>

                  <div className="content-link-content">

                    <span>
                      INTERACTIVE QUIZ
                    </span>

                    <h3>
                      How much did you remember?
                    </h3>

                    <p>
                      Test your understanding of the
                      documentary with questions based
                      directly on the story.
                    </p>

                    <div className="content-link-action">
                      TAKE THE QUIZ
                      <ArrowUpRight size={16} />
                    </div>

                  </div>
                </Link>

              </div>

            </div>

          </div>
        </section>
      )}
      {/* =====================================================
          STRUCTURED DATA
      ====================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description:
              article.seoDescription ||
              article.excerpt,
            image: articleImage
              ? [articleImage]
              : undefined,

            author: {
              "@type": "Person",
              name: article.author || "Faiz Alam",
              url:
                "https://justfaizalam.vercel.app/about",
            },

            publisher: {
              "@type": "Person",
              name: "Faiz Alam",
              url:
                "https://justfaizalam.vercel.app/",
            },

            datePublished: publishedDate,
            dateModified: updatedDate,

            articleSection: article.category,

            keywords: article.tags?.join(", "),

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                `https://justfaizalam.vercel.app/blog/${article.slug}`,
            },
          }),
        }}
      />

    </main>
  );
}

export default BlogPost;