
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Copyright } from "lucide-react";

import SEO from "../../components/SEO";
import "./ContentUsage.css";

const sections = [
  {
    number: "01",
    heading: "Purpose of This Policy",
    paragraphs: [
      "This page explains how content published on the website of Faiz Alam may be accessed, shared, referenced and reused.",
      "The website includes documentary videos, original scripts, research documents, educational quizzes, written articles, graphics, thumbnails, software projects and other creative materials. Different materials may have different copyright owners and usage permissions."
    ]
  },
  {
    number: "02",
    heading: "Ownership of Original Content",
    paragraphs: [
      "Unless otherwise stated, original text, scripts, articles, website graphics, design elements and other creative materials created by Faiz Alam are intended to remain the intellectual property of their respective rights holders and are protected by applicable copyright laws.",
      "Publishing content on this website or on a public platform does not, by itself, grant permission to reproduce, adapt, redistribute or commercially exploit that content.",
      "Ownership of any particular item depends on its origin, applicable agreements, licences and the rights of other contributors."
    ]
  },
  {
    number: "03",
    heading: "Documentary Videos and Scripts",
    paragraphs: [
      "Documentary videos may include original narration, scripts, editing, graphics, animations, research and other creative elements.",
      "You may share links to publicly available videos and pages. However, downloading and re-uploading videos, copying complete scripts, reproducing substantial portions of a documentary or publishing edited versions as your own is not permitted without permission from the relevant rights holder, unless an applicable licence or law allows it.",
      "Brief quotations, criticism, commentary, reporting, education and other uses may be permitted in certain circumstances under applicable law. Whether a particular use is permitted depends on the specific facts and legal requirements."
    ]
  },
  {
    number: "04",
    heading: "Research PDFs, Sources and References",
    paragraphs: [
      "Research PDFs and source lists are provided to help visitors explore documentary topics and verify information.",
      "Original explanatory text, research compilations, layouts and other original elements may be protected by copyright. The underlying court judgments, government documents, published reports, news articles, photographs and other referenced works may belong to separate rights holders or be subject to their own legal terms.",
      "Access to a research PDF does not automatically grant permission to reproduce all material included or referenced in it. Check the original source, licence and applicable law before reusing third-party material."
    ]
  },
  {
    number: "05",
    heading: "Website Design, Graphics and Thumbnails",
    paragraphs: [
      "Original website layouts, visual designs, graphics, thumbnails, logos and other creative assets may be protected by intellectual property laws.",
      "Do not copy or republish these materials as your own, use them to impersonate Faiz Alam, or use them commercially without the necessary permission.",
      "A logo, image, font, stock asset or other element supplied by a third party may instead be governed by that provider's licence and terms."
    ]
  },
  {
    number: "06",
    heading: "Software Projects and Code",
    paragraphs: [
      "Software projects showcased on this website may contain original work, client work, collaborative work, open-source components or third-party libraries.",
      "A project description or screenshot does not imply that its source code is publicly licensed for reuse. Before copying, modifying, distributing or deploying any code, verify its ownership, licence and any applicable contractual restrictions.",
      "Open-source software and other licensed components remain subject to their respective licences. Nothing on this page overrides a valid licence that applies to a particular component."
    ]
  },
  {
    number: "07",
    heading: "What You May Do",
    paragraphs: [
      "Subject to applicable law and any relevant third-party terms, visitors may generally:"
    ],
    items: [
      "Share links to publicly available website pages and videos.",
      "Cite or reference published material with appropriate attribution and a link to the original source.",
      "Use short quotations where legally permitted, without misrepresenting the original meaning.",
      "Access publicly available educational resources for personal learning, subject to any specific terms attached to those resources."
    ]
  },
  {
    number: "08",
    heading: "Uses Requiring Permission",
    paragraphs: [
      "Unless permission is granted or an applicable law or licence allows the use, you should not:"
    ],
    items: [
      "Re-upload, republish or redistribute complete videos, scripts, articles or research documents.",
      "Sell, sublicense or commercially distribute original content or substantial portions of it.",
      "Remove copyright notices, attribution or ownership information to misrepresent the origin of material.",
      "Modify and republish content in a way that falsely suggests endorsement, authorship or affiliation.",
      "Use protected website assets, graphics or content in a competing product or service without the necessary rights."
    ]
  },
  {
    number: "09",
    heading: "Third-Party Content",
    paragraphs: [
      "This website may reference or display material owned by third parties, including YouTube videos, photographs, music, news excerpts, public documents, trademarks and software libraries.",
      "Such material is not automatically owned by Faiz Alam. Its use may be subject to separate copyright, licence, attribution or platform requirements.",
      "If you wish to reuse third-party material, contact the relevant rights holder or consult the applicable licence rather than assuming that its appearance on this website grants permission."
    ]
  },
  {
    number: "10",
    heading: "Requesting Permission",
    paragraphs: [
      "If you wish to reproduce, adapt, republish or commercially use original content and are unsure whether your intended use is permitted, contact me before proceeding.",
      "Please identify the specific content, provide its URL, explain how you intend to use it, state whether the use is commercial and include any relevant publication or distribution details.",
      "Permission must be confirmed by the appropriate rights holder. A request does not itself grant permission, and additional conditions may apply."
    ]
  },
  {
    number: "11",
    heading: "Reporting Copyright Concerns",
    paragraphs: [
      "If you believe material on this website infringes your copyright or other intellectual property rights, please send a notice to justfaizalam@gmail.com.",
      "Include the URL of the material, a description of the work you own or represent, an explanation of the concern and your contact information. Please provide sufficient information to allow the matter to be reviewed.",
      "Reports will be assessed on their circumstances and applicable law. Additional information may be requested before any action is taken."
    ]
  },
  {
    number: "12",
    heading: "Applicable Law and Updates",
    paragraphs: [
      "Copyright and content usage matters are subject to applicable laws, licences and contractual obligations. Nothing in this policy is intended to remove rights or exceptions provided by law.",
      "This page may be updated as website content, licensing arrangements or legal requirements change. The latest published version should be consulted for current guidance."
    ]
  }
];

