import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Play,
  Sparkles,
} from "lucide-react";

import videos from "../../data/videos";

import ScrollReveal from "../../components/ScrollReveal";

import "./VideoDetail.css";

function VideoDetail() {
  const { videoId } = useParams();

  const video = videos.find(
    (item) => item.id === Number(videoId)
  );

  // =========================
  // VIDEO NOT FOUND
  // =========================

  if (!video) {
    return (
      <main className="video-detail-page">

        <div className="video-detail-container video-not-found">

          <ScrollReveal direction="up">

            <span>
              404 / VIDEO NOT FOUND
            </span>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <h1>
              This video doesn't exist.
            </h1>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <Link to="/videos">

              <ArrowLeft size={17} />

              Back to videos

            </Link>

          </ScrollReveal>

        </div>

      </main>
    );
  }


  // =========================
  // RESOURCE
  // =========================

  const resourcePath =
    `/Resources/${video.id}.pdf`;


  // =========================
  // RECOMMENDED VIDEOS
  // =========================

  const recommendedVideos = videos
    .filter(
      (item) =>
        item.id !== video.id &&
        item.category === video.category
    )
    .slice(0, 3);


  // =========================
  // QUIZ URL
  // =========================

  const quizPath =
    `/quiz/video/${video.id}`;


  return (
    <main className="video-detail-page">

      {/* =====================================================
          TOP / HERO
      ===================================================== */}

      <section className="video-detail-hero">

        <div className="video-detail-container">

          <ScrollReveal direction="left">

            <Link
              to="/videos"
              className="back-to-videos"
            >

              <ArrowLeft size={17} />

              All videos

            </Link>

          </ScrollReveal>


          <div className="video-detail-grid">

            {/* =========================
                LEFT - VIDEO INFO
            ========================= */}

            <ScrollReveal direction="left">

              <div className="video-detail-info">

                <div className="video-detail-meta">

                  <span>
                    VIDEO #
                    {String(video.id).padStart(
                      3,
                      "0"
                    )}
                  </span>

                  <span>/</span>

                  <span>
                    {video.category}
                  </span>

                </div>


                <ScrollReveal
                  direction="up"
                  delay={100}
                >

                  <h1>
                    {video.title}
                  </h1>

                </ScrollReveal>


                <ScrollReveal
                  direction="up"
                  delay={150}
                >

                  <div className="video-detail-subtitle">
                    {video.subtitle}
                  </div>

                </ScrollReveal>


                <ScrollReveal
                  direction="up"
                  delay={200}
                >

                  <p className="video-detail-description">
                    {video.description}
                  </p>

                </ScrollReveal>


                <ScrollReveal
                  direction="up"
                  delay={300}
                >

                  <div className="video-detail-actions">

                    {/* Watch on YouTube */}

                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="youtube-button"
                    >
                      Watch on YouTube

                      <ArrowUpRight
                        size={17}
                      />

                    </a>


                    {/* Take Quiz */}

                    <Link
                      to={quizPath}
                      className="take-quiz-button"
                    >
                      Take Quiz

                      <ArrowUpRight
                        size={17}
                      />

                    </Link>

                  </div>

                </ScrollReveal>

              </div>

            </ScrollReveal>


            {/* =========================
                RIGHT - YOUTUBE PLAYER
            ========================= */}

            <ScrollReveal
              direction="right"
              delay={150}
            >

              <div className="youtube-player-wrapper">

                <div className="youtube-player">

                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                </div>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          VIDEO NAVIGATION
      ===================================================== */}

      <section className="video-detail-navigation">

        <div className="video-detail-container">

          <ScrollReveal
            direction="up"
          >

            <a
              href="#video"
              className="detail-nav-item active"
            >
              <span>01</span>
              Video
            </a>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <Link
              to={quizPath}
              className="detail-nav-item"
            >
              <span>02</span>
              Quiz
            </Link>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <a
              href="#resources"
              className="detail-nav-item"
            >
              <span>03</span>
              Resources
            </a>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          QUIZ
      ===================================================== */}

      <section
        className="video-quiz-section"
        id="quiz"
      >

        <div className="video-detail-container">

          <ScrollReveal direction="up">

            <div className="quiz-card">

              {/* ICON */}

              <div className="quiz-card-icon">
                <Sparkles size={22} />
              </div>


              {/* CONTENT */}

              <div className="quiz-card-content">

                <span className="section-label">
                  TEST YOUR KNOWLEDGE
                </span>


                <h2>
                  One video.
                  <em>
                    {" "}
                    How much did you remember?
                  </em>
                </h2>


                <div className="quiz-pills">

                  <span>
                    Video #
                    {String(video.id).padStart(
                      3,
                      "0"
                    )}
                  </span>

                  <span>
                    10 Questions
                  </span>

                  <span>
                    Answers Explained
                  </span>

                </div>


                <p>
                  Test yourself with questions based
                  directly on this video. After every
                  answer, you'll see an explanation
                  along with links back to the original
                  video and source.
                </p>


                {/* START QUIZ */}

                <Link
                  to={quizPath}
                  className="video-detail-start-quiz"
                >
                  Start Quiz

                  <ArrowUpRight
                    size={17}
                  />

                </Link>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          RESOURCES
      ===================================================== */}

      <section
        className="resources-section"
        id="resources"
      >

        <div className="video-detail-container">

          <ScrollReveal direction="up">

            <div className="resources-header">

              <div>

                <span className="section-label">
                  RESEARCH & RESOURCES
                </span>

                <h2>
                  Behind
                  <em> the video.</em>
                </h2>

              </div>


              <p>
                References, documents and resources
                related to this video.
              </p>

            </div>

          </ScrollReveal>


          {/* RESOURCE PDF */}

          <ScrollReveal
            direction="up"
            delay={150}
          >

            <a
              href={resourcePath}
              target="_blank"
              rel="noreferrer"
              className="resource-item"
            >

              <div className="resource-icon">
                <FileText size={21} />
              </div>


              <div className="resource-info">

                <strong>
                  Video Resources
                </strong>

                <span>
                  {video.id}.pdf · Open document
                </span>

              </div>


              <ExternalLink size={20} />

            </a>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          RECOMMENDED VIDEOS
      ===================================================== */}

      {recommendedVideos.length > 0 && (

        <section className="recommended-section">

          <div className="video-detail-container">

            <ScrollReveal direction="up">

              <div className="recommended-header">

                <div>

                  <span className="section-label">
                    KEEP EXPLORING
                  </span>

                  <h2>
                    More to
                    <em> explore.</em>
                  </h2>

                </div>


                <Link to="/videos">

                  View all videos

                  <ArrowUpRight
                    size={17}
                  />

                </Link>

              </div>

            </ScrollReveal>


            <div className="recommended-grid">

              {recommendedVideos.map(
                (item, index) => (

                  <ScrollReveal
                    key={item.id}
                    direction="up"
                    delay={index * 120}
                  >

                    <Link
                      to={`/videos/${item.id}`}
                      className="recommended-card"
                    >

                      <div className="recommended-image">

                        <img
                          src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                          alt={item.title}
                          loading="lazy"
                        />

                        <div className="recommended-play">

                          <Play
                            size={16}
                            fill="currentColor"
                          />

                        </div>

                      </div>


                      <span className="recommended-number">
                        VIDEO #
                        {String(item.id).padStart(
                          3,
                          "0"
                        )}
                      </span>


                      <h3>
                        {item.title}
                      </h3>


                      <span className="recommended-link">

                        Explore video

                        <ArrowUpRight
                          size={15}
                        />

                      </span>

                    </Link>

                  </ScrollReveal>

                )
              )}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}

export default VideoDetail;