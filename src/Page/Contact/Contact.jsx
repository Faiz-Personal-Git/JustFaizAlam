import { useRef, useState } from "react";

import {
  ArrowUpRight,
  Mail,
  Users,
  Megaphone,
  Code2,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Contact.css";

/* =====================================================
   SOCIAL LINKS
===================================================== */

const socialLinks = [
  {
    name: "Instagram",
    username: "@JustFaizAlam",
    url: "https://www.instagram.com/justfaizalam/",
    icon: FaInstagram,
  },

  {
    name: "YouTube",
    username: "@JustFaizAlam",
    url: "https://www.youtube.com/@JustFaizAlam",
    icon: FaYoutube,
  },

  {
    name: "LinkedIn",
    username: "Faiz Alam",
    url: "https://www.linkedin.com/in/justfaizalam/",
    icon: FaLinkedinIn,
  },

  {
    name: "X / Twitter",
    username: "@JustFaizAlam",
    url: "https://x.com/JustFaizAlam",
    icon: FaXTwitter,
  },
];

/* =====================================================
   ENQUIRY TYPES
===================================================== */

const enquiryTypes = [
  {
    id: "team",
    number: "01",
    icon: Users,
    title: "Join the Team",
    description:
      "Want to work with me? Apply for creative, research, editing and production roles.",
    label: "For Creators",
  },

  {
    id: "sponsor",
    number: "02",
    icon: Megaphone,
    title: "Brand Sponsorship",
    description:
      "Have a brand, product or campaign you'd like to feature in my content?",
    label: "For Brands",
  },

  {
    id: "project",
    number: "03",
    icon: Code2,
    title: "Project / Website",
    description:
      "Need a website, web application or custom digital solution for your business?",
    label: "For Projects",
  },
];

/* =====================================================
   FORM OPTIONS
===================================================== */

const roles = [
  "Video Editor",
  "Researcher / Writer",
  "Motion Designer / Animator",
  "Thumbnail Designer",
  "Social Media Manager",
  "Other",
];

const experienceOptions = [
  "Less than 1 year",
  "1–2 years",
  "2–4 years",
  "4+ years",
];

const availabilityOptions = [
  "Full-time",
  "Part-time",
  "Freelance",
  "Project based",
];

const sponsorshipTypes = [
  "YouTube Video Sponsorship",
  "Shorts / Reels",
  "Long-term Partnership",
  "Product Integration",
  "Brand Campaign",
  "Other",
];

const projectTypes = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "E-commerce Website",
  "Web Application",
  "Custom Development",
  "Other",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Prefer to discuss",
];

const sponsorshipBudgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Prefer to discuss",
];

/* =====================================================
   CONTACT
===================================================== */

