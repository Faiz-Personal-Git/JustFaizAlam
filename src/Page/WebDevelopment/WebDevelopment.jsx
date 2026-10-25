import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe,
  Layers3,
  LayoutTemplate,
  LifeBuoy,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import "./WebDevelopment.css";

const services = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Business Websites",
    description:
      "Professional websites for local businesses, clinics, salons, photographers, consultants and growing brands.",
    items: [
      "Custom page layouts",
      "Services and business information",
      "Contact and inquiry calls-to-action",
      "Mobile-responsive design",
    ],
  },
  {
    number: "02",
    icon: Rocket,
    title: "Landing Pages",
    description:
      "Focused landing pages designed to present an offer clearly and encourage visitors to take action.",
    items: [
      "Conversion-focused sections",
      "Product or service presentation",
      "Lead generation layout",
      "Performance-conscious build",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "React Development",
    description:
      "Interactive front-end interfaces and reusable components for modern web applications.",
    items: [
      "React components and pages",
      "API integration support",
      "Responsive interface development",
      "Maintainable component structure",
    ],
  },
  {
    number: "04",
    icon: Layers3,
    title: "Website Redesign",
    description:
      "Improve an existing website's visual consistency, mobile experience and usability.",
    items: [
      "UI and layout improvements",
      "Mobile usability review",
      "Content hierarchy",
      "Front-end refinements",
    ],
  },
  {
    number: "05",
    icon: Search,
    title: "Technical SEO Basics",
    description:
      "Help search engines understand your website with a structured technical and on-page foundation.",
    items: [
      "Page titles and descriptions",
      "Heading and internal-link structure",
      "Image optimization guidance",
      "Indexing-readiness checks",
    ],
  },
  {
    number: "06",
    icon: LifeBuoy,
    title: "Maintenance & Updates",
    description:
      "Keep an existing website updated with planned content changes, interface fixes and technical improvements.",
    items: [
      "Content and layout changes",
      "Bug investigation",
      "Small UI improvements",
      "Ongoing support options",
    ],
  },
];

const packages = [
  {
    name: "Starter",
    label: "FOR A SIMPLE ONLINE PRESENCE",
    price: "₹7,999",
    description:
      "For freelancers and small businesses that need a professional starting point.",
    features: [
      "Single-page website",
      "Responsive design",
      "Business contact section",
      "Basic on-page SEO setup",
      "One revision round",
    ],
    featured: false,
  },
  {
    name: "Business",
    label: "MOST VERSATILE",
    price: "₹19,999",
    description:
      "For businesses that need multiple pages and a stronger brand presentation.",
    features: [
      "Up to 5 standard pages",
      "Custom design direction",
      "Services and project sections",
      "Contact form integration",
      "Basic on-page SEO setup",
      "Two revision rounds",
    ],
    featured: true,
  },
  {
    name: "Custom",
    label: "BUILT AROUND YOUR SCOPE",
    price: "Let's discuss",
    description:
      "For custom React projects, advanced integrations and more complex requirements.",
    features: [
      "Requirements-based scope",
      "Custom React components",
      "API integration as needed",
      "Advanced UI requirements",
      "Milestone-based delivery",
    ],
    featured: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We discuss your business, audience, goals, reference websites and project requirements.",
  },
  {
    number: "02",
    title: "Scope & Proposal",
    description:
      "You receive a proposed scope, deliverables, estimated timeline and project pricing.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "The website is developed around the agreed direction, with feedback at planned stages.",
  },
  {
    number: "04",
    title: "Review & Handover",
    description:
      "We review the final work, address agreed revisions and prepare the website for handover.",
  },
];

const faqs = [
  {
    question: "Do you work with clients outside Ambala?",
    answer:
      "Yes. Projects can be discussed remotely with clients across India and internationally. The scope, communication method and working hours are agreed before work starts.",
  },
  {
    question: "Can you build a website for my local business?",
    answer:
      "Yes. Business websites can be planned for clinics, salons, photographers, consultants, shops and other local services. The final scope depends on your requirements.",
  },
  {
    question: "Are domain and hosting included in the package?",
    answer:
      "Unless specifically included in the written proposal, domain registration, hosting, paid software, third-party subscriptions and other external charges are separate.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. The current website can be reviewed first, then a redesign scope can be proposed. Access, source code and platform constraints may affect the estimate.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "The timeline depends on the number of pages, features, content readiness and feedback. A timeline is provided after the project requirements are understood.",
  },
  {
    question: "How do I get an exact quote?",
    answer:
      "Use the Request a Quote button and share your website type, required pages, key features, budget range and expected timeline. An exact estimate requires a defined scope.",
  },
];

