import {
  ArrowUpRight,
  Code2,
  Film,
  Laptop,
  Mic2,
  Camera,
  Music2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";
import "./About.css";

const services = [
  {
    number: "01",
    icon: <Code2 size={20} aria-hidden="true" />,
    title: "Software Development",
    text: "I build websites and web applications with .NET, React, and modern web technologies.",
    tag: "ENGINEERING",
  },
  {
    number: "02",
    icon: <Film size={20} aria-hidden="true" />,
    title: "Documentaries & Content",
    text: "I research ideas and turn them into videos and stories designed to inform and engage.",
    tag: "STORYTELLING",
  },
  {
    number: "03",
    icon: <Laptop size={20} aria-hidden="true" />,
    title: "Freelance Projects",
    text: "I help people and businesses turn practical ideas into useful digital experiences.",
    tag: "COLLABORATION",
  },
];

const interests = [
  { icon: <Film size={18} aria-hidden="true" />, label: "Filmmaking" },
  { icon: <Mic2 size={18} aria-hidden="true" />, label: "Storytelling" },
  { icon: <Music2 size={18} aria-hidden="true" />, label: "Music" },
  { icon: <Camera size={18} aria-hidden="true" />, label: "Photography" },
];

const journal = [
  {
    image: "/Images/1.png",
    title: "Behind the scenes",
    description: "The person behind the projects",
    className: "journal-card-tall",
  },
  {
    image: "/Images/2.png",
    title: "On camera",
    description: "Ideas becoming stories",
  },
  {
    image: "/Images/3.png",
    title: "Creative process",
    description: "Making room for new ideas",
  },
  {
    image: "/Images/4.png",
    title: "Everyday moments",
    description: "A little beyond the screen",
  },
  {
    image: "/Images/5.png",
    title: "The journey",
    description: "Learning, building, improving",
  },
];

function About() {
  return (
    <main className="about-page">
      <SEO
        title="About Faiz Alam | Software Engineer & Creator"
        description="Meet Faiz Alam, a software engineer and creator working across web development, documentaries, and digital storytelling."
        path="/about"
      />

      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <div className="about-hero-copy">
            <ScrollReveal direction="up">
              <span className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                A LITTLE ABOUT ME
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h1>
                More than
                <br />
                just <em>code.</em>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={140}>
              <p className="about-hero-description">
                I’m Faiz Alam — a software engineer and creator who enjoys
                building useful digital products and telling stories worth
                your time.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Link to="/contact" className="about-button">
                Let’s work together <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </ScrollReveal>

            <div className="about-hero-meta" aria-label="Areas of work">
              <span>SOFTWARE</span>
              <span>STORYTELLING</span>
              <span>CREATIVITY</span>
            </div>
          </div>

          <ScrollReveal direction="up" delay={120}>
            <figure className="about-hero-visual">
              <img src="/Images/dp.png" alt="Faiz Alam in his creative workspace" />
              <figcaption>
                <span>FAIZ ALAM / PERSONAL PROFILE</span>
                <span>01 — 05</span>
              </figcaption>
              <span className="about-hero-stamp" aria-hidden="true">FA</span>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-story about-section">
        <div className="about-container about-story-grid">
          <div className="about-section-intro">
            <span className="about-eyebrow">01 / THE PERSON</span>
            <h2>
              Curious by nature.
              <br />
              A <em>builder</em> by choice.
            </h2>
          </div>
          <div className="about-story-copy">
            <p>
              My work sits between technology and creativity. I enjoy solving
              problems through code, shaping ideas into digital products, and
              exploring the stories behind the world around us.
            </p>
            <p>
              Outside development, I create YouTube content and work on
              documentary-style storytelling. I’m interested in the research,
              planning, and small details that make an idea clear and memorable.
            </p>
            <p>
              I’m still learning, experimenting, and building — one project at
              a time.
            </p>
            <div className="about-signature">
              <span>Faiz Alam</span>
              <span>SOFTWARE ENGINEER · CREATOR</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-work about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <span className="about-eyebrow">02 / WHAT I DO</span>
              <h2>
                Different skills.
                <br />
                One <em>direction.</em>
              </h2>
            </div>
            <p>
              I bring technical thinking and creative work together to make
              things people can use, watch, and remember.
            </p>
          </div>

          <div className="about-service-list">
            {services.map((service, index) => (
              <ScrollReveal key={service.number} direction="up" delay={index * 70}>
                <article className="about-service">
                  <span className="about-service-number">{service.number}</span>
                  <span className="about-service-icon">{service.icon}</span>
                  <div className="about-service-copy">
                    <span className="about-service-tag">{service.tag}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <ArrowUpRight className="about-service-arrow" size={20} aria-hidden="true" />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-journal about-section">
        <div className="about-container">
          <div className="about-section-heading about-journal-heading">
            <div>
              <span className="about-eyebrow">03 / VISUAL JOURNAL</span>
              <h2>
                Life beyond
                <br />
                the <em>screen.</em>
              </h2>
            </div>
            <p>
              A few personal moments from my journey through technology,
              content creation, and everyday life.
            </p>
          </div>

          <div className="about-journal-grid">
            {journal.map((item, index) => (
              <ScrollReveal key={item.image} direction="up" delay={index * 55}>
                <figure className={`about-journal-card ${item.className || ""}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-beyond about-section">
        <div className="about-container about-beyond-inner">
          <div>
            <span className="about-eyebrow">04 / OUTSIDE WORK</span>
            <h2>
              Always room for
              <br />
              <em>curiosity.</em>
            </h2>
          </div>
          <div className="about-interest-list">
            {interests.map((interest) => (
              <div className="about-interest" key={interest.label}>
                <span>{interest.icon}</span>
                <span>{interest.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta about-section">
        <div className="about-container about-cta-inner">
          <span className="about-eyebrow">05 / LET’S CONNECT</span>
          <div className="about-cta-row">
            <h2>
              Have a good
              <br />
              idea? <em>Let’s build.</em>
            </h2>
            <div className="about-cta-copy">
              <p>
                Have a project, a creative idea, or a problem to solve?
                I’d be glad to hear about it.
              </p>
              <Link to="/contact" className="about-button">
                Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