function Contact() {
  const formSectionRef = useRef(null);

  const [activeForm, setActiveForm] = useState("team");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    role: "",
    experience: "",
    portfolio: "",
    availability: "",
    message: "",

    brandName: "",
    brandWebsite: "",
    socialLink: "",
    sponsorshipType: "",
    sponsorshipBudget: "",

    companyName: "",
    projectType: "",
    projectBudget: "",
    timeline: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});

  /* =====================================================
     EMAIL SUBJECT
  ===================================================== */

  const getEmailSubject = () => {
    if (activeForm === "team") {
      return "Team Enquiry – Faiz Alam";
    }

    if (activeForm === "sponsor") {
      return "Brand Sponsorship – Faiz Alam";
    }

    if (activeForm === "project") {
      return "Website Project Enquiry – Faiz Alam";
    }

    return "Enquiry – Faiz Alam";
  };

  /* =====================================================
     EMAIL BODY
  ===================================================== */

  const getEmailBody = () => {
    return `Hi Faiz,

I am contacting you regarding ${activeForm === "team"
        ? "joining your team."
        : activeForm === "sponsor"
          ? "a brand sponsorship opportunity."
          : "a website/project."
      }

Name:
${formData.name}

Email:
${formData.email}

Phone / WhatsApp:
${formData.phone}

Thank you.`;
  };

  /* =====================================================
     EMAIL LINK
  ===================================================== */

  const getEmailLink = () => {
    const subject = encodeURIComponent(
      getEmailSubject()
    );

    const body = encodeURIComponent(
      getEmailBody()
    );

    return `mailto:JustFaizAlam@gmail.com?subject=${subject}&body=${body}`;
  };

  /* =====================================================
     CATEGORY CHANGE
  ===================================================== */

  const handleTypeChange = (type) => {
    setActiveForm(type);
    setSubmitted(false);
    setErrors({});

    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  /* =====================================================
     INPUT CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  /* =====================================================
     VALIDATION
  ===================================================== */

  const validate = () => {
    const newErrors = {};

    /* COMMON */

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    /* TEAM */

    if (activeForm === "team") {
      if (!formData.role) {
        newErrors.role =
          "Please select a role.";
      }

      if (!formData.experience) {
        newErrors.experience =
          "Please select your experience.";
      }

      if (!formData.portfolio.trim()) {
        newErrors.portfolio =
          "Please add your portfolio link.";
      }

      if (!formData.availability) {
        newErrors.availability =
          "Please select your availability.";
      }

      if (!formData.message.trim()) {
        newErrors.message =
          "Tell me a little about yourself and your work.";
      }
    }

    /* SPONSOR */

    if (activeForm === "sponsor") {
      if (!formData.brandName.trim()) {
        newErrors.brandName =
          "Please enter your brand name.";
      }

      if (!formData.brandWebsite.trim()) {
        newErrors.brandWebsite =
          "Please enter your brand website.";
      }

      if (!formData.sponsorshipType) {
        newErrors.sponsorshipType =
          "Please select a sponsorship type.";
      }

      if (!formData.sponsorshipBudget) {
        newErrors.sponsorshipBudget =
          "Please select your expected budget.";
      }

      if (!formData.message.trim()) {
        newErrors.message =
          "Please tell me about the sponsorship opportunity.";
      }
    }

    /* PROJECT */

    if (activeForm === "project") {
      if (!formData.companyName.trim()) {
        newErrors.companyName =
          "Please enter your company/business name.";
      }

      if (!formData.projectType) {
        newErrors.projectType =
          "Please select a project type.";
      }

      if (!formData.projectBudget) {
        newErrors.projectBudget =
          "Please select your budget.";
      }

      if (!formData.timeline.trim()) {
        newErrors.timeline =
          "Please mention your expected timeline.";
      }

      if (!formData.projectDetails.trim()) {
        newErrors.projectDetails =
          "Please describe your project.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =====================================================
     SUBMIT
  ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    /*
      API WILL BE CONNECTED HERE LATER.
    */

    console.log("Enquiry submitted:", {
      type: activeForm,
      ...formData,
    });

    setSubmitted(true);

    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <div className="contact-page">

      <SEO
        title="Contact Faiz Alam | Collaborations & Projects"
        description="Contact Faiz Alam for brand collaborations, sponsorships, website development, software projects and creative digital work."
        path="/contact"
      />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="contact-hero">

        <div className="contact-container">

          <ScrollReveal direction="up">
            <span className="contact-eyebrow">
              01 / CONTACT
            </span>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            delay={100}
          >
            <h1>
              Let's make
              <br />
              something <em>great.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            delay={200}
          >
            <p>
              Whether you want to work with me,
              collaborate on a project, sponsor my
              content, or build something for your
              business — choose an option below.
            </p>
          </ScrollReveal>

        </div>

      </section>

      {/* =================================================
          ENQUIRY TYPES
      ================================================= */}

      <section className="enquiry-section">

        <div className="contact-container">

          <ScrollReveal direction="up">

            <div className="section-heading">

              <span>
                WHAT ARE YOU LOOKING FOR?
              </span>

              <h2>
                Start a <em>conversation.</em>
              </h2>

            </div>

          </ScrollReveal>

          <div className="enquiry-grid">

            {enquiryTypes.map(
              (item, index) => {

                const Icon = item.icon;

                const isActive =
                  activeForm === item.id;

                return (
                  <ScrollReveal
                    key={item.id}
                    direction="up"
                    delay={index * 100}
                  >

                    <button
                      type="button"
                      className={`enquiry-card ${isActive
                        ? "active"
                        : ""
                        }`}
                      onClick={() =>
                        handleTypeChange(
                          item.id
                        )
                      }
                    >

                      <div className="enquiry-card-top">

                        <span>
                          {item.number}
                        </span>

                        <Icon size={22} />

                      </div>

                      <div className="enquiry-card-content">

                        <small>
                          {item.label}
                        </small>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                      </div>

                      <ArrowUpRight
                        className="enquiry-arrow"
                        size={22}
                      />

                    </button>

                  </ScrollReveal>
                );
              }
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          FORM
      ================================================= */}

      <section
        className="contact-form-section"
        ref={formSectionRef}
      >

        <div className="contact-container">

          <div className="form-layout">

            <div className="form-intro">

              <span className="form-number">

                {activeForm === "team"
                  ? "01"
                  : activeForm === "sponsor"
                    ? "02"
                    : "03"}

              </span>

              <h2>

                {activeForm === "team" && (
                  <>
                    Join the
                    <br />
                    <em>team.</em>
                  </>
                )}

                {activeForm === "sponsor" && (
                  <>
                    Let's talk
                    <br />
                    <em>business.</em>
                  </>
                )}

                {activeForm === "project" && (
                  <>
                    Build something
                    <br />
                    <em>great.</em>
                  </>
                )}

              </h2>

              <p>

                {activeForm === "team" &&
                  "Tell me about yourself, your skills and the kind of work you want to do."}

                {activeForm === "sponsor" &&
                  "Tell me about your brand and what you'd like to create together."}

                {activeForm === "project" &&
                  "Tell me about your business, your idea and what you want to build."}

              </p>

            </div>

            <div className="form-wrapper">

              {submitted ? (

                <div className="success-box">

                  <div className="success-icon">
                    <CheckCircle2 size={34} />
                  </div>

                  <h3>
                    Enquiry received.
                  </h3>

                  <p>
                    Thanks for reaching out.
                    Your details have been
                    recorded successfully.
                    I'll get back to you as
                    soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrors({});
                    }}
                  >
                    Send another enquiry →
                  </button>

                </div>

              ) : (

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >

                  {/* COMMON DETAILS */}

                  <div className="form-section-title">

                    <span>
                      01
                    </span>

                    <h3>
                      Your details
                    </h3>

                  </div>

                  <div className="form-grid">

                    <FormInput
                      label="Full Name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />

                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />

                    <FormInput
                      label="Phone / WhatsApp"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>

                  {/* TEAM */}

                  {activeForm === "team" && (
                    <>

                      <div className="form-section-title">

                        <span>
                          02
                        </span>

                        <h3>
                          About your work
                        </h3>

                      </div>

                      <div className="form-grid">

                        <FormSelect
                          label="Role you're applying for"
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          options={roles}
                          error={errors.role}
                          required
                        />

                        <FormSelect
                          label="Experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          options={experienceOptions}
                          error={errors.experience}
                          required
                        />

                        <FormSelect
                          label="Availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          options={availabilityOptions}
                          error={errors.availability}
                          required
                        />

                        <FormInput
                          label="Portfolio / Work Link"
                          name="portfolio"
                          placeholder="https://..."
                          value={formData.portfolio}
                          onChange={handleChange}
                          error={errors.portfolio}
                          required
                        />

                      </div>

                      <FormTextarea
                        label="Tell me about yourself"
                        name="message"
                        placeholder="What do you do? What are you good at? Why would you like to work with me?"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        required
                      />

                    </>
                  )}

                  {/* SPONSOR */}

                  {activeForm === "sponsor" && (
                    <>

                      <div className="form-section-title">

                        <span>
                          02
                        </span>

                        <h3>
                          Brand details
                        </h3>

                      </div>

                      <div className="form-grid">

                        <FormInput
                          label="Brand / Company Name"
                          name="brandName"
                          placeholder="Your brand"
                          value={formData.brandName}
                          onChange={handleChange}
                          error={errors.brandName}
                          required
                        />

                        <FormInput
                          label="Brand Website"
                          name="brandWebsite"
                          placeholder="https://yourbrand.com"
                          value={formData.brandWebsite}
                          onChange={handleChange}
                          error={errors.brandWebsite}
                          required
                        />

                        <FormInput
                          label="Instagram / Social Link"
                          name="socialLink"
                          placeholder="https://instagram.com/..."
                          value={formData.socialLink}
                          onChange={handleChange}
                        />

                        <FormSelect
                          label="Sponsorship Type"
                          name="sponsorshipType"
                          value={
                            formData.sponsorshipType
                          }
                          onChange={handleChange}
                          options={
                            sponsorshipTypes
                          }
                          error={
                            errors.sponsorshipType
                          }
                          required
                        />

                        <FormSelect
                          label="Expected Budget"
                          name="sponsorshipBudget"
                          value={
                            formData.sponsorshipBudget
                          }
                          onChange={handleChange}
                          options={
                            sponsorshipBudgetOptions
                          }
                          error={
                            errors.sponsorshipBudget
                          }
                          required
                        />

                      </div>

                      <FormTextarea
                        label="Tell me about the campaign"
                        name="message"
                        placeholder="What are you promoting? What kind of collaboration are you looking for?"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        required
                      />

                    </>
                  )}

                  {/* PROJECT */}

                  {activeForm === "project" && (
                    <>

                      <div className="form-section-title">

                        <span>
                          02
                        </span>

                        <h3>
                          Project details
                        </h3>

                      </div>

                      <div className="form-grid">

                        <FormInput
                          label="Company / Business Name"
                          name="companyName"
                          placeholder="Your business"
                          value={
                            formData.companyName
                          }
                          onChange={
                            handleChange
                          }
                          error={
                            errors.companyName
                          }
                          required
                        />

                        <FormSelect
                          label="Project Type"
                          name="projectType"
                          value={
                            formData.projectType
                          }
                          onChange={
                            handleChange
                          }
                          options={
                            projectTypes
                          }
                          error={
                            errors.projectType
                          }
                          required
                        />

                        <FormSelect
                          label="Budget Range"
                          name="projectBudget"
                          value={
                            formData.projectBudget
                          }
                          onChange={
                            handleChange
                          }
                          options={
                            budgetOptions
                          }
                          error={
                            errors.projectBudget
                          }
                          required
                        />

                        <FormInput
                          label="Expected Timeline"
                          name="timeline"
                          placeholder="e.g. 3–4 weeks"
                          value={
                            formData.timeline
                          }
                          onChange={
                            handleChange
                          }
                          error={
                            errors.timeline
                          }
                          required
                        />

                      </div>

                      <FormTextarea
                        label="Tell me about your project"
                        name="projectDetails"
                        placeholder="What do you want to build? Tell me about your business, required pages/features and anything else I should know."
                        value={
                          formData.projectDetails
                        }
                        onChange={
                          handleChange
                        }
                        error={
                          errors.projectDetails
                        }
                        required
                      />

                    </>
                  )}

                  {/* SUBMIT */}

                  <button
                    className="submit-button"
                    type="submit"
                  >

                    <span>
                      Send enquiry
                    </span>

                    <ArrowUpRight size={20} />

                  </button>

                  <p className="privacy-note">
                    Your information is kept
                    private and will only be
                    used to respond to your
                    enquiry.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>
      {/* =================================================
          PROMOTION CRITERIA
      ================================================= */}

      <section className="promotion-criteria-section">

        <div className="contact-container">

          <ScrollReveal direction="up">

            <div className="promotion-criteria-card">

              <div className="promotion-criteria-heading">

                <span>
                  04 / PROMOTIONS
                </span>

                <h2>
                  Promotion <em>criteria.</em>
                </h2>

              </div>


              <div className="promotion-criteria-list">

                {/* POSITIVE */}

                <div className="promotion-criteria-item is-positive">

                  <span className="criteria-icon">
                    ✓
                  </span>

                  <p>
                    I only work with brands, products and services
                    that align with my audience and values.
                  </p>

                </div>


                <div className="promotion-criteria-item is-positive">

                  <span className="criteria-icon">
                    ✓
                  </span>

                  <p>
                    Preference goes to products that provide
                    genuine value and have a clear purpose.
                  </p>

                </div>


                <div className="promotion-criteria-item is-positive">

                  <span className="criteria-icon">
                    ✓
                  </span>

                  <p>
                    I expect transparent communication about the
                    brand, product and campaign.
                  </p>

                </div>


                {/* NEGATIVE */}

                <div className="promotion-criteria-item is-negative">

                  <span className="criteria-icon">
                    ×
                  </span>

                  <p>
                    No misleading claims, deceptive products or
                    promotions I would not personally stand behind.
                  </p>

                </div>


                <div className="promotion-criteria-item is-negative">

                  <span className="criteria-icon">
                    ×
                  </span>

                  <p>
                    No gambling, tobacco, adult products or other
                    harmful or restricted promotions.
                  </p>

                </div>


                <div className="promotion-criteria-item is-negative">

                  <span className="criteria-icon">
                    ×
                  </span>

                  <p>
                    No political party promotions or politically
                    motivated paid content.
                  </p>

                </div>


                <div className="promotion-criteria-item is-negative">

                  <span className="criteria-icon">
                    ×
                  </span>

                  <p>
                    No undisclosed promotional pitches. Please
                    clearly mention the brand and product in your enquiry.
                  </p>

                </div>

              </div>

            </div>


            {/* QUICK NOTE */}

            <div className="promotion-note">

              <div className="promotion-note-icon">
                <MessageCircle size={18} />
              </div>

              <p>
                <strong>A quick note:</strong>{" "}
                All enquiries submitted through this page are
                reviewed personally. Please provide complete and
                accurate details so I can understand your proposal
                without unnecessary follow-ups. For anything else, email <b style={{ color: "white" }}>
                  justfaizalam@gmail.com
                </b> directly and keep it short.
              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =================================================
          CONNECT
      ================================================= */}

      <section className="connect-section">

        <div className="contact-container">

          <ScrollReveal direction="up">

            <div className="connect-heading">

              <div>

                <span>
                  04 / CONNECT
                </span>

                <h2>
                  Find me
                  <br />
                  <em>online.</em>
                </h2>

              </div>

              <p>
                Have a question, want to collaborate,
                or just want to stay connected?
                Find me across my social platforms.
              </p>

            </div>

          </ScrollReveal>

          {/* =================================================
              SOCIAL LINKS
          ================================================= */}

          <div className="social-grid">

            {socialLinks.map(
              (social, index) => {

                const Icon = social.icon;

                return (
                  <ScrollReveal
                    key={social.name}
                    direction="up"
                    delay={index * 80}
                  >

                    <a
                      href={social.url}
                      className="social-card"
                    >

                      <div className="social-card-icon">

                        <Icon size={21} />

                      </div>

                      <div className="social-card-info">

                        <span>
                          {social.name}
                        </span>

                        <strong>
                          {social.username}
                        </strong>

                      </div>

                      <ArrowUpRight
                        className="social-card-arrow"
                        size={21}
                      />

                    </a>

                  </ScrollReveal>
                );
              }
            )}

          </div>

          {/* =================================================
              EMAIL + WHATSAPP
          ================================================= */}

          <div className="direct-contact-grid">

            {/* EMAIL */}

            <ScrollReveal
              direction="left"
              delay={100}
            >

              <a
                href={getEmailLink()}
                className="direct-contact-card"
              >

                <div className="direct-contact-icon">

                  <Mail size={22} />

                </div>

                <div className="direct-contact-info">

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    JustFaizAlam@gmail.com
                  </strong>

                </div>

                <ArrowUpRight
                  size={21}
                  className="direct-contact-arrow"
                />

              </a>

            </ScrollReveal>

            {/* WHATSAPP */}

            <ScrollReveal
              direction="right"
              delay={180}
            >

              <a
                href="https://wa.me/JustFaizAlam"
                className="direct-contact-card whatsapp-card"
              >

                <div className="direct-contact-icon">

                  <FaWhatsapp size={22} />

                </div>

                <div className="direct-contact-info">

                  <span>
                    WHATSAPP
                  </span>

                  <strong>
                    @JustFaizAlam
                  </strong>

                </div>

                <ArrowUpRight
                  size={21}
                  className="direct-contact-arrow"
                />

              </a>

            </ScrollReveal>

          </div>

          <div className="connect-bottom-line">

            <span>
              ENGINEER · CREATOR · DOCUMENTARY
            </span>

            <ExternalLink size={14} />

          </div>

        </div>

      </section>

    </div>
  );
}

/* =====================================================
   FORM INPUT
===================================================== */

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
}) {
  return (
    <div
      className={`form-field ${error ? "has-error" : ""
        }`}
    >

      <label htmlFor={name}>

        {label}

        {required && (
          <span>*</span>
        )}

      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && (
        <small>
          {error}
        </small>
      )}

    </div>
  );
}

/* =====================================================
   FORM SELECT
===================================================== */

function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
}) {
  return (
    <div
      className={`form-field ${error ? "has-error" : ""
        }`}
    >

      <label htmlFor={name}>

        {label}

        {required && (
          <span>*</span>
        )}

      </label>

      <div className="select-wrapper">

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >

          <option value="">
            Select an option
          </option>

          {options.map(
            (option) => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            )
          )}

        </select>

        <ChevronDown size={18} />

      </div>

      {error && (
        <small>
          {error}
        </small>
      )}

    </div>
  );
}

/* =====================================================
   FORM TEXTAREA
===================================================== */

function FormTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required,
}) {
  return (
    <div
      className={`form-field form-field-full ${error ? "has-error" : ""
        }`}
    >

      <label htmlFor={name}>

        {label}

        {required && (
          <span>*</span>
        )}

      </label>

      <textarea
        id={name}
        name={name}
        rows="6"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && (
        <small>
          {error}
        </small>
      )}

    </div>
  );
}

export default Contact;