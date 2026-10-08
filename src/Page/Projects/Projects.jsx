import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Projects.css";

const projects = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "BharatTouch",
    description:
      "A full-stack web platform where I worked across the user panel, admin panel and database-driven functionality using ASP.NET MVC and MySQL.",
    tech: ["ASP.NET MVC", "MySQL"],
    link: "https://bharattouch.com/",
  },
  {
    number: "02",
    category: "API DEVELOPMENT",
    title: "BONC Network",
    description:
      "Backend and API development for a web platform, built with ASP.NET Core and MySQL.",
    tech: ["ASP.NET Core", "MySQL"],
    link: "https://www.boncnetwork.com/",
  },
  {
    number: "03",
    category: "FULL-STACK DEVELOPMENT",
    title: "Eagle Eye Car Rental",
    description:
      "Worked on the admin panel and database-driven functionality, contributing to the full-stack implementation using ASP.NET and MySQL.",
    tech: ["ASP.NET", "MySQL"],
    link: "https://eaglecarrental.singhfarmfresh.in/",
  },
  {
    number: "04",
    category: "FULL-STACK DEVELOPMENT",
    title: "PatrolX",
    description:
      "A security management platform where I worked across the backend and full-stack implementation using ASP.NET MVC and MySQL.",
    tech: ["ASP.NET MVC", "MySQL"],
    link: "https://www.patrolx.app/",
  },
  {
    number: "05",
    category: "REACT / PERSONAL BRAND",
    title: "Faiz Alam Portfolio",
    description:
      "A personal portfolio website built with React to showcase my software development work, creative projects and digital experiences.",
    tech: ["React"],
    link: "https://justfaizalam.vercel.app/",
  },
];

function Projects() {
  return (
    <div className="projects-page">

      <SEO
        title="Projects | Faiz Alam"
        description="Explore projects by Faiz Alam, including React applications, .NET software solutions, web development projects, digital products and creative web experiences."
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

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-item-link"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowUpRight size={22} />
                </a>

              </article>
            </ScrollReveal>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Projects;