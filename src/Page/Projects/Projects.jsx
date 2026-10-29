import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "BharatTouch",
    category: "Full-Stack Development",
    description:
      "A full-stack web platform with user and admin panels, database-driven functionality, and database-backed business workflows.",
    technologies: ["ASP.NET MVC", "MySQL"],
    image: "/Images/btlogo.svg",
    imageType: "logo",
    link: "https://bharattouch.com/",
  },
  {
    number: "02",
    title: "BONC Network",
    category: "API Development",
    description:
      "Backend and API development for a web platform, focused on structured data handling and reliable application functionality.",
    technologies: ["ASP.NET Core", "MySQL"],
    image: "/Images/bonclogo.svg",
    imageType: "logo",
    link: "https://www.boncnetwork.com/",
  },
  {
    number: "03",
    title: "Eagle Eye Car Rental",
    category: "Full-Stack Development",
    description:
      "A digital experience for a car rental business, designed to present services and essential information in a clear, accessible interface.",
    technologies: ["Web Development", "Responsive UI"],
    image: "/Images/eagleeye_logo.png",
    imageType: "preview",
    link: "https://eaglecarrental.singhfarmfresh.in/",
  },
  {
    number: "04",
    title: "PatrolX",
    category: "Business Software",
    description:
      "A workforce management platform supporting shift scheduling, attendance workflows, and operational visibility.",
    technologies: ["ASP.NET", "SQL Server"],
    image: "/Images/patrolxlogo.png",
    imageType: "logo",
    link: "https://www.patrolx.app/",
  },
  {
    number: "05",
    title: "GroopGo",
    category: "Web Platform",
    description:
      "A web platform focused on practical functionality, accessible user workflows, and a straightforward digital experience.",
    technologies: ["Web Development", "UI/UX"],
    image: "/Images/groopgologo.jpg",
    imageType: "preview",
    link: "https://www.groopgo.in/",
  },
  {
    number: "06",
    title: "Faiz Alam Portfolio",
    category: "Personal Brand",
    description:
      "A personal digital portfolio bringing together software engineering, selected work, content creation, and useful resources.",
    technologies: ["React", "Vite", "CSS"],
    image: "/Images/dp2.png",
    imageType: "preview",
    link: "https://justfaizalam.vercel.app/",
  },
];

function Projects() {
  return (
    <main className="projects-page">
      <SEO
        title="Projects & Selected Work | Faiz Alam"
        description="Explore selected web development, software engineering, API development, and digital platform projects by Faiz Alam."
        path="/projects"
      />

      <section className="projects-list about-section" id="projects-list">
        <div className="projects-container">
          <ScrollReveal direction="up">
            <div className="projects-list-heading">
              <div>
                <h1>
                  Selected <em>projects.</em>
                </h1>
              </div>

              <p>
                A closer look at the platforms, products, and development work
                behind each project.
              </p>
            </div>
          </ScrollReveal>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ScrollReveal
                key={project.number}
                direction="up"
                delay={index % 2 === 0 ? 0 : 80}
              >
                <article className="project-row">
                  <div className="project-row-number">{project.number}</div>

                  <div className="project-row-content">
                    <div className="project-row-meta">
                      <span>{project.category}</span>
                      <span>SELECTED WORK</span>
                    </div>

                    <h2>{project.title}</h2>

                    <p className="project-row-description">
                      {project.description}
                    </p>

                    <div className="project-tags">
                      {project.technologies.map((technology) => (
                        <span className="project-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    className={`project-visual project-visual-${project.imageType}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} website`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} ${
                        project.imageType === "logo"
                          ? "logo"
                          : "website preview"
                      }`}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.classList.add(
                          "project-visual-missing"
                        );
                      }}
                    />

                    <span className="project-visual-label">
                      {project.imageType === "logo" ? "BRAND" : "WEBSITE"}
                    </span>

                    <span className="project-visual-arrow">
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </span>
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="projects-end-note">
            <span />
            <p>GOOD IDEAS DESERVE GOOD EXECUTION.</p>
            <span />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