function ContentUsage() {
  return (
    <div className="content-usage-page">
      <SEO
        title="Copyright & Content Usage | Faiz Alam"
        description="Learn how Faiz Alam's original documentaries, scripts, research resources, website graphics and software projects may be shared or reused."
        path="/content-usage"
      />

      <div className="content-usage-container">
        <div className="content-usage-topline">
          <span className="content-usage-eyebrow">
            <Copyright size={15} />
            FAIZ ALAM · CONTENT RIGHTS
          </span>

          <span className="content-usage-updated">
            LAST UPDATED: OCTOBER 16, 2026
          </span>
        </div>

        <header className="content-usage-header">
          <Link to="/" className="content-usage-back">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <span className="content-usage-kicker">
            CREATE · CREDIT · RESPECT
          </span>

          <h1>
            Respect the work.
            <br />
            <em>Credit the source.</em>
          </h1>

          <p>
            Guidelines for sharing, referencing and reusing the
            documentaries, research, creative work and digital
            materials published on this website.
          </p>
        </header>

        <div className="content-usage-layout">
          <aside className="content-usage-sidebar">
            <span className="content-usage-sidebar-label">
              ON THIS PAGE
            </span>

            {sections.map((section, index) => (
              <a
                href={`#content-usage-section-${index + 1}`}
                key={section.number}
              >
                <span>{section.number}</span>
                {section.heading}
              </a>
            ))}
          </aside>

          <article className="content-usage-content">
            {sections.map((section, index) => (
              <section
                className="content-usage-section"
                id={`content-usage-section-${index + 1}`}
                key={section.number}
              >
                <span className="content-usage-section-number">
                  {section.number}
                </span>

                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}

                {section.items && (
                  <ul>
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="content-usage-contact">
              <div>
                <span>NEED PERMISSION TO USE CONTENT?</span>
                <h3>Let's discuss it.</h3>
                <p>
                  Share the content link and explain your intended
                  use before reproducing or distributing it.
                </p>
              </div>

              <a
                href="mailto:justfaizalam@gmail.com?subject=Content%20Usage%20Permission%20Request"
              >
                Request permission
                <ArrowUpRight size={16} />
              </a>
            </div>

            <nav className="content-usage-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
              <Link to="/disclaimer">Disclaimer</Link>
              <Link to="/">Home</Link>
            </nav>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ContentUsage;
