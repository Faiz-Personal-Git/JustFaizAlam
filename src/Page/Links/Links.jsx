import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Links.css";
import { youtubeApi } from "../../data/youtubeApi";

const PROFILE_URL = "https://justfaizalam.vercel.app/";
const USERNAME = "@justfaizalam";
const REAL_NAME = "Faiz Alam";
const EMAIL = "JustFaizAlam@gmail.com";

const themes = [
  {
    id: "terracotta",
    name: "Burnt Sienna",
    color: "#B86645",
  },
  {
    id: "champagne",
    name: "Champagne Gold",
    color: "#B99A62",
  },
  {
    id: "emerald",
    name: "Deep Emerald",
    color: "#3F7565",
  },
  {
    id: "navy",
    name: "Midnight Navy",
    color: "#4D647D",
  },
  {
    id: "plum",
    name: "Royal Plum",
    color: "#806078",
  },
  {
    id: "espresso",
    name: "Espresso",
    color: "#795D4D",
  },
  {
    id: "charcoal",
    name: "Graphite",
    color: "#59615E",
  },
  {
    id: "rose",
    name: "Dusty Rose",
    color: "#A66F73",
  },
  {
    id: "white",
    name: "Pure White",
    color: "#FFFFFF",
  },
  {
    id: "black",
    name: "Midnight Black",
    color: "#111311",
  },
];

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/justfaizalam/",
    type: "instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/people/Faiz-Alam/61586561875916/",
    type: "facebook",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@JustFaizAlam",
    type: "youtube",
  },
  {
    name: "X",
    url: "https://x.com/JustFaizAlam",
    type: "x",
  },
];

const links = [
  {
    number: "01",
    title: "YouTube",
    subtitle: "Videos & conversations",
    url: "https://www.youtube.com/@JustFaizAlam",
    type: "youtube",
  },
  {
    number: "02",
    title: "Instagram",
    subtitle: "Moments & updates",
    url: "https://www.instagram.com/justfaizalam/",
    type: "instagram",
  },
  {
    number: "03",
    title: "Facebook",
    subtitle: "Connect with me",
    url: "https://www.facebook.com/people/Faiz-Alam/61586561875916/",
    type: "facebook",
  },
  {
    number: "04",
    title: "X",
    subtitle: "Thoughts & conversations",
    url: "https://x.com/JustFaizAlam",
    type: "x",
  },
];

/* =====================================================
   ICONS
===================================================== */

function Icon({ type }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="17.5"
          cy="6.5"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.25 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7.7v3h2.8v8h3.75Z"
        />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.5 15.7V8.3l6.4 3.7-6.4 3.7Z"
        />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m5 7 7 6 7-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "copy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="8"
          y="8"
          width="11"
          height="11"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "share") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18 8a3 3 0 1 0-2.83-4A3 3 0 0 0 15 5c0 .22.02.43.07.64L8.91 9.08A3 3 0 0 0 7 8a3 3 0 1 0 0 6c.7 0 1.34-.24 1.85-.65l6.16 3.44A3 3 0 0 0 15 18a3 3 0 1 0 .95-2.19l-6.14-3.43c.12-.37.19-.77.19-1.18 0-.38-.07-.75-.18-1.09l6.18-3.45C16.55 7.5 17.23 8 18 8Z"
        />
      </svg>
    );
  }

  if (type === "link") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M10 13a5 5 0 0 0 7.07.07l2-2A5 5 0 0 0 12 4l-1.15 1.15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 12 20l1.15-1.15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23.2 22h-6.2l-4.8-6.2L6.8 22H3.7l7.2-8.3L3.1 2h6.3l4.3 5.7L18.9 2Zm-1.1 17.9h1.7L8.6 4H6.8l11 15.9Z"
      />
    </svg>
  );
}


/* =====================================================
   FA LOGO
===================================================== */


function FALogo() {
  return (
    <Link
      to="/"
      className="fa-logo-link"
      aria-label="Go to Home page"
    >
      <div className="fa-logo">
        <svg
          viewBox="0 0 100 100"
          className="fa-logo-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="fa-new-f" d="M25 73V27H59" />
          <path className="fa-new-f" d="M25 29H58" />
          <path className="fa-new-f" d="M25 48H51" />
          <path className="fa-new-a" d="M43 73L64 27L85 73" />
          <path className="fa-new-a-bar" d="M52 54H76" />
          <path className="fa-new-accent" d="M69 19H84" />
          <circle className="fa-new-dot" cx="87" cy="19" r="3.5" />
        </svg>
      </div>
    </Link>
  );
}



