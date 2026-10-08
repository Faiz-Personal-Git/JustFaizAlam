import { useMemo } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Play,
  ShieldCheck,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";

import videos from "../../data/videos";
import categories from "../../data/categories";
import quizzes from "../../data/quizzes";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Home.css";


/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Software",
    description:
      "Web applications, APIs and digital systems built around real-world problems.",
    tags: ["React", ".NET", "APIs"],
  },

  {
    number: "02",
    title: "Websites",
    description:
      "Clean, responsive websites and landing pages designed to make ideas and businesses stand out.",
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
    title: "Creative Projects",
    description:
      "Documentaries, storytelling and digital experiments beyond traditional software development.",
    tags: ["Video", "Research", "Creative"],
  },
];


/* =========================================================
   SELECTED WORK
========================================================= */

const workItems = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "BharatTouch",
    description:
      "Full-stack web platform with user panel, admin panel and database-driven functionality.",
    tech: ["ASP.NET MVC", "MySQL"],
    image: "/Images/btlogo.svg",
    link: "https://bharattouch.com/",
  },
  {
    number: "02",
    category: "API DEVELOPMENT",
    title: "BONC Network",
    description:
      "API development and backend implementation using ASP.NET Core and MySQL.",
    tech: ["ASP.NET Core", "MySQL"],
    image: "/Images/bonclogo.svg",
    link: "https://boncnetwork.com/",
  },
  {
    number: "03",
    category: "FULL-STACK DEVELOPMENT",
    title: "PatrolX",
    description:
      "Full-stack security management platform with backend development using ASP.NET MVC and MySQL.",
    tech: ["ASP.NET MVC", "MySQL"],
    image: "/Images/patrolxlogo.png",
    link: "https://patrolx.app/",
  },
];


/* =========================================================
   HOW I WORK
========================================================= */

const howIWork = [
  {
    number: "01",
    icon: "video",
    title: "The videos",
    description: (
      <>
        <p>
          My expertise is creating informative and educational content
          that gives objective, concise and simplified explanations of
          complex issues.
        </p>

        <p>
          I believe in speaking truth to power, and in promoting
          democracy, freedom, rationalism and critical thinking through
          my videos.
        </p>
      </>
    ),
  },
  {
    number: "02",
    icon: "content",
    title: "Content and promotions",
    description: (
      <>
        <p>
          All my content is suitable for family viewing, free from
          abusive language, adult jokes and extreme violence.
        </p>

        <p>
          Nothing that harms human health, ecology or social wellbeing:
          no alcohol, tobacco or gambling. And no paid promotions for
          political parties, ever.
        </p>
      </>
    ),
  },
  {
    number: "03",
    icon: "contact",
    title: "Getting in touch",
    description: (
      <>
        <p>
          Keep messages precise and short. Emails with large attachments,
          tracker links or inappropriate text are set for automated
          deletion.
        </p>

        <p>
          I cannot respond to every personal problem. Video topic
          suggestions are always welcome and kept in mind.
        </p>
      </>
    ),
    email: "justfaizalam@gmail.com",
  },
];


/* =========================================================
   HOME
========================================================= */

