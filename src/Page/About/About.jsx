import { ArrowUpRight, Code2, Film, Mic2, Camera, Laptop, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";
import "./About.css";

const thingsIDo = [
  {
    number: "01",
    icon: <Code2 size={22} />,
    title: "Software Development",
    text: "I build modern websites, web applications and digital products using technologies like .NET, React and modern web tools.",
  },
  {
    number: "02",
    icon: <Film size={22} />,
    title: "Content Creation",
    text: "I create videos, documentaries and digital content with a focus on storytelling, research and visual presentation.",
  },
  {
    number: "03",
    icon: <Laptop size={22} />,
    title: "Freelance Projects",
    text: "I work with clients to turn ideas into practical websites, applications and digital experiences.",
  },
];

const interests = [
  {
    icon: <Film size={20} />,
    title: "Acting",
    text: "I have always been interested in acting and expressing stories through performance.",
  },
  {
    icon: <Mic2 size={20} />,
    title: "Singing",
    text: "Music and singing are another creative side of me that I enjoy exploring.",
  },
  {
    icon: <Camera size={20} />,
    title: "Photography",
    text: "I enjoy visual storytelling, cinematic frames and experimenting with different looks.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "YouTube",
    text: "YouTube gives me a place to combine research, storytelling, creativity and technology.",
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1638868807622-0be3caf7b811?auto=format&fit=crop&w=1400&q=85",
    title: "Creative Side",
    category: "LIFE",
    large: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1729702756909-99766ef73604?auto=format&fit=crop&w=1000&q=85",
    title: "Creating",
    category: "CONTENT",
  },
  {
    image:
      "https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=1000&q=85",
    title: "Development",
    category: "TECH",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85",
    title: "Music",
    category: "MUSIC",
  },
  {
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=1200&q=85",
    title: "Behind The Scenes",
    category: "CREATIVE",
  },
];

function About() {
  return (
    <div className="about-page">
      <SEO
        title="About Faiz Alam | Software Engineer & Creator"
        description="Learn more about Faiz Alam, a software engineer, YouTuber, freelancer and digital creator working across software development, technology, storytelling and creative projects."
        path="/about"
      />

      {/* =========================
          HERO
      ========================== */}
      <section className="about-hero">
        <div className="about-container">
          <ScrollReveal direction="up">
            <span className="about-label">01 / ABOUT ME</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1>
              More than
              <br />
              just <em>code.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="about-hero-text">
              I'm Faiz Alam — a software developer, YouTuber, freelancer and
              creative person who enjoys turning ideas into things people can
              actually experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================
          PROFILE
      ========================== */}
      <section className="about-profile">
        <div className="about-container">
          <div className="profile-grid">
            <ScrollReveal direction="left">
              <div className="profile-image-wrap">
                <img
                  src="/Images/dp.png"
                  alt="Faiz Alam"
                  className="profile-image"
                />

                <div className="profile-image-tag">
                  <span>FA</span>
                  <span>FAIZ ALAM</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="profile-content">
              <ScrollReveal direction="right">
                <span className="about-label">A LITTLE ABOUT ME</span>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={100}>
                <h2>
                  Hi, I'm <em>Faiz.</em>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p>
                  I'm a software developer who enjoys building websites,
                  applications and digital products. Technology is a big part
                  of what I do, but it isn't the only thing I'm interested in.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <p>
                  I'm also a YouTuber and content creator. I enjoy researching
                  ideas, creating videos and telling stories in a way that
                  keeps people interested.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <p>
                  Alongside development and content creation, I work on
                  freelance projects where I help people and businesses turn
                  their ideas into websites and useful digital experiences.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={500}>
                <p>
                  And outside of work, I have a strong interest in acting,
                  singing and music. For me, creativity doesn't really belong
                  to just one category.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT I DO
      ========================== */}
      <section className="about-services">
        <div className="about-container">
          <div className="section-heading-row">
            <ScrollReveal direction="left">
              <span className="about-label">02 / WHAT I DO</span>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="section-small-text">
                Different skills. One direction — creating things that
                actually matter.
              </p>
            </ScrollReveal>
          </div>

          <div className="services-list">
            {thingsIDo.map((item, index) => (
              <ScrollReveal
                direction="up"
                delay={index * 100}
                key={item.number}
              >
                <div className="service-item">
                  <div className="service-number">{item.number}</div>

                  <div className="service-icon">{item.icon}</div>

                  <div className="service-main">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>

                  <ArrowUpRight className="service-arrow" size={22} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          BEYOND WORK
      ========================== */}
      <section className="about-interests">
        <div className="about-container">
          <ScrollReveal direction="up">
            <span className="about-label">03 / BEYOND WORK</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2 className="interests-heading">
              There's more to me
              <br />
              than <em>work.</em>
            </h2>
          </ScrollReveal>

          <div className="interests-grid">
            {interests.map((item, index) => (
              <ScrollReveal
                direction="up"
                delay={index * 100}
                key={item.title}
              >
                <div className="interest-card">
                  <div className="interest-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span className="interest-index">
                    0{index + 1}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          PHILOSOPHY
      ========================== */}
      <section className="about-philosophy">
        <div className="about-container">
          <ScrollReveal direction="up">
            <span className="about-label">04 / PHILOSOPHY</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <h2>
              I don't want to just
              <br />
              <em>build things.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250}>
            <p>
              I want to create things that people remember, use and connect
              with. Whether it's a website, a video, a story or something
              completely different, I believe the best work happens when
              technology and creativity come together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================
          GALLERY
      ========================== */}
      <section className="about-gallery">
        <div className="about-container">
          <div className="gallery-heading">
            <div>
              <ScrollReveal direction="left">
                <span className="about-label">05 / VISUALS</span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <h2>
                  A few things
                  <br />
                  I <em>love.</em>
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <p>
                A visual collection inspired by technology, creativity,
                music, filmmaking and the things I enjoy.
              </p>
            </ScrollReveal>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <ScrollReveal
                direction="up"
                delay={index * 80}
                key={`${item.title}-${index}`}
              >
                <div
                  className={`gallery-item ${item.large ? "gallery-large" : ""
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="gallery-overlay">
                    <div>
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>

                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <p className="gallery-note">
              *These are temporary visual references. My own photos will be
              added here later.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="about-cta">
        <div className="about-container">
          <ScrollReveal direction="up">
            <span className="about-label">06 / LET'S CONNECT</span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h2>
              Have something
              <br />
              <em>interesting</em> in mind?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <Link to="/contact" className="about-cta-button">
              Let's talk
              <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default About;