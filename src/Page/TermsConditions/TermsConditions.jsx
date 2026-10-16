
import LegalPage from "../../components/LegalPage";

const sections = [
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "Welcome to the website of Faiz Alam. By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the website."
    ]
  },
  {
    heading: "About This Website",
    paragraphs: [
      "This website presents personal and professional information, software development projects, documentary content, educational quizzes and research materials.",
      "Features and content may be modified, added or discontinued as the website evolves."
    ]
  },
  {
    heading: "Intellectual Property",
    paragraphs: [
      "Unless otherwise stated, original website text, design elements, graphics and materials created for this website belong to Faiz Alam or their respective rights holders and are protected by applicable intellectual property laws.",
      "You may access and share links to publicly available pages for personal and informational purposes. You must not reproduce, redistribute, sell or commercially exploit original materials without appropriate permission, except where permitted by law.",
      "Third-party trademarks, videos, images and other materials remain the property of their respective owners."
    ]
  },
  {
    heading: "Documentaries and Educational Content",
    paragraphs: [
      "Documentaries, articles, quizzes and research resources are provided for educational and informational purposes. They may discuss historical events, public issues, technology and other subjects.",
      "Reasonable efforts may be made to provide sources and present information accurately. However, content may contain errors, omissions, interpretations or information that later changes. You should independently verify important claims using relevant sources.",
      "Content on this website is not a substitute for professional legal, medical, financial or other specialised advice."
    ]
  },
  {
    heading: "Quizzes and Learning Resources",
    paragraphs: [
      "Quizzes are intended to help visitors review and test their understanding of documentary topics. Results are for informational and educational purposes and are not a formal qualification or certification.",
      "You must not attempt to manipulate quiz functionality, interfere with scoring systems or use automated methods to disrupt the service."
    ]
  },
  {
    heading: "External Links and Third-Party Services",
    paragraphs: [
      "The website may link to YouTube, external projects, research publications and other third-party websites. These links are provided for convenience and further reference.",
      "I do not control third-party websites and cannot guarantee their content, availability, accuracy or privacy practices. Visiting an external website is at your own discretion and subject to its terms."
    ]
  },
  {
    heading: "Acceptable Use",
    paragraphs: [
      "When using this website, you agree not to:"
    ],
    items: [
      "Use the website for unlawful, fraudulent or misleading purposes.",
      "Attempt unauthorised access to the website, its server or related systems.",
      "Disrupt website functionality, introduce malicious code or interfere with other visitors.",
      "Copy or exploit protected content in a manner that violates applicable law or the rights of others.",
      "Misrepresent yourself as Faiz Alam or imply an endorsement that has not been given."
    ]
  },
  {
    heading: "Availability and Disclaimer",
    paragraphs: [
      "The website is provided on an 'as is' and 'as available' basis to the extent permitted by law. Continuous availability, error-free operation and compatibility with every device cannot be guaranteed.",
      "To the extent permitted by applicable law, no warranties are given regarding the completeness, reliability or suitability of website content for a particular purpose."
    ]
  },
  {
    heading: "Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Faiz Alam will not be liable for indirect or consequential losses arising from the use of, or inability to use, this website or reliance on its content.",
      "Nothing in these terms excludes or limits liability where such exclusion or limitation is prohibited by law."
    ]
  },
  {
    heading: "Privacy",
    paragraphs: [
      "Your use of this website is also subject to the Privacy Policy, which explains how information may be handled.",
      "Read the Privacy Policy for further details."
    ]
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "These Terms & Conditions may be revised as the website or applicable requirements change. Updates will be published on this page. Continued use of the website after an update takes effect may be subject to the revised terms, as permitted by law."
    ]
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These terms are intended to be interpreted in accordance with applicable laws of India. Any dispute will be handled by the competent courts or authorities having jurisdiction under applicable law."
    ]
  },
  {
    heading: "Contact",
    paragraphs: [
      "For questions about these Terms & Conditions, email justfaizalam@gmail.com."
    ]
  }
];

export default function TermsConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The guidelines for accessing, viewing and using this website and its content."
      updated="OCTOBER 16, 2026"
      path="/terms-and-conditions"
      sections={sections}
    />
  );
}