function Home() {
  const featuredVideos = videos.slice(0, 3);


  /* =======================================================
     QUIZ CATEGORIES
  ======================================================= */

  const quizCategories = useMemo(() => {
    const quizList = Object.values(quizzes || {});

    return categories
      .filter((category) => category.id !== "all")

      .map((category) => {
        const categoryVideos = videos.filter((video) => {
          const videoCategory = video.category
            ?.toLowerCase()
            .replace(/\s+/g, "-");

          return videoCategory === category.id;
        });

        const categoryVideoIds = categoryVideos.map(
          (video) => video.id
        );

        const categoryQuizzes = quizList.filter((quiz) =>
          categoryVideoIds.includes(quiz.videoId)
        );

        return {
          ...category,
          quizCount: categoryQuizzes.length,
        };
      })

      .filter((category) => category.quizCount > 0);
  }, []);


  return (
    <div className="home-page">

      {/* =====================================================
          SEO
      ===================================================== */}

      <SEO
        title="Faiz Alam | Software Engineer, YouTuber & Documentary Creator"
        description="Faiz Alam is a software engineer, YouTuber and documentary creator from India building digital products, websites and stories worth understanding."
        path="/"
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-container hero-container">

          <div className="hero-content">

            <ScrollReveal direction="up">
              <span className="hero-label">
                FAIZ ALAM · SOFTWARE ENGINEER · YOUTUBER
              </span>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={100}
            >
              <h1 className="hero-title">
                I build things.
                <br />
                <em>I tell stories.</em>
              </h1>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={180}
            >
              <p className="hero-description">
                Software engineer, YouTuber and documentary
                creator exploring technology, people and
                stories worth understanding.
              </p>
            </ScrollReveal>


            <ScrollReveal
              direction="up"
              delay={240}
            >
              <div className="hero-actions">

                <Link
                  to="/videos"
                  className="button button-primary"
                >
                  Watch documentaries
                  <ArrowUpRight size={16} />
                </Link>


                <Link
                  to="/quiz"
                  className="button button-secondary"
                >
                  Take a quiz
                  <ArrowUpRight size={16} />
                </Link>


                <Link
                  to="/projects"
                  className="button button-secondary"
                >
                  My work
                  <ArrowUpRight size={16} />
                </Link>

              </div>
            </ScrollReveal>

          </div>


          <ScrollReveal
            direction="right"
            delay={120}
          >
            <div className="hero-image">

              <img
                src="/Images/dp.png"
                alt="Faiz Alam"
              />

            </div>
          </ScrollReveal>

        </div>


        <div className="hero-footer">

          <span>
            AMBALA · INDIA
          </span>

          <span>
            SOFTWARE · DOCUMENTARIES · CREATIVE WORK
          </span>

        </div>

      </section>


      {/* =====================================================
          WHO I AM
      ===================================================== */}

      <section className="home-section who-section">

        <div className="home-container">

          <ScrollReveal direction="up">

            <div className="section-label">

              <span>
                01
              </span>

              <span>
                WHO I AM
              </span>

            </div>

          </ScrollReveal>


          <div className="who-grid">


            {/* =================================================
                IMAGE GALLERY
            ================================================= */}

            <ScrollReveal direction="left">

              <div className="who-gallery">

                <div className="who-gallery-main">

                  <img
                    src="/Images/1.png"
                    alt="Faiz Alam"
                  />

                </div>


                <div className="who-gallery-side">

                  <div className="who-gallery-small">

                    <img
                      src="/Images/5.png"
                      alt="Faiz Alam"
                    />

                  </div>


                  <div className="who-gallery-small">

                    <img
                      src="/Images/4.png"
                      alt="Faiz Alam"
                    />

                  </div>

                </div>

              </div>

            </ScrollReveal>


            {/* =================================================
                WHO CONTENT
            ================================================= */}

            <ScrollReveal
              direction="right"
              delay={120}
            >

              <div className="who-content">

                <h2>
                  I'm Faiz Alam.
                </h2>


                <p className="who-lead">
                  Software engineer by profession,
                  YouTuber and documentary creator by
                  passion.
                </p>


                <p>
                  I build digital products, websites and
                  software — and I create stories that make
                  complex subjects easier to understand.
                </p>


                <Link
                  to="/about"
                  className="text-link"
                >
                  More about me
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          LATEST DOCUMENTARIES
      ===================================================== */}

      <section className="home-section documentaries-section">

        <div className="home-container">


          {/* =================================================
              HEADING
          ================================================= */}

          <ScrollReveal direction="up">

            <div className="videos-heading">

              <div>

                <div className="section-label">

                  <span>
                    02
                  </span>

                  <span>
                    LATEST DOCUMENTARIES
                  </span>

                </div>


                <h2 className="videos-title">
                  Latest documentaries,
                  <br />
                  <em>with their sources.</em>
                </h2>


                <p className="videos-description">
                  Numbered in order, newest first.
                  Watch the story, test what you remember,
                  and explore the research behind it.
                </p>

              </div>


              <Link
                to="/videos"
                className="text-link"
              >
                View all documentaries
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </ScrollReveal>


          {/* =================================================
              VIDEO CARDS
          ================================================= */}

          <div className="documentary-grid">

            {featuredVideos.map((video, index) => (

              <ScrollReveal
                key={video.id}
                direction="up"
                delay={index * 100}
              >

                <article className="documentary-card">


                  {/* =========================================
                      THUMBNAIL
                  ========================================= */}

                  <Link
                    to={`/videos/${video.id}`}
                    className="documentary-image"
                  >

                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                    />


                    <div className="documentary-overlay" />


                    <span className="documentary-number">
                      #{String(video.id).padStart(3, "0")}
                    </span>


                    <span className="documentary-play">

                      <Play
                        size={17}
                        fill="currentColor"
                      />

                    </span>


                    {video.duration && (
                      <span className="documentary-duration">
                        {video.duration}
                      </span>
                    )}

                  </Link>


                  {/* =========================================
                      VIDEO INFORMATION
                  ========================================= */}

                  <div className="documentary-info">


                    <div className="documentary-meta">

                      <span>
                        {video.category}
                      </span>


                      {video.duration && (
                        <span>
                          {video.duration}
                        </span>
                      )}

                    </div>


                    <h3>
                      {video.title}
                    </h3>


                    {video.subtitle && (
                      <p>
                        {video.subtitle}
                      </p>
                    )}


                    {/* =====================================
                        THREE BUTTONS
                    ===================================== */}

                    <div className="documentary-actions">


                      {/* QUIZ & SOURCES */}

                      <Link
                        to={`/videos/${video.id}`}
                        className="video-action quiz-action"
                      >
                        Quiz &amp; Sources
                        <ArrowUpRight size={13} />
                      </Link>


                      {/* WATCH */}

                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="video-action watch-action"
                      >
                        Watch

                        <Play
                          size={11}
                          fill="currentColor"
                        />

                      </a>


                      {/* SOURCE PDF */}

                      <a
                        href={`/Resources/${video.id}.pdf`}
                        target="_blank"
                        rel="noreferrer"
                        className="video-action source-action"
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


          {/* =================================================
              VIDEO FOOTER / TAGLINE
          ================================================= */}

          <ScrollReveal
            direction="up"
            delay={150}
          >

            <div className="videos-note">

              <div className="videos-note-icon">
                i
              </div>


              <p>

                <strong>
                  Everything is checkable.
                </strong>{" "}

                Explore the full video archive,
                research documents and quizzes on the{" "}

                <Link to="/videos">
                  Videos page
                </Link>

                {" "}and test yourself after watching.

              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          QUIZ
      ===================================================== */}

      <section className="home-section quiz-section">

        <div className="home-container">


          <ScrollReveal direction="up">

            <div className="quiz-header">

              <div>

                <div className="section-label">

                  <span>
                    03
                  </span>

                  <span>
                    QUIZ
                  </span>

                </div>


                <h2 className="section-title">

                  Watched the story?

                  <br />

                  <em>
                    Test what you remember.
                  </em>

                </h2>

              </div>


              <Link
                to="/quiz"
                className="text-link"
              >
                Explore quizzes
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </ScrollReveal>


          <div className="quiz-layout">


            {/* =================================================
                QUIZ INTRO
            ================================================= */}

            <ScrollReveal direction="left">

              <div className="quiz-intro">

                <p>
                  Every quiz connects back to the
                  documentary. Watch the story, test your
                  understanding and explore the topic again.
                </p>


                <Link
                  to="/quiz"
                  className="button button-primary"
                >
                  Explore quiz library
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </ScrollReveal>


            {/* =================================================
                QUIZ CATEGORIES
            ================================================= */}

            <ScrollReveal
              direction="right"
              delay={120}
            >

              <div className="quiz-panel">


                <div className="quiz-panel-top">

                  <span>
                    QUIZ LIBRARY
                  </span>

                  <span>
                    {quizCategories.length} TOPICS
                  </span>

                </div>


                <div className="quiz-category-list">

                  {quizCategories
                    .slice(0, 5)
                    .map((category) => {

                      const Icon = category.icon;

                      return (

                        <Link
                          to={`/quiz/${category.id}`}
                          className="quiz-category"
                          key={category.id}
                        >

                          <span className="quiz-category-icon">

                            {Icon && (
                              <Icon size={16} />
                            )}

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
                  className="quiz-panel-link"
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
          SELECTED WORK
      ===================================================== */}

      <section className="home-section work-section">

        <div className="home-container">


          <ScrollReveal direction="up">

            <div className="section-heading">

              <div>

                <div className="section-label">

                  <span>
                    05
                  </span>

                  <span>
                    SELECTED WORK
                  </span>

                </div>


                <h2 className="section-title">

                  Things I've

                  <br />

                  <em>
                    built.
                  </em>

                </h2>

              </div>


              <Link
                to="/projects"
                className="text-link"
              >
                View all projects
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </ScrollReveal>


          <div className="work-grid">

            {workItems.map((work, index) => (
              <ScrollReveal
                key={work.number}
                direction="up"
                delay={index * 100}
              >

                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-card"
                >

                  <div className="work-visual">

                    <img
                      src={work.image}
                      alt={`${work.title} project preview`}
                      loading="lazy"
                    />

                    <div className="work-image-overlay" />

                    <span className="work-image-label">
                      VIEW PROJECT ↗
                    </span>

                  </div>

                  <div className="work-card-bottom">

                    <div>

                      <span>
                        {work.number} · {work.category}
                      </span>

                      <h3>
                        {work.title}
                      </h3>

                      <p className="work-card-description">
                        {work.description}
                      </p>

                      <div className="work-card-tech">
                        {work.tech.map((tech) => (
                          <span key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    <ArrowUpRight size={19} />

                  </div>

                </a>

              </ScrollReveal>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          NOW
      ===================================================== */}

      <section className="home-section now-section">

        <div className="home-container">


          <ScrollReveal direction="up">

            <div className="section-label">

              <span>
                06
              </span>

              <span>
                NOW
              </span>

            </div>

          </ScrollReveal>


          <div className="now-layout">


            <ScrollReveal direction="left">

              <div className="now-intro">

                <h2>

                  What I'm working

                  <br />

                  on <em>right now.</em>

                </h2>


                <p>
                  A quick look at what currently
                  has my attention.
                </p>

              </div>

            </ScrollReveal>


            <div className="now-list">


              <ScrollReveal direction="right">

                <div className="now-item">

                  <span>
                    01
                  </span>


                  <div>

                    <small>
                      DOCUMENTARIES
                    </small>

                    <h3>
                      Researching new stories
                    </h3>

                    <p>
                      Working on investigative and
                      documentary content.
                    </p>

                  </div>

                </div>

              </ScrollReveal>


              <ScrollReveal
                direction="right"
                delay={100}
              >

                <div className="now-item">

                  <span>
                    02
                  </span>


                  <div>

                    <small>
                      DEVELOPMENT
                    </small>

                    <h3>
                      Building digital products
                    </h3>

                    <p>
                      Developing web applications
                      and practical digital experiences.
                    </p>

                  </div>

                </div>

              </ScrollReveal>


              <ScrollReveal
                direction="right"
                delay={200}
              >

                <div className="now-item">

                  <span>
                    03
                  </span>


                  <div>

                    <small>
                      WRITING
                    </small>

                    <h3>
                      Connecting stories and research
                    </h3>

                    <p>
                      Publishing articles connected
                      to documentaries and ideas.
                    </p>

                  </div>

                </div>

              </ScrollReveal>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW I WORK
      ===================================================== */}

      <section className="home-section how-section">

        <div className="home-container">


          <ScrollReveal direction="up">

            <div className="section-heading">

              <div>

                <div className="section-label">

                  <span>
                    07
                  </span>

                  <span>
                    HOW I WORK
                  </span>

                </div>


                <h2 className="section-title">

                  Simple process.

                  <br />

                  <em>
                    Thoughtful work.
                  </em>

                </h2>

              </div>

            </div>

          </ScrollReveal>


          <div className="how-grid">

            {howIWork.map((item, index) => (

              <ScrollReveal
                key={item.number}
                direction="up"
                delay={index * 100}
              >

                <article className="how-card">

                  <div className="how-card-icon">

                    {item.icon === "video" && (
                      <Play size={20} strokeWidth={1.6} />
                    )}

                    {item.icon === "content" && (
                      <ShieldCheck size={20} strokeWidth={1.6} />
                    )}

                    {item.icon === "contact" && (
                      <Mail size={20} strokeWidth={1.6} />
                    )}

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="how-card-description">
                    {item.description}
                  </div>

                  {item.email && (
                    <a
                      href={`mailto:${item.email}`}
                      className="how-email"
                    >
                      {item.email}
                    </a>
                  )}

                </article>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORK WITH ME
      ===================================================== */}

      <section className="home-section work-with-section">

        <div className="home-container">

          <ScrollReveal direction="up">

            <div className="work-with-box">


              <div className="work-with-heading">

                <span className="section-label">

                  <span>
                    08
                  </span>

                  <span>
                    WORK WITH ME
                  </span>

                </span>


                <h2>

                  Join the team,

                  <br />

                  or <em>
                    partner with a brand.
                  </em>

                </h2>

              </div>


              <p>
                Have a project, collaboration or idea
                in mind? Let's talk about what we can
                build together.
              </p>


              <Link
                to="/contact"
                className="button button-primary"
              >
                Get in touch
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </ScrollReveal>

        </div>

      </section>

    </div>
  );
}


export default Home;