/* =====================================================
   APP
===================================================== */

function App() {
  const [shareOpen, setShareOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [nativeShared, setNativeShared] = useState(false);
  const [latestVideo, setLatestVideo] = useState(null);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("fa-theme") || "terracotta";
  });

  const [themeOpen, setThemeOpen] = useState(false);


  /* =====================================================
     SAVE THEME
  ===================================================== */

  useEffect(() => {
    localStorage.setItem("fa-theme", theme);
  }, [theme]);


  useEffect(() => {
    let active = true;

    const fetchLatestVideo = async () => {
      try {
        const result = await youtubeApi.getVideos(1);

        if (active) {
          setLatestVideo(result.data?.[0] ?? null);
        }
      } catch (error) {
        console.error("Failed to load latest YouTube video:", error);
      }
    };

    fetchLatestVideo();

    // Refresh every 5 minutes.
    const intervalId = setInterval(fetchLatestVideo, 5 * 60 * 1000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  /* =====================================================
     OPEN LINK
  ===================================================== */

  const openLink = (url) => {
    if (!url) return;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };


  /* =====================================================
     COPY PROFILE URL
  ===================================================== */

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_URL);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);

    } catch (error) {
      try {
        const textarea = document.createElement("textarea");

        textarea.value = PROFILE_URL;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        textarea.remove();

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1800);

      } catch (fallbackError) {
        console.error(
          "Unable to copy URL:",
          fallbackError
        );
      }
    }
  };


  /* =====================================================
     NATIVE SHARE
  ===================================================== */

  const nativeShare = async () => {
    if (!navigator.share) return;

    try {
      await navigator.share({
        title: REAL_NAME,
        text: `Connect with ${REAL_NAME} — ${USERNAME}`,
        url: PROFILE_URL,
      });

      setNativeShared(true);

      setTimeout(() => {
        setNativeShared(false);
      }, 1800);

    } catch (error) {
      if (error?.name !== "AbortError") {
        console.error(
          "Native share failed:",
          error
        );
      }
    }
  };


  /* =====================================================
     SOCIAL SHARE
  ===================================================== */

  const shareTo = (type) => {
    const encodedUrl =
      encodeURIComponent(PROFILE_URL);

    const message =
      `Connect with ${REAL_NAME} — ${USERNAME}`;

    const encodedText =
      encodeURIComponent(message);

    const shareUrls = {
      x:
        `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,

      facebook:
        `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,

      whatsapp:
        `https://wa.me/?text=${encodeURIComponent(
          `${message}\n${PROFILE_URL}`
        )}`,

      linkedin:
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,

      email:
        `mailto:?subject=${encodeURIComponent(
          `${REAL_NAME} — ${USERNAME}`
        )}&body=${encodeURIComponent(
          `${message}\n\n${PROFILE_URL}`
        )}`,
    };

    if (!shareUrls[type]) return;

    if (type === "email") {
      window.location.href =
        shareUrls[type];

      return;
    }

    window.open(
      shareUrls[type],
      "_blank",
      "noopener,noreferrer"
    );
  };


  /* =====================================================
     EMAIL
  ===================================================== */

  const openEmail = () => {
    window.location.href =
      `mailto:${EMAIL}`;
  };


  /* =====================================================
     THEME
  ===================================================== */

  const selectTheme = (themeId) => {
    setTheme(themeId);
    setThemeOpen(false);
  };


  return (
    <div
      className={`page theme-${theme}`}
    >

      {/* =================================================
          PROFILE CARD
      ================================================= */}

      <main className="card">

        {/* =================================================
            TOP BAR
        ================================================= */}

        <header className="topbar">

          <FALogo />

          <div className="top-actions">

            {/* COLOR SWITCHER */}

            <div className="theme-picker">

              <button
                className="theme-trigger"
                onClick={() =>
                  setThemeOpen(!themeOpen)
                }
                aria-label="Change template color"
                type="button"
              >
                <span
                  className="theme-current-dot"
                />

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3a9 9 0 1 0 9 9c0-.55-.45-1-1-1h-2.1a2 2 0 0 1-1.41-.59l-.9-.9A2 2 0 0 0 14.17 9H12a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="7.5"
                    cy="13"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="11"
                    cy="17"
                    r="1"
                    fill="currentColor"
                  />
                  <circle
                    cx="16"
                    cy="15"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </button>


              {themeOpen && (
                <div className="theme-menu">

                  <div className="theme-menu-title">
                    TEMPLATE COLOR
                  </div>

                  <div className="theme-list">

                    {themes.map((item) => (
                      <button
                        key={item.id}
                        className={`theme-item ${theme === item.id
                          ? "active"
                          : ""
                          }`}
                        onClick={() =>
                          selectTheme(item.id)
                        }
                        type="button"
                      >

                        <span
                          className="theme-swatch"
                          style={{
                            background:
                              item.color,
                          }}
                        />

                        <span>
                          {item.name}
                        </span>

                        {theme === item.id && (
                          <b>✓</b>
                        )}

                      </button>
                    ))}

                  </div>

                </div>
              )}

            </div>


            {/* SHARE */}

            <button
              className="share-trigger"
              onClick={() =>
                setShareOpen(true)
              }
              aria-label="Share profile"
              type="button"
            >
              <Icon type="share" />
            </button>

          </div>

        </header>


        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero">

          <div className="portrait-wrap">

            <img
              src="/Images/dp.png"
              alt={REAL_NAME}
              className="portrait"
            />

            <div className="portrait-fade" />

            <div className="portrait-meta">
              <span>FA / 01</span>
              <span>{USERNAME.toUpperCase()}</span>
            </div>

          </div>


          <div className="identity">

            <div className="identity-label">

              <span className="label-line" />

              CREATIVE / PERSONAL

              <span className="label-line" />

            </div>


            <h1>
              Faiz
              <em>Alam</em>
            </h1>


            <div className="username">
              {USERNAME}
            </div>


            <p>
              A person whose knowledge,
              thoughts, and good deeds bring
              benefit and light to the world.
            </p>

          </div>

        </section>


        {/* =================================================
            SOCIAL TABS
        ================================================= */}

        <nav className="social-tabs">

          {socials.map((social) => (
            <button
              key={social.type}
              className={`social-tab ${social.type}`}
              onClick={() =>
                openLink(social.url)
              }
              type="button"
            >

              <span className="tab-icon">
                <Icon type={social.type} />
              </span>

              <span className="tab-name">
                {social.name}
              </span>

            </button>
          ))}

        </nav>


        {/* =================================================
            LINKS
        ================================================= */}

        <section className="links-section">

          <div className="section-heading">

            <span>
              ELSEWHERE
            </span>

            <div />

            <small>
              05
            </small>

          </div>


          <div className="links">

            {links.map((link) => (
              <button
                className={`link-card ${link.type}`}
                key={link.type}
                onClick={() =>
                  openLink(
                    link.type === "youtube"
                      ? latestVideo?.url || link.url
                      : link.url
                  )
                }
                type="button"
              >

                <span className="link-number">
                  {link.number}
                </span>


                <span className="link-platform">
                  <Icon type={link.type} />
                </span>



                <span className="link-content">
                  <strong>
                    {link.type === "youtube"
                      ? latestVideo?.title || "Latest YouTube video"
                      : link.title}
                  </strong>

                  <small>
                    {link.type === "youtube" && latestVideo
                      ? `${Number(latestVideo.views ?? 0).toLocaleString()} views · ${new Date(
                        latestVideo.publishedAt
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}`
                      : link.subtitle}
                  </small>
                </span>



                <span className="link-arrow">
                  ↗
                </span>

              </button>
            ))}


            {/* EMAIL */}

            <button
              className={`link-card email ${emailOpen
                ? "email-active"
                : ""
                }`}
              onClick={() =>
                setEmailOpen(!emailOpen)
              }
              type="button"
            >

              <span className="link-number">
                05
              </span>

              <span className="link-platform">
                <Icon type="mail" />
              </span>

              <span className="link-content">

                <strong>
                  Email
                </strong>

                <small>
                  {emailOpen
                    ? EMAIL
                    : "Let's talk directly"}
                </small>

              </span>

              <span className="link-arrow">
                {emailOpen ? "↓" : "↗"}
              </span>

            </button>


            {emailOpen && (
              <button
                className="email-open"
                onClick={openEmail}
                type="button"
              >

                <span>
                  {EMAIL}
                </span>

                <strong>
                  OPEN MAIL ↗
                </strong>

              </button>
            )}

          </div>

        </section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer>

          <div className="footer-brand">
            <span>F</span>
            <i>A</i>
          </div>

          <span>
            {USERNAME.toUpperCase()}
          </span>

          <div className="footer-line" />

          <span>
            2026
          </span>

        </footer>

      </main>


      {/* =================================================
          SHARE MODAL
      ================================================= */}

      {shareOpen && (
        <div
          className="share-overlay"
          onClick={() =>
            setShareOpen(false)
          }
        >

          <div
            className="share-sheet"
            onClick={(e) =>
              e.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
          >

            <div className="share-handle" />


            {/* HEADER */}

            <div className="share-header">

              <div className="share-title-wrap">

                <div className="share-eyebrow">
                  <span />
                  SHARE PROFILE
                  <span />
                </div>

                <h2>
                  Let people{" "}
                  <em>find you.</em>
                </h2>

                <p>
                  Share the complete profile
                  of {REAL_NAME}.
                </p>

              </div>


              <button
                className="close-share"
                onClick={() =>
                  setShareOpen(false)
                }
                aria-label="Close"
                type="button"
              >
                <span />
                <span />
              </button>

            </div>


            {/* URL */}

            <div className="profile-url-box">

              <div className="url-icon">
                <Icon type="link" />
              </div>

              <div className="url-content">

                <span>
                  PROFILE LINK
                </span>

                <strong>
                  {PROFILE_URL}
                </strong>

              </div>


              <button
                className={`url-copy ${copied ? "success" : ""
                  }`}
                onClick={copyLink}
                type="button"
              >

                <Icon type="copy" />

                <span>
                  {copied
                    ? "COPIED"
                    : "COPY"}
                </span>

              </button>

            </div>


            {/* PREVIEW */}

            <div className="share-preview">

              <div className="preview-glow one" />
              <div className="preview-glow two" />


              <div className="preview-top">

                <div className="preview-mark">

                  <span>F</span>
                  <i>A</i>
                  <b />

                </div>

                <span>
                  PROFILE / 01
                </span>

              </div>


              <div className="preview-main">

                <div className="preview-image">

                  <img
                    src="/Images/dp.png"
                    alt={REAL_NAME}
                  />

                </div>


                <div className="preview-info">

                  <small>
                    {USERNAME.toUpperCase()}
                  </small>

                  <h3>
                    Faiz
                    <em>Alam</em>
                  </h3>

                  <p>
                    {USERNAME}
                  </p>

                </div>

              </div>


              <div className="preview-bottom">

                <span>
                  CONNECT · FOLLOW · SHARE
                </span>

                <span>
                  FA
                </span>

              </div>

            </div>


            {/* NATIVE SHARE */}

            {"share" in navigator && (
              <button
                className="native-share"
                onClick={nativeShare}
                type="button"
              >

                <span className="native-share-icon">
                  <Icon type="share" />
                </span>

                <span>
                  {nativeShared
                    ? "Profile shared!"
                    : "Share via device"}
                </span>

                <span className="native-share-arrow">
                  →
                </span>

              </button>
            )}


            {/* SHARE OPTIONS */}

            <div className="share-section-label">

              <span>
                SHARE ON
              </span>

              <div />

            </div>


            <div className="share-options">

              <button
                className={`share-option copy ${copied ? "is-copied" : ""
                  }`}
                onClick={copyLink}
                type="button"
              >

                <span className="option-icon">

                  <Icon type="copy" />

                  {copied && (
                    <span className="option-check">
                      ✓
                    </span>
                  )}

                </span>

                <span>
                  {copied
                    ? "Copied"
                    : "Copy link"}
                </span>

              </button>


              <button
                className="share-option"
                onClick={() =>
                  shareTo("x")
                }
                type="button"
              >

                <span className="option-icon x-icon">
                  X
                </span>

                <span>
                  X
                </span>

              </button>


              <button
                className="share-option"
                onClick={() =>
                  shareTo("facebook")
                }
                type="button"
              >

                <span className="option-icon facebook-icon">
                  <Icon type="facebook" />
                </span>

                <span>
                  Facebook
                </span>

              </button>


              <button
                className="share-option"
                onClick={() =>
                  shareTo("whatsapp")
                }
                type="button"
              >

                <span className="option-icon whatsapp-icon">
                  W
                </span>

                <span>
                  WhatsApp
                </span>

              </button>


              <button
                className="share-option"
                onClick={() =>
                  shareTo("linkedin")
                }
                type="button"
              >

                <span className="option-icon linkedin-icon">
                  in
                </span>

                <span>
                  LinkedIn
                </span>

              </button>


              <button
                className="share-option"
                onClick={() =>
                  shareTo("email")
                }
                type="button"
              >

                <span className="option-icon email-share-icon">
                  <Icon type="mail" />
                </span>

                <span>
                  Email
                </span>

              </button>

            </div>


            {/* FOOTER */}

            <div className="share-footer">

              <span>
                {USERNAME.toUpperCase()}
              </span>

              <div />

              <span>
                FAIZ ALAM
              </span>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;