function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState(0);

  const requestUrl = "/contact";

  return (
    <main className="webdev-page">
      <section className="webdev-hero">
        <div className="webdev-hero-grid" aria-hidden="true" />

        <div className="webdev-container webdev-hero-inner">
          <div className="webdev-hero-copy">
            <div className="webdev-eyebrow">
              <span />
              WEB DEVELOPMENT SERVICES
            </div>

            <h1>
              Websites built
              <br />
              for <em>real business.</em>
            </h1>

            <p>
              Thoughtful design, reliable front-end development and
              responsive experiences for local businesses, independent
              professionals and online brands.
            </p>

            <div className="webdev-hero-actions">
              <Link to={requestUrl} className="webdev-primary-button">
                Request a Quote
                <ArrowUpRight size={17} />
              </Link>

              <a href="#webdev-services" className="webdev-text-button">
                Explore Services
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="webdev-hero-points">
              <span>
                <Check size={14} /> Mobile-first approach
              </span>
              <span>
                <Check size={14} /> Clear project scope
              </span>
              <span>
                <Check size={14} /> Local & remote clients
              </span>
            </div>
          </div>

          <div className="webdev-hero-visual">
            <div className="webdev-visual-glow" />

            <div className="webdev-browser">
              <div className="webdev-browser-top">
                <div className="webdev-browser-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>yourbusiness.com</span>
                <ArrowUpRight size={14} />
              </div>

              <div className="webdev-browser-content">
                <div className="webdev-demo-nav">
                  <span>YOUR BRAND</span>
                  <div>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>

                <div className="webdev-demo-layout">
                  <div className="webdev-demo-copy">
                    <span>BUILT AROUND YOU</span>
                    <h2>
                      Make your
                      <br />
                      next move.
                    </h2>
                    <p>
                      A clear digital presence for a growing business.
                    </p>
                    <div className="webdev-demo-cta">LET'S CONNECT ↗</div>
                  </div>

                  <div className="webdev-demo-visual">
                    <div className="webdev-demo-orb" />
                    <div className="webdev-demo-panel">
                      <Code2 size={32} />
                      <span>DESIGN / DEVELOP / DELIVER</span>
                    </div>
                  </div>
                </div>

                <div className="webdev-demo-bottom">
                  <span>01 / RESPONSIVE</span>
                  <span>02 / CUSTOM</span>
                  <span>03 / MODERN</span>
                </div>
              </div>
            </div>

            <div className="webdev-floating-card webdev-float-top">
              <MonitorSmartphone size={18} />
              <div>
                <strong>Responsive</strong>
                <span>Across screen sizes</span>
              </div>
            </div>

            <div className="webdev-floating-card webdev-float-bottom">
              <ShieldCheck size={18} />
              <div>
                <strong>Built with care</strong>
                <span>Structure before shortcuts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="webdev-container webdev-hero-footer">
          <span>AMBALA · INDIA · REMOTE PROJECTS</span>
          <span>DESIGN / DEVELOPMENT / IMPROVEMENT</span>
        </div>
      </section>

      <section className="webdev-intro">
        <div className="webdev-container webdev-intro-grid">
          <div>
            <span className="webdev-section-label">THE APPROACH</span>
            <h2>
              More than a good-looking
              <br />
              <em>website.</em>
            </h2>
          </div>

          <div className="webdev-intro-copy">
            <p>
              Your website should explain what you do, build trust and
              make the next step clear. The focus is on combining
              visual quality with useful content, responsive layouts
              and a maintainable front-end.
            </p>

            <p>
              Whether you're a local business getting online or a
              brand improving an existing website, the work starts
              with your goals—not a one-size-fits-all template.
            </p>
          </div>
        </div>
      </section>

      <section
        className="webdev-services-section"
        id="webdev-services"
      >
        <div className="webdev-container">
          <div className="webdev-section-heading">
            <div>
              <span className="webdev-section-label">WHAT I CAN HELP WITH</span>
              <h2>Services built around your needs.</h2>
              <p>
                Choose a service or combine multiple areas into a custom scope.
              </p>
            </div>

            <span className="webdev-section-index">01 / SERVICES</span>
          </div>

          <div className="webdev-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="webdev-service-card" key={service.number}>
                  <div className="webdev-service-card-top">
                    <span className="webdev-service-icon">
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <span>{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link to={requestUrl} className="webdev-service-link">
                    Discuss this service
                    <ArrowUpRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="webdev-packages-section">
        <div className="webdev-container">
          <div className="webdev-section-heading">
            <div>
              <span className="webdev-section-label">STARTING POINTS</span>
              <h2>Clear packages. Custom possibilities.</h2>
              <p>
                These are indicative starting prices. Final pricing depends
                on the agreed scope and requirements.
              </p>
            </div>

            <span className="webdev-section-index">02 / PACKAGES</span>
          </div>

          <div className="webdev-package-grid">
            {packages.map((plan) => (
              <article
                className={
                  plan.featured
                    ? "webdev-package-card featured"
                    : "webdev-package-card"
                }
                key={plan.name}
              >
                {plan.featured && (
                  <div className="webdev-package-ribbon">
                    <Sparkles size={13} />
                    POPULAR CHOICE
                  </div>
                )}

                <span className="webdev-package-label">{plan.label}</span>
                <h3>{plan.name}</h3>
                <div className="webdev-package-price">{plan.price}</div>
                <p>{plan.description}</p>

                <div className="webdev-package-divider" />

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={requestUrl}
                  className={
                    plan.featured
                      ? "webdev-package-button primary"
                      : "webdev-package-button"
                  }
                >
                  {plan.name === "Custom"
                    ? "Discuss Your Project"
                    : "Request This Package"}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

          <p className="webdev-package-disclaimer">
            Prices are illustrative starting prices, not a binding quotation.
            Hosting, domain, paid services and third-party charges are separate
            unless explicitly included in the proposal.
          </p>
        </div>
      </section>

      <section className="webdev-process-section">
        <div className="webdev-container">
          <div className="webdev-section-heading">
            <div>
              <span className="webdev-section-label">HOW IT WORKS</span>
              <h2>A clear process from start to handover.</h2>
            </div>

            <span className="webdev-section-index">03 / PROCESS</span>
          </div>

          <div className="webdev-process-grid">
            {processSteps.map((step) => (
              <article className="webdev-process-card" key={step.number}>
                <span className="webdev-process-number">{step.number}</span>
                <div className="webdev-process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="webdev-fit-section">
        <div className="webdev-container webdev-fit-grid">
          <div className="webdev-fit-copy">
            <span className="webdev-section-label">WHO THIS IS FOR</span>
            <h2>
              From a local shop
              <br />
              to an online brand.
            </h2>
            <p>
              The right website depends on your business and your audience.
              Projects can be discussed with local businesses around Ambala
              and with clients working remotely.
            </p>

            <Link to={requestUrl} className="webdev-primary-button">
              Tell Me About Your Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="webdev-audience-grid">
            <div>
              <Globe size={22} />
              <h3>Local Businesses</h3>
              <p>Clinics, salons, shops, studios and service providers.</p>
            </div>

            <div>
              <Code2 size={22} />
              <h3>Startups & Brands</h3>
              <p>New digital products, landing pages and company websites.</p>
            </div>

            <div>
              <MonitorSmartphone size={22} />
              <h3>Creators & Freelancers</h3>
              <p>Personal portfolios, work showcases and lead generation.</p>
            </div>

            <div>
              <Zap size={22} />
              <h3>Existing Websites</h3>
              <p>Redesigns, front-end improvements and ongoing updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="webdev-faq-section">
        <div className="webdev-container webdev-faq-layout">
          <div className="webdev-faq-intro">
            <span className="webdev-section-label">COMMON QUESTIONS</span>
            <h2>Before we get started.</h2>
            <p>
              A few practical details about project scope, pricing and working
              together.
            </p>

            <Link to={requestUrl} className="webdev-faq-contact">
              Still have questions?
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="webdev-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  className={isOpen ? "webdev-faq-item open" : "webdev-faq-item"}
                  key={faq.question}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} />
                  </button>

                  {isOpen && <p>{faq.answer}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="webdev-final-cta">
        <div className="webdev-container webdev-final-inner">
          <div className="webdev-final-icon">
            <MessageCircle size={27} strokeWidth={1.5} />
          </div>

          <span className="webdev-section-label">LET'S TALK ABOUT YOUR PROJECT</span>
          <h2>
            Ready to build something
            <br />
            <em>worth showing?</em>
          </h2>
          <p>
            Share your idea, goals and requirements. We'll start by defining
            the right scope for your website.
          </p>

          <Link to={requestUrl} className="webdev-primary-button">
            Request a Quote
            <ArrowUpRight size={17} />
          </Link>

          <span className="webdev-final-note">
            No commitment required to discuss your project.
          </span>
        </div>
      </section>
    </main>
  );
}

export default WebDevelopment;