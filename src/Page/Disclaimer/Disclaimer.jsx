
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

import SEO from "../../components/SEO";
import "./Disclaimer.css";

const sections = [
  {
    number: "01",
    heading: "General Information",
    paragraphs: [
      "Welcome to the personal website of Faiz Alam. This website contains information about software development, personal projects, documentaries, educational quizzes, research materials and other creative work.",
      "The content is provided for general informational and educational purposes. Although reasonable efforts may be made to maintain accuracy, no guarantee is given that all information is complete, current or free from errors."
    ]
  },
  {
    number: "02",
    heading: "Documentaries and Investigative Content",
    paragraphs: [
      "Documentaries and investigative content may discuss public figures, organisations, institutions, historical events, public controversies and matters of public interest.",
      "Content may include factual reporting, allegations attributed to sources, competing explanations, analysis and commentary. An allegation or reported claim should not automatically be interpreted as an established fact or a finding of a court or authority.",
      "Where sources are provided, viewers are encouraged to review the original material and consider its context. Research, evidence and interpretations may change as new information becomes available."
    ]
  },
  {
    number: "03",
    heading: "Research Sources and References",
    paragraphs: [
      "Research documents, source PDFs and external references are provided to help visitors explore topics further. The inclusion of a source does not necessarily mean that Faiz Alam endorses every statement, opinion or conclusion contained in it.",
      "External sources may be updated, moved, restricted or removed by their publishers. Their continued availability and accuracy cannot be guaranteed.",
      "Visitors should independently evaluate important claims and consult original records or qualified professionals where appropriate."
    ]
  },
  {
    number: "04",
    heading: "Educational Quizzes",
    paragraphs: [
      "Quizzes on this website are intended to support learning and help visitors review information covered in related content.",
      "Quiz questions, answers, explanations and scores may contain errors or simplifications. Quiz results are not professional assessments, formal qualifications or certifications, and should not be treated as a substitute for independent research."
    ]
  },
  {
    number: "05",
    heading: "Software Projects and Technical Information",
    paragraphs: [
      "Descriptions of software projects, technologies, development methods and digital products are provided for informational and portfolio purposes.",
      "Technology information may become outdated as software versions, APIs, platforms and development practices change. Any code, technical explanation or example should be evaluated and tested in the intended environment before being used in a production system."
    ]
  },
  {
    number: "06",
    heading: "No Professional Advice",
    paragraphs: [
      "Nothing on this website constitutes legal, medical, financial, investment or other regulated professional advice.",
      "Information about these subjects, if presented, is general in nature. Consult a suitably qualified professional for advice concerning your particular circumstances."
    ]
  },
  {
    number: "07",
    heading: "External Links and Third-Party Content",
    paragraphs: [
      "This website may link to or display content from third-party services, including YouTube, social media platforms, research publications and external project websites.",
      "Third-party websites and services operate independently and may have their own terms, privacy practices and editorial policies. Linking to a resource does not imply endorsement, ownership or control of that resource.",
      "Faiz Alam is not responsible for changes to third-party content or services, subject to applicable law."
    ]
  },
  {
    number: "08",
    heading: "Opinions and Interpretations",
    paragraphs: [
      "Opinions, commentary and interpretations expressed in content represent the perspective presented in that particular material and should be distinguished from independently verifiable facts.",
      "Content may be revised or corrected when appropriate. Readers are encouraged to consider multiple credible sources, especially when dealing with disputed or developing issues."
    ]
  },
  {
    number: "09",
    heading: "Limitation of Responsibility",
    paragraphs: [
      "You use this website and rely on its content at your own discretion. To the extent permitted by applicable law, no guarantee is made that the website will always be available, uninterrupted, secure or error-free.",
      "Nothing in this disclaimer excludes or limits any liability, right or remedy that cannot lawfully be excluded or limited."
    ]
  },
  {
    number: "10",
    heading: "Updates to This Disclaimer",
    paragraphs: [
      "This Disclaimer may be revised to reflect changes to the website, its content or applicable requirements. The latest version published on this page will apply from the date it is made available, subject to applicable law."
    ]
  },
  {
    number: "11",
    heading: "Contact",
    paragraphs: [
      "If you have a question about this Disclaimer, wish to report a factual error or want to raise a concern about published content, please get in touch."
    ]
  }
];

function Disclaimer() {
  return (
    <div className="disclaimer-page">
      <SEO
        title="Disclaimer | Faiz Alam"
        description="Read the disclaimer for Faiz Alam's website, including documentaries, research sources, educational quizzes, software projects and third-party content."
        path="/disclaimer"
      />

      <div className="disclaimer-container">
        <div className="disclaimer-topline">
          <span className="disclaimer-eyebrow">
            <ShieldCheck size={15} />
            FAIZ ALAM · WEBSITE DISCLAIMER
          </span>

          <span className="disclaimer-updated">
            LAST UPDATED: OCTOBER 16, 2026
          </span>
        </div>

        <header className="disclaimer-header">
          <Link to="/" className="disclaimer-back">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <span className="disclaimer-kicker">
            CLARITY · CONTEXT · RESPONSIBILITY
          </span>

          <h1>
            A note on
            <br />
            <em>what you read.</em>
          </h1>

          <p>
            Important information about the content, research,
            opinions and resources published on this website.
          </p>
        </header>

        <div className="disclaimer-layout">
          <aside className="disclaimer-sidebar">
            <span className="disclaimer-sidebar-label">
              ON THIS PAGE
            </span>

            {sections.map((section, index) => (
              <a
                href={`#disclaimer-section-${index + 1}`}
                key={section.number}
              >
                <span>{section.number}</span>
                {section.heading}
              </a>
            ))}
          </aside>

          <article className="disclaimer-content">
            {sections.map((section, index) => (
              <section
                className="disclaimer-section"
                id={`disclaimer-section-${index + 1}`}
                key={section.number}
              >
                <span className="disclaimer-section-number">
                  {section.number}
                </span>

                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="disclaimer-contact">
              <div>
                <span>FOUND AN ERROR OR HAVE A QUESTION?</span>
                <h3>Let's clear it up.</h3>
                <p>
                  Questions, corrections and constructive feedback
                  are welcome.
                </p>
              </div>

              <a href="mailto:justfaizalam@gmail.com">
                Get in touch
                <ArrowUpRight size={16} />
              </a>
            </div>

            <nav className="disclaimer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
              <Link to="/">Home</Link>
            </nav>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
