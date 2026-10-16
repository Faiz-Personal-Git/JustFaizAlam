
import LegalPage from "../../components/LegalPage";

const sections = [
  {
    heading: "Introduction",
    paragraphs: [
      "Welcome to the personal website of Faiz Alam. This website features personal and professional information, software development projects, documentary videos, educational quizzes and related research resources.",
      "This Privacy Policy explains how information may be collected, used and disclosed when you visit this website. By using the website, you acknowledge this policy."
    ]
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "The information collected depends on how you interact with the website."
    ],
    items: [
      "Information you voluntarily provide when contacting me by email, including your email address and message.",
      "Basic technical information that may be processed by the website hosting provider, such as IP address, browser type, device information and server logs.",
      "Usage information, if analytics or other measurement tools are enabled on the website."
    ]
  },
  {
    heading: "How We Use Information",
    paragraphs: [
      "Information may be used to respond to enquiries, consider documentary topic suggestions, maintain website functionality, troubleshoot technical issues and protect the website against misuse.",
      "Information will not be used for purposes materially different from those described here without an appropriate update or other lawful basis where required."
    ]
  },
  {
    heading: "Cookies and Similar Technologies",
    paragraphs: [
      "The website or its hosting and embedded third-party services may use cookies or similar technologies to support functionality, security or usage measurement.",
      "You can manage cookies through your browser settings. Blocking certain cookies may affect some website features. Where legally required, consent will be requested before using non-essential cookies."
    ]
  },
  {
    heading: "YouTube and External Websites",
    paragraphs: [
      "This website may link to YouTube videos, external websites, software projects and third-party resources. Opening those links may take you to services governed by their own privacy policies and terms.",
      "Embedded or externally loaded content may allow the relevant third party to collect information about your interaction. Please review the privacy policies of those services directly."
    ]
  },
  {
    heading: "Sharing of Information",
    paragraphs: [
      "Personal information is not sold for money. Information may be processed by hosting providers, service providers or other parties where necessary to operate the website, respond to lawful requests, protect rights or address security issues.",
      "Any such handling remains subject to applicable law and the relevant circumstances."
    ]
  },
  {
    heading: "Data Retention and Security",
    paragraphs: [
      "Information is retained only for as long as reasonably necessary for its purpose, subject to legal, security and operational requirements.",
      "Reasonable measures are used to protect information. However, no website or method of electronic transmission can guarantee absolute security."
    ]
  },
  {
    heading: "Your Privacy Rights",
    paragraphs: [
      "Depending on applicable law, you may have rights to request access to, correction of or deletion of your personal information, or to raise concerns about its processing.",
      "To make a privacy-related request, contact justfaizalam@gmail.com. Additional information may be required to verify your request."
    ]
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      "This website is not intended to knowingly collect personal information directly from children without appropriate authorisation where required by law. If you believe a child has provided personal information inappropriately, please contact me so the matter can be reviewed."
    ]
  },
  {
    heading: "Changes to This Policy",
    paragraphs: [
      "This Privacy Policy may be updated as the website, its features or applicable legal requirements change. The revised version will be published on this page with an updated revision date."
    ]
  },
  {
    heading: "Contact",
    paragraphs: [
      "For questions, requests or concerns regarding this Privacy Policy, email justfaizalam@gmail.com."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy matters. Here's how information is handled when you visit my website."
      updated="OCTOBER 16, 2026"
      path="/privacy-policy"
      sections={sections}
    />
  );
}
