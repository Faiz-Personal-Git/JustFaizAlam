import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./About.css";

function About() {
  return (
    <div className="about-page">

      <SEO
        title="About Faiz Alam — Software Engineer & Creator"
        description="Learn more about Faiz Alam, a Software Engineer, Creator and Builder focused on .NET, React, modern web development and digital projects."
        path="/about"
      />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">

          <ScrollReveal direction="up">
            <span className="about-label">
              01 / ABOUT
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1>
              More than
              <br />
              just <em>code.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p>
              I'm Faiz Alam — a software engineer,
              creator and someone who enjoys turning
              ideas into things people can actually use.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-container">

          <div className="about-grid">

            <ScrollReveal direction="left">
              <span className="about-label">
                MY APPROACH
              </span>
            </ScrollReveal>

            <div>

              <ScrollReveal direction="right" delay={100}>
                <h2>
                  I believe good digital work
                  should be <em>useful, clear
                  and memorable.</em>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p>
                  My work sits at the intersection of
                  technology, creativity and problem solving.
                  I enjoy building websites, applications
                  and digital experiences while continuously
                  learning new things.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <p>
                  Beyond development, I also work on content,
                  personal branding and creative projects.
                </p>
              </ScrollReveal>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">

          <ScrollReveal direction="up">
            <h2>
              Have something
              <br />
              <em>interesting</em> in mind?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={150}>
            <Link to="/contact">
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