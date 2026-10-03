import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}

      <section className="home-hero">

        <div className="hero-background">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
        </div>

        <div className="home-container">

          <div className="hero-label">
            <span />
            SOFTWARE ENGINEER · CREATOR · BUILDER
          </div>

          <h1>
            I build digital
            <br />
            experiences that
            <span> matter.</span>
          </h1>

          <p className="hero-description">
            I'm Faiz Alam — a software engineer and digital
            creator focused on building meaningful products,
            websites and ideas.
          </p>

          <div className="hero-actions">

            <Link
              to="/projects"
              className="primary-btn"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/about"
              className="secondary-btn"
            >
              More about me
            </Link>

          </div>

          <div className="hero-scroll">
            <ArrowDown size={15} />
            Scroll to explore
          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="home-intro">

        <div className="home-container">

          <div className="section-mini-label">
            01 / INTRODUCTION
          </div>

          <div className="intro-content">

            <h2>
              Turning ideas into
              <em> digital reality.</em>
            </h2>

            <div>

              <p>
                I work across development, design and
                content to create experiences that are
                functional, thoughtful and memorable.
              </p>

              <Link to="/about">
                Discover my story
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* FEATURED WORK */}

      <section className="featured-work">

        <div className="home-container">

          <div className="section-heading-row">

            <div>
              <span>02 / SELECTED WORK</span>

              <h2>
                Things I've
                <em> built.</em>
              </h2>
            </div>

            <Link to="/projects">
              View all projects
              <ArrowUpRight size={16} />
            </Link>

          </div>


          <div className="featured-grid">

            <Link
              to="/projects"
              className="featured-card featured-large"
            >
              <div className="project-number">
                01
              </div>

              <div className="project-info">
                <span>WEB DEVELOPMENT</span>

                <h3>
                  Modern Digital
                  <br />
                  Experiences
                </h3>
              </div>
            </Link>


            <Link
              to="/projects"
              className="featured-card"
            >
              <div className="project-number">
                02
              </div>

              <div className="project-info">
                <span>CREATIVE</span>

                <h3>
                  Personal
                  <br />
                  Brand
                </h3>
              </div>
            </Link>


            <Link
              to="/projects"
              className="featured-card"
            >
              <div className="project-number">
                03
              </div>

              <div className="project-info">
                <span>EXPERIMENT</span>

                <h3>
                  Ideas into
                  <br />
                  Products
                </h3>
              </div>
            </Link>

          </div>

        </div>

      </section>


      {/* PROFILE LINK */}

      <section className="profile-promo">

        <div className="home-container">

          <div className="profile-promo-inner">

            <div>
              <span>
                WANT TO KNOW ME BEYOND MY WORK?
              </span>

              <h2>
                Visit my
                <em> personal profile.</em>
              </h2>
            </div>

            <Link to="/profile">
              Open Profile
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;