import { useMemo } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  FileText,
  ExternalLink,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import videos from "../../data/videos";
import categories from "../../data/categories";
import quizzes from "../../data/quizzes";
import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";
import "./Home.css";

const workItems = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "BharatTouch",
    description:
      "A digital networking platform built around profile pages, sharing tools and database-driven features.",
    tech: ["ASP.NET MVC", "MySQL"],
    image: "/Images/btlogo.svg",
    link: "https://bharattouch.com/",
  },
  {
    number: "02",
    category: "API DEVELOPMENT",
    title: "BONC Network",
    description:
      "Backend and API implementation designed to support a connected digital product.",
    tech: ["ASP.NET Core", "MySQL"],
    image: "/Images/bonclogo.svg",
    link: "https://boncnetwork.com/",
  },
  {
    number: "03",
    category: "FULL-STACK DEVELOPMENT",
    title: "PatrolX",
    description:
      "A security management platform with operational workflows and application-side logic.",
    tech: ["ASP.NET MVC", "SQL"],
    image: "/Images/patrolxlogo.png",
    link: "https://patrolx.app/",
  },
];

function SectionIntro({
  number,
  eyebrow,
  title,
  accent,
  description,
  link,
  linkText,
}) {
  return (
    <div className="section-intro">
      <div className="section-intro-top">
        <span className="section-index">{number}</span>
        <span className="section-eyebrow">{eyebrow}</span>
      </div>

      <div className="section-intro-body">
        <div>
          <h2 className="section-heading-title">
            {title} <em>{accent}</em>
          </h2>

          {description && (
            <p className="section-heading-copy">{description}</p>
          )}
        </div>

        {link && (
          <Link className="section-heading-link" to={link}>
            {linkText}
            <ArrowUpRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}

function Home() {
  const featuredVideos = videos.slice(0, 3);

  const quizCategories = useMemo(() => {
    const quizList = Object.values(quizzes || {});

    return categories
      .filter((category) => category.id !== "all")
      .map((category) => {
        const categoryVideoIds = videos
          .filter(
            (video) =>
              video.category?.toLowerCase().replace(/\s+/g, "-") ===
              category.id
          )
          .map((video) => video.id);

        return {
          ...category,
          quizCount: quizList.filter((quiz) =>
            categoryVideoIds.includes(quiz.videoId)
          ).length,
        };
      })
      .filter((category) => category.quizCount > 0);
  }, []);

  return (
    <div className="home-page">
      <SEO
        title="Faiz Alam | Software Engineer, YouTuber & Documentary Creator"
        description="Faiz Alam is a software engineer, YouTuber and documentary creator from India building digital products, websites and stories worth understanding."
        path="/"
      />

      {/* HERO */}
      <section className="home-hero">
        <div className="hero-background" aria-hidden="true">
          <img src="/Images/dp.png" alt="" />
        </div>

        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-grid-lines" aria-hidden="true" />

        <div className="home-container hero-container">
          <div className="hero-content">
            <ScrollReveal direction="up">
              <div className="hero-label">
                <span className="hero-live-dot" />
                INDEPENDENT CREATOR
                <span className="hero-label-divider">/</span>
                SOFTWARE ENGINEER
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <p className="hero-kicker">TECHNOLOGY. PEOPLE. IDEAS.</p>

              <h1 className="hero-title">
                Curiosity is
                <br />
                <em>the starting point.</em>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <p className="hero-description">
                I build digital products and create documentaries that make
                complicated stories easier to understand.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={230}>
              <div className="hero-actions">
                <Link to="/videos" className="button button-primary">
                  <Play size={15} fill="currentColor" />
                  Explore documentaries
                </Link>

                <Link to="/projects" className="button button-outline">
                  View my work
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="hero-footnote">
                <span className="hero-footnote-line" />
                Based in Ambala, India
                <span className="hero-footnote-dot">·</span>
                Working across code and stories
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="hero-side-note">
          FAIZ ALAM <span>—</span> PERSONAL PORTFOLIO
        </div>

        <a className="hero-scroll" href="#who-i-am">
          <span>SCROLL TO EXPLORE</span>
          <span className="hero-scroll-line" />
        </a>
      </section>

      {/* 01 — ABOUT */}
      <section className="home-section about-section" id="who-i-am">
        <div className="home-container">
          <SectionIntro
            number="01"
            eyebrow="A LITTLE ABOUT ME"
            title="Two worlds."
            accent="One curiosity."
            description="I move between software engineering and storytelling—building useful things, then asking better questions about the world around them."
          />

          <div className="about-feature">
            <ScrollReveal direction="left">
              <div className="about-image-stack">
                <div className="about-image-main">
                  <img src="/Images/1.png" alt="Faiz Alam" loading="lazy" />
                </div>

                <div className="about-image-small">
                  <img
                    src="/Images/5.png"
                    alt="Faiz Alam working on creative projects"
                    loading="lazy"
                  />
                </div>

                <span className="about-image-caption">
                  THE PERSON BEHIND THE PROJECTS
                </span>

                <span className="about-image-mark">FA.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={100}>
              <div className="about-copy">
                <span className="content-overline">HELLO, I'M FAIZ</span>

                <h3>
                  Engineer by practice.
                  <br />
                  <em>Storyteller by choice.</em>
                </h3>

                <p>
                  I work on web applications and digital products, with
                  experience across frontend and backend development. Outside
                  engineering, I make documentary-style videos that explore
                  people, systems and ideas.
                </p>

                <p>
                  This website brings those two sides together: the things I
                  build, the stories I publish and the questions that keep me
                  curious.
                </p>

                <div className="about-stats">
                  <div>
                    <strong>01</strong>
                    <span>
                      Curiosity-led
                      <br />
                      approach
                    </span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>
                      Code +
                      <br />
                      storytelling
                    </span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>
                      Research-minded
                      <br />
                      content
                    </span>
                  </div>
                </div>

                <Link to="/about" className="underlined-link">
                  Read my full story
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 02 — DOCUMENTARIES */}
      <section
        className="home-section documentaries-section"
        id="documentaries"
      >
        <div className="home-container">
          <SectionIntro
            number="02"
            eyebrow="WATCH · QUESTION · LEARN"
            title="Stories worth"
            accent="looking into."
            description="Documentary videos built around research, context and the details that are easy to miss."
            link="/videos"
            linkText="All documentaries"
          />

          <div className="documentary-list">
            {featuredVideos.map((video, index) => (
              <ScrollReveal
                key={video.id}
                direction="up"
                delay={index * 80}
              >
                <article className="documentary-row">
                  <Link
                    to={`/videos/${video.id}`}
                    className="documentary-image"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                    />

                    <span className="documentary-play">
                      <Play size={17} fill="currentColor" />
                    </span>

                    <span className="documentary-number">
                      EP. {String(video.id).padStart(2, "0")}
                    </span>

                    {video.duration && (
                      <span className="documentary-duration">
                        {video.duration}
                      </span>
                    )}
                  </Link>

                  <div className="documentary-info">
                    <div className="documentary-meta">
                      <span>{video.category || "DOCUMENTARY"}</span>
                      <span>
                        FEATURED {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{video.title}</h3>

                    {video.subtitle && <p>{video.subtitle}</p>}

                    <div className="documentary-actions">
                      <Link
                        to={`/videos/${video.id}`}
                        className="video-action video-action-primary"
                      >
                        <FileText size={14} />
                        Research & quiz
                        <ArrowUpRight size={13} />
                      </Link>

                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="video-action"
                      >
                        <Play size={13} fill="currentColor" />
                        Watch video
                      </a>

                      <a
                        href={`/Resources/${video.id}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="video-action"
                      >
                        <ExternalLink size={13} />
                        Source PDF
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="research-note">
            <span className="research-note-icon">
              <FileText size={17} />
            </span>

            <p>
              <strong>Research is part of the story.</strong> Open a video to
              explore its related quiz and sources, or browse the complete
              archive.
            </p>

            <Link to="/videos">
              Browse archive
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 03 — QUIZ */}
      <section className="home-section quiz-section" id="quiz">
        <div className="home-container">
          <SectionIntro
            number="03"
            eyebrow="DON'T JUST WATCH"
            title="How much did"
            accent="you take away?"
            description="Put your understanding to the test with quizzes connected to documentary topics."
            link="/quiz"
            linkText="Open quiz library"
          />

          <div className="quiz-feature">
            <div className="quiz-feature-copy">
              <span className="quiz-stamp">THE KNOWLEDGE CHECK</span>

              <div className="quiz-big-number">
                Q<span>.</span>
              </div>

              <h3>
                Watch with curiosity.
                <br />
                <em>Leave with clarity.</em>
              </h3>

              <p>
                Choose a topic, answer questions and revisit the story from a
                different angle. Each quiz is a chance to check what stayed
                with you.
              </p>

              <Link to="/quiz" className="button button-dark">
                Start exploring
                <ArrowUpRight size={16} />
              </Link>

              <div className="quiz-feature-foot">
                <span>{quizCategories.length} TOPIC CATEGORIES</span>
                <span>LEARN BY TESTING</span>
              </div>
            </div>

            <div className="quiz-topics">
              <div className="quiz-topics-heading">
                <span>EXPLORE BY TOPIC</span>
                <span>
                  01 — {String(Math.min(quizCategories.length, 5)).padStart(2, "0")}
                </span>
              </div>

              {quizCategories.slice(0, 5).map((category, index) => {
                const Icon = category.icon;

                return (
                  <Link
                    to={`/quiz/${category.id}`}
                    className="quiz-topic-row"
                    key={category.id}
                  >
                    <span className="quiz-topic-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="quiz-topic-icon">
                      {Icon && <Icon size={17} />}
                    </span>

                    <span className="quiz-topic-name">{category.name}</span>

                    <span className="quiz-topic-count">
                      {category.quizCount}{" "}
                      {category.quizCount === 1 ? "QUIZ" : "QUIZZES"}
                    </span>

                    <ArrowUpRight
                      className="quiz-topic-arrow"
                      size={17}
                    />
                  </Link>
                );
              })}

              {quizCategories.length === 0 && (
                <p className="quiz-empty">
                  New quizzes will appear here as they are published.
                </p>
              )}

              <Link to="/quiz" className="quiz-topics-all">
                View all quiz topics
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — SELECTED WORK */}
      <section className="home-section work-section" id="selected-work">
        <div className="home-container">
          <SectionIntro
            number="04"
            eyebrow="SELECTED ENGINEERING WORK"
            title="Built to"
            accent="be useful."
            description="A selection of digital products and backend systems I've contributed to. Open a project to learn more."
            link="/projects"
            linkText="All projects"
          />

          <div className="work-project-list">
            {workItems.map((work, index) => (
              <ScrollReveal
                key={work.number}
                direction="up"
                delay={index * 80}
              >
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`work-project work-project-${index + 1}`}
                >
                  <div className="work-project-number">
                    {work.number}
                    <span> / 03</span>
                  </div>

                  <div className="work-project-brand">
                    <img
                      src={work.image}
                      alt={`${work.title} logo`}
                      loading="lazy"
                    />
                  </div>

                  <div className="work-project-content">
                    <span className="work-project-type">{work.category}</span>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>

                    <div className="work-card-tech">
                      {work.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="work-project-visit">
                    <span>VISIT PROJECT</span>
                    <MoveUpRight size={19} />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;