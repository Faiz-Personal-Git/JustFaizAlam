import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Digital Experiences",
    description:
      "Modern responsive websites and landing pages built with React.",
  },
  {
    number: "02",
    category: "PERSONAL BRAND",
    title: "Creator Portfolio",
    description:
      "Personal branding experiences designed to showcase people and their work.",
  },
  {
    number: "03",
    category: "PRODUCT",
    title: "Business Solutions",
    description:
      "Practical digital solutions focused on solving real business problems.",
  },
  {
    number: "04",
    category: "EXPERIMENT",
    title: "Creative Ideas",
    description:
      "Experimental projects exploring design, technology and storytelling.",
  },
];

function Projects() {
  return (
    <div className="projects-page">

      <SEO
        title="Projects — Faiz Alam"
        description="Explore projects built by Faiz Alam, including web applications, React projects, software solutions and creative digital experiences."
        path="/projects"
      />
      {/* HEADER */}
      <section className="projects-header">
        <div className="projects-container">

          <ScrollReveal direction="up">
            <span>
              01 / SELECTED WORK
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1>
              Projects &
              <br />
              <em>experiments.</em>
            </h1>
          </ScrollReveal>

        </div>
      </section>


      {/* PROJECTS */}
      <section className="projects-list">
        <div className="projects-container">

          {projects.map((project, index) => (
            <ScrollReveal
              key={project.number}
              direction="up"
              delay={index * 120}
            >
              <article className="project-item">

                <span className="project-item-number">
                  {project.number}
                </span>

                <div className="project-item-content">

                  <span>
                    {project.category}
                  </span>

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>

                </div>

                <button type="button">
                  <ArrowUpRight size={22} />
                </button>

              </article>
            </ScrollReveal>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Projects;