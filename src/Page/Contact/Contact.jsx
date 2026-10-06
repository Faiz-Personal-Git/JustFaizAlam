import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

<SEO
  title="Contact Faiz Alam"
  description="Get in touch with Faiz Alam for software development, web projects, collaborations and creative work."
  path="/contact"
/>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container">

          <ScrollReveal direction="up">
            <span>
              01 / CONTACT
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1>
              Let's make
              <br />
              something <em>great.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p>
              Have an idea, project or collaboration
              in mind? I'd love to hear about it.
            </p>
          </ScrollReveal>

        </div>
      </section>


      {/* CONTACT DETAILS */}
      <section className="contact-details">
        <div className="contact-container">

          <ScrollReveal direction="up">
            <a
              href="mailto:JustFaizAlam@gmail.com"
              className="contact-email"
            >
              <Mail size={22} />

              <span>
                JustFaizAlam@gmail.com
              </span>

              <ArrowUpRight size={22} />
            </a>
          </ScrollReveal>


          <div className="contact-socials">

            <ScrollReveal direction="left" delay={100}>
              <a
                href="https://www.instagram.com/justfaizalam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={18} />
                Instagram
              </a>
            </ScrollReveal>


            <ScrollReveal direction="right" delay={200}>
              <a
                href="https://www.youtube.com/@JustFaizAlam"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube size={18} />
                YouTube
              </a>
            </ScrollReveal>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;