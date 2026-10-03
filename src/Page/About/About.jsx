import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <div className="about-container">

          <span className="about-label">
            01 / ABOUT
          </span>

          <h1>
            More than
            <br />
            just <em>code.</em>
          </h1>

          <p>
            I'm Faiz Alam — a software engineer,
            creator and someone who enjoys turning
            ideas into things people can actually use.
          </p>

        </div>

      </section>


      <section className="about-story">

        <div className="about-container">

          <div className="about-grid">

            <span className="about-label">
              MY APPROACH
            </span>

            <div>

              <h2>
                I believe good digital work
                should be <em>useful, clear
                and memorable.</em>
              </h2>

              <p>
                My work sits at the intersection of
                technology, creativity and problem solving.
                I enjoy building websites, applications
                and digital experiences while continuously
                learning new things.
              </p>

              <p>
                Beyond development, I also work on content,
                personal branding and creative projects.
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="about-cta">

        <div className="about-container">

          <h2>
            Have something
            <br />
            <em>interesting</em> in mind?
          </h2>

          <Link to="/contact">
            Let's talk
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;