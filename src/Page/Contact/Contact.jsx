import {
  ArrowUpRight,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="contact-container">

          <span>
            01 / CONTACT
          </span>

          <h1>
            Let's make
            <br />
            something <em>great.</em>
          </h1>

          <p>
            Have an idea, project or collaboration
            in mind? I'd love to hear about it.
          </p>

        </div>
      </section>


      <section className="contact-details">
        <div className="contact-container">

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


          <div className="contact-socials">

            <a
              href="https://www.instagram.com/justfaizalam/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={18} />
              Instagram
            </a>


            <a
              href="https://www.youtube.com/@JustFaizAlam"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={18} />
              YouTube
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Contact;