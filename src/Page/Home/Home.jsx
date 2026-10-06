import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Layers3,
  MonitorSmartphone,
  Play,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import videos from "../../data/videos";
import categories from "../../data/categories";

import ScrollReveal from "../../components/ScrollReveal";

import ImageReveal from "../../components/ImageReveal";
import MagneticButton from "../../components/MagneticButton";

import "./Home.css";

const services = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Scalable web applications, APIs and digital systems built around real-world problems.",
    tags: ["React", ".NET", "APIs"],
  },
  {
    number: "02",
    title: "Web Experiences",
    description:
      "High-quality websites and landing pages designed to make businesses and ideas stand out.",
    tags: ["Web", "UI", "Responsive"],
  },
  {
    number: "03",
    title: "Digital Products",
    description:
      "From an early idea to a working product — structure, interface and technology together.",
    tags: ["Product", "UX", "Systems"],
  },
  {
    number: "04",
    title: "Creative Work",
    description:
      "Storytelling, content and visual experiments that live beyond traditional software development.",
    tags: ["Content", "Video", "Creative"],
  },
];

const stack = [
  "React",
  ".NET",
  "C#",
  "JavaScript",
  "Node",
  "SQL",
  "REST API",
  "Git",
];

function Home() {
  const featuredVideos = videos.slice(0, 3);

  const quizCategories = categories.filter(
    (category) => category.id !== "all"
  );

  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-container">

          <ScrollReveal direction="up">
            <div className="hero-top-meta">
              <span>
                <i />
                AVAILABLE FOR SELECT PROJECTS
              </span>

              <span className="hero-location">
                AMBALA · INDIA
              </span>
            </div>
          </ScrollReveal>


          <div className="hero-main">

            {/* HERO COPY */}

            <ScrollReveal direction="left">
              <div className="hero-copy">

                <div className="hero-kicker">
                  SOFTWARE ENGINEER
                  <span>·</span>
                  CREATOR
                  <span>·</span>
                  BUILDER
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-line">
                    I build
                  </span>

                  <span className="hero-title-line hero-serif">
                    digital
                  </span>

                  <span className="hero-title-line">
                    experiences
                    <em>.</em>
                  </span>
                </h1>

                <p className="hero-description">
                  I combine technology, creativity and
                  problem-solving to turn ideas into
                  meaningful digital experiences.
                </p>

                <div className="hero-actions">

                  <MagneticButton>
                    <Link
                      to="/projects"
                      className="hero-primary-button"
                    >
                      View my work
                      <ArrowUpRight size={15} />
                    </Link>
                  </MagneticButton>

                  <Link
                    to="/about"
                    className="hero-text-button"
                  >
                    More about me
                    <span />
                  </Link>

                </div>

              </div>
            </ScrollReveal>


            {/* HERO VISUAL */}

            <ScrollReveal direction="right" delay={150}>
              <div className="hero-visual">

                <div className="hero-visual-orbit orbit-one" />
                <div className="hero-visual-orbit orbit-two" />

                <div className="hero-image-frame">

                  <div className="hero-image-top">
                    <span>FA / 01</span>
                    <span>PORTRAIT</span>
                  </div>

                  <div className="hero-image-wrap">

                    <ImageReveal
                      src="/Images/dp.png"
                      alt="Faiz Alam"
                    />

                    <div className="hero-image-overlay" />

                  </div>

                  <div className="hero-image-bottom">
                    <span>FAIZ ALAM</span>
                    <span>2026</span>
                  </div>

                </div>


                <div className="hero-floating-card hero-card-one">
                  <span>01</span>
                  <strong>BUILD</strong>
                </div>

                <div className="hero-floating-card hero-card-two">
                  <span>BASED IN</span>
                  <strong>INDIA</strong>
                </div>

              </div>
            </ScrollReveal>

          </div>


          <ScrollReveal direction="up" delay={200}>
            <div className="hero-bottom">

              <span className="hero-scroll">

                <span className="scroll-circle">
                  <ArrowDown size={14} />
                </span>

                SCROLL TO EXPLORE

              </span>

              <span className="hero-bottom-note">
                DIGITAL · CREATIVE · HUMAN
              </span>

            </div>
          </ScrollReveal>

        </div>
      </section>


      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="home-marquee">

        <div className="marquee-track">

          {[...Array(2)].map((_, index) => (

            <div
              className="marquee-content"
              key={index}
            >

              <span>REACT</span>
              <i>✦</i>

              <span>.NET</span>
              <i>✦</i>

              <span>WEB DEVELOPMENT</span>
              <i>✦</i>

              <span>DIGITAL PRODUCTS</span>
              <i>✦</i>

              <span>CREATIVE</span>
              <i>✦</i>

              <span>STORYTELLING</span>
              <i>✦</i>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="home-introduction">

        <div className="page-container">

          <ScrollReveal direction="up">

            <div className="section-index">

              <span>01</span>
              <div />
              <span>WHO I AM</span>

            </div>

          </ScrollReveal>


          <div className="intro-layout">

            <ScrollReveal direction="left">

              <h2>
                I don't just write
                <span> code.</span>
                <br />
                I turn ideas into
                <em> digital reality.</em>
              </h2>

            </ScrollReveal>


            <ScrollReveal direction="right" delay={150}>

              <div className="intro-side">

                <p>
                  I'm Faiz Alam — a software engineer,
                  creator and builder interested in the
                  intersection of technology, design and
                  storytelling.
                </p>

                <p>
                  My focus is simple: create work that
                  is useful, thoughtful and memorable.
                </p>

                <Link
                  to="/about"
                  className="editorial-link"
                >
                  Discover my story
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="home-services">

        <div className="page-container">

          <ScrollReveal direction="up">

            <div className="section-heading">

              <div>

                <span className="section-eyebrow">
                  02 / WHAT I DO
                </span>

                <h2>
                  Ideas need
                  <em> execution.</em>
                </h2>

              </div>

              <p>
                Different problems require
                different ways of thinking.
              </p>

            </div>

          </ScrollReveal>


          <div className="services-list">

            {services.map((service, index) => (

              <ScrollReveal
                key={service.number}
                direction="up"
                delay={index * 100}
              >

                <article className="service-row">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-main">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                    <div className="service-tags">

                      {service.tags.map((tag) => (

                        <span key={tag}>
                          {tag}
                        </span>

                      ))}

                    </div>

                  </div>

                  <div className="service-icon">
                    <ArrowUpRight size={22} />
                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section className="home-work">

        <div className="page-container">

          <ScrollReveal direction="up">

            <div className="section-heading work-heading">

              <div>

                <span className="section-eyebrow">
                  03 / SELECTED WORK
                </span>

                <h2>
                  Things I've
                  <em> built.</em>
                </h2>

              </div>

              <Link
                to="/projects"
                className="editorial-link"
              >
                View all projects
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </ScrollReveal>


          <div className="work-grid">

            <ScrollReveal direction="left">

              <Link
                to="/projects"
                className="work-card work-card-large"
              >

                <div className="work-card-visual visual-one">

                  <div className="mock-browser">

                    <div className="browser-top">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="browser-content">
                      <div />
                      <div />
                      <div />
                    </div>

                  </div>

                </div>

                <div className="work-card-info">

                  <div>

                    <span>
                      01 · WEB EXPERIENCE
                    </span>

                    <h3>
                      Digital
                      <br />
                      Experiences
                    </h3>

                  </div>

                  <ArrowUpRight size={21} />

                </div>

              </Link>

            </ScrollReveal>


            <ScrollReveal
              direction="right"
              delay={100}
            >

              <Link
                to="/projects"
                className="work-card work-card-small"
              >

                <div className="work-card-visual visual-two">

                  <div className="visual-type">
                    <span>FA</span>
                    <strong>CREATIVE</strong>
                  </div>

                </div>

                <div className="work-card-info">

                  <div>

                    <span>
                      02 · PERSONAL BRAND
                    </span>

                    <h3>
                      Identity
                    </h3>

                  </div>

                  <ArrowUpRight size={21} />

                </div>

              </Link>

            </ScrollReveal>


            <ScrollReveal
              direction="right"
              delay={200}
            >

              <Link
                to="/projects"
                className="work-card work-card-small"
              >

                <div className="work-card-visual visual-three">

                  <div className="code-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                </div>

                <div className="work-card-info">

                  <div>

                    <span>
                      03 · DEVELOPMENT
                    </span>

                    <h3>
                      Products
                    </h3>

                  </div>

                  <ArrowUpRight size={21} />

                </div>

              </Link>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEOS
      ===================================================== */}

      <section className="home-videos">

        <div className="page-container">

          <ScrollReveal direction="up">

            <div className="home-videos-header">

              <div className="home-videos-heading">

                <span className="section-eyebrow">
                  04 / FROM THE CHANNEL
                </span>

                <h2>
                  Stories,
                  <em> ideas</em>
                  <br />
                  and investigations.
                </h2>

              </div>

              <div className="home-videos-intro">

                <p>
                  Explore videos covering technology,
                  real stories, investigations and ideas
                  that deserve a deeper look.
                </p>

                <p>
                  Watch the video, test what you remember,
                  and explore the sources behind the story.
                </p>

              </div>

            </div>

          </ScrollReveal>


          <div className="home-video-grid">

            {featuredVideos.map((video, index) => (

              <ScrollReveal
                key={video.id}
                direction="up"
                delay={index * 120}
              >

                <article className="home-video-card">

                  <Link
                    to={`/videos/${video.id}`}
                    className="home-video-image-link"
                  >

                    <div className="home-video-image">

                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                      />

                      <div className="home-video-overlay" />

                      <span className="home-video-number">
                        VIDEO #{String(video.id).padStart(3, "0")}
                      </span>

                      <span className="home-video-play">

                        <Play
                          size={18}
                          fill="currentColor"
                        />

                      </span>

                      <span className="home-video-duration">
                        {video.duration}
                      </span>

                    </div>

                  </Link>


                  <div className="home-video-info">

                    <div className="home-video-meta">

                      <span>
                        {video.category}
                      </span>

                      <span>
                        {video.duration}
                      </span>

                    </div>

                    <h3>
                      {video.title}
                    </h3>

                    <p>
                      {video.subtitle}
                    </p>


                    <div className="home-video-actions">

                      <Link
                        to={`/videos/${video.id}`}
                        className="home-video-action quiz"
                      >
                        Quiz & Sources
                        <ArrowUpRight size={14} />
                      </Link>


                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="home-video-action watch"
                      >
                        Watch

                        <Play
                          size={12}
                          fill="currentColor"
                        />

                      </a>


                      <a
                        href={`/Resources/${video.id}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="home-video-action source"
                      >
                        Source PDF
                        <ArrowUpRight size={13} />
                      </a>

                    </div>

                  </div>

                </article>

              </ScrollReveal>

            ))}

          </div>


          <ScrollReveal direction="up" delay={200}>

            <div className="home-videos-footer">

              <div className="home-videos-footer-line" />

              <Link
                to="/videos"
                className="home-videos-all-button"
              >

                <span>
                  Explore all videos
                </span>

                <ArrowUpRight size={17} />

              </Link>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          QUIZ
      ===================================================== */}

      <section className="home-quiz">

        <div className="page-container">

          <div className="quiz-home-grid">

            <ScrollReveal direction="left">

              <div className="quiz-home-copy">

                <span className="section-eyebrow">
                  05 / TEST YOUR KNOWLEDGE
                </span>

                <h2>
                  Don't just
                  <br />
                  <em>watch.</em>
                  <br />
                  Remember.
                </h2>

                <p>
                  Every quiz is connected to the videos.
                  Test what you actually remember and
                  go back to the original story and sources.
                </p>

                <div className="quiz-home-actions">

                  <Link
                    to="/quiz"
                    className="quiz-primary-button"
                  >
                    Explore quizzes
                    <ArrowUpRight size={17} />
                  </Link>

                  <span className="quiz-home-note">
                    VIDEO BASED · TOPIC BASED · INTERACTIVE
                  </span>

                </div>

              </div>

            </ScrollReveal>


            <ScrollReveal
              direction="right"
              delay={150}
            >

              <div className="quiz-home-panel">

                <div className="quiz-panel-top">

                  <span>
                    QUIZ LIBRARY
                  </span>

                  <Sparkles size={19} />

                </div>


                <div className="quiz-panel-title">

                  <strong>
                    Choose a topic.
                  </strong>

                  <span>
                    Start exploring.
                  </span>

                </div>


                <div className="quiz-category-grid">

                  {quizCategories
                    .slice(0, 6)
                    .map((category) => {

                      const Icon = category.icon;

                      return (

                        <Link
                          to={`/quiz/${category.id}`}
                          className="home-quiz-category"
                          key={category.id}
                        >

                          <span className="home-quiz-category-icon">
                            <Icon size={17} />
                          </span>

                          <span>
                            {category.name}
                          </span>

                          <ArrowRight size={15} />

                        </Link>

                      );

                    })}

                </div>


                <Link
                  to="/quiz"
                  className="quiz-panel-all"
                >
                  View all topics
                  <ArrowUpRight size={15} />
                </Link>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          KNOWLEDGE LOOP
      ===================================================== */}

      <section className="home-knowledge">

        <div className="page-container">

          <ScrollReveal direction="up">

            <div className="knowledge-header">

              <div>

                <span className="section-eyebrow">
                  06 / THE KNOWLEDGE LOOP
                </span>

                <h2>
                  Watch.
                  <em> Question.</em>
                  <br />
                  Verify.
                </h2>

              </div>

              <p>
                A different way to experience documentary
                content — from watching the story to
                exploring the evidence behind it.
              </p>

            </div>

          </ScrollReveal>


          <div className="knowledge-flow">

            <ScrollReveal direction="up">

              <div className="knowledge-step">

                <span>01</span>

                <div className="knowledge-step-icon">

                  <Play
                    size={20}
                    fill="currentColor"
                  />

                </div>

                <h3>
                  Watch
                </h3>

                <p>
                  Start with the story and understand
                  the bigger picture.
                </p>

              </div>

            </ScrollReveal>


            <div className="knowledge-connector">
              <ArrowRight size={18} />
            </div>


            <ScrollReveal
              direction="up"
              delay={100}
            >

              <div className="knowledge-step">

                <span>02</span>

                <div className="knowledge-step-icon">
                  <Sparkles size={20} />
                </div>

                <h3>
                  Question
                </h3>

                <p>
                  Test what you actually remember
                  from the video.
                </p>

              </div>

            </ScrollReveal>


            <div className="knowledge-connector">
              <ArrowRight size={18} />
            </div>


            <ScrollReveal
              direction="up"
              delay={200}
            >

              <div className="knowledge-step">

                <span>03</span>

                <div className="knowledge-step-icon">
                  <Layers3 size={20} />
                </div>

                <h3>
                  Verify
                </h3>

                <p>
                  Go deeper into the sources and
                  evidence behind the story.
                </p>

              </div>

            </ScrollReveal>


            <div className="knowledge-connector">
              <ArrowRight size={18} />
            </div>


            <ScrollReveal
              direction="up"
              delay={300}
            >

              <div className="knowledge-step">

                <span>04</span>

                <div className="knowledge-step-icon">
                  <MonitorSmartphone size={20} />
                </div>

                <h3>
                  Explore
                </h3>

                <p>
                  Discover another story and continue
                  the journey.
                </p>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          STACK
      ===================================================== */}

      <section className="home-stack">

        <div className="page-container">

          <ScrollReveal direction="left">

            <div className="stack-top">

              <div className="section-index">

                <span>07</span>
                <div />

                <span>
                  THE STACK
                </span>

              </div>

              <p>
                Technology is a tool.
                Knowing when and how to use it
                is the real skill.
              </p>

            </div>

          </ScrollReveal>


          <div className="stack-list">

            {stack.map((item, index) => (

              <ScrollReveal
                key={item}
                direction="right"
                delay={index * 70}
              >

                <div className="stack-item">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {item}
                  </strong>

                  <ArrowUpRight size={18} />

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BEYOND CODE
      ===================================================== */}

      <section className="home-beyond">

        <div className="page-container">

          <div className="beyond-grid">

            <ScrollReveal direction="left">

              <div className="beyond-copy">

                <span className="section-eyebrow">
                  08 / BEYOND CODE
                </span>

                <h2>
                  A developer
                  <br />
                  <em>by profession.</em>
                  <br />
                  A creator
                  <br />
                  by curiosity.
                </h2>

                <p>
                  Technology is only one part of what
                  I do. I'm equally interested in
                  storytelling, content, visual ideas
                  and building something of my own.
                </p>

                <a
                  href="https://www.youtube.com/@JustFaizAlam"
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-link"
                >
                  Visit YouTube
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </ScrollReveal>


            <ScrollReveal
              direction="right"
              delay={150}
            >

              <div className="beyond-visual">

                <div className="beyond-image">

                  <ImageReveal
                    src="/Images/dp.png"
                    alt="Faiz Alam"
                  />

                  <div className="beyond-image-text">

                    <span>
                      CREATIVE / 08
                    </span>

                    <strong>
                      BEYOND
                      <br />
                      CODE.
                    </strong>

                  </div>

                </div>


                <div className="play-badge">

                  <Play
                    size={15}
                    fill="currentColor"
                  />

                  <span>
                    WATCH
                  </span>

                </div>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="home-journey">

        <div className="page-container">

          <ScrollReveal direction="up">

            <div className="section-heading">

              <div>

                <span className="section-eyebrow">
                  09 / THE JOURNEY
                </span>

                <h2>
                  Always
                  <em> evolving.</em>
                </h2>

              </div>

            </div>

          </ScrollReveal>


          <div className="journey-line">

            <ScrollReveal direction="up">

              <div className="journey-item">

                <span>
                  NOW
                </span>

                <div className="journey-dot" />

                <div>

                  <h3>
                    Building & Creating
                  </h3>

                  <p>
                    Exploring software, digital products,
                    content and new ideas.
                  </p>

                </div>

              </div>

            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={150}
            >

              <div className="journey-item">

                <span>
                  NEXT
                </span>

                <div className="journey-dot" />

                <div>

                  <h3>
                    Bigger Ideas
                  </h3>

                  <p>
                    Turning experiments into products
                    and meaningful businesses.
                  </p>

                </div>

              </div>

            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={300}
            >

              <div className="journey-item">

                <span>
                  BEYOND
                </span>

                <div className="journey-dot" />

                <div>

                  <h3>
                    Keep Exploring
                  </h3>

                  <p>
                    Technology changes.
                    Curiosity stays.
                  </p>

                </div>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="cta-grid" />

        <div className="page-container">

          <ScrollReveal direction="up">

            <span className="section-eyebrow">
              10 / LET'S BUILD
            </span>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <h2>
              Have an
              <br />
              <em>idea?</em>
            </h2>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <div className="cta-bottom">

              <p>
                Let's turn it into something
                people remember.
              </p>

              <Link
                to="/contact"
                className="cta-button"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </div>
  );
}

export default Home;