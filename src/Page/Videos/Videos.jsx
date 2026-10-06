import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Play,
  Search,
} from "lucide-react";

import categories from "../../data/categories";
import videos from "../../data/videos";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Videos.css";

function Videos() {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [isCategoryOpen, setIsCategoryOpen] =
    useState(false);

  const categoryRef = useRef(null);

  /* =========================================
     CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  ========================================= */

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =========================================
     CATEGORY VIDEO COUNTS
  ========================================= */

  const categoryCounts = useMemo(() => {
    const counts = {};

    videos.forEach((video) => {
      const category = video.category
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");

      counts[category] =
        (counts[category] || 0) + 1;
    });

    return counts;
  }, []);

  /* =========================================
     SELECTED CATEGORY
  ========================================= */

  const selectedCategoryData =
    categories.find(
      (category) =>
        category.id === selectedCategory
    ) || categories[0];

  /* =========================================
     FILTER VIDEOS
  ========================================= */

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const normalizedVideoCategory =
        video.category
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-");

      const matchesCategory =
        selectedCategory === "all" ||
        normalizedVideoCategory ===
          selectedCategory;

      const searchText =
        search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        video.title
          .toLowerCase()
          .includes(searchText) ||
        video.subtitle
          .toLowerCase()
          .includes(searchText) ||
        video.category
          .toLowerCase()
          .includes(searchText) ||
        video.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(searchText)
        );

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [search, selectedCategory]);

  /* =========================================
     CATEGORY CHANGE
  ========================================= */

  const handleCategoryChange = (
    categoryId
  ) => {
    setSelectedCategory(categoryId);
    setIsCategoryOpen(false);
  };

  /* =========================================
     RESET
  ========================================= */

  const handleReset = () => {
    setSearch("");
    setSelectedCategory("all");
  };

  return (
    <main className="videos-page">

<SEO
  title="Videos — Faiz Alam"
  description="Watch videos by Faiz Alam covering technology, documentaries, current affairs, research and creative storytelling."
  path="/videos"
/>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="videos-hero">

        <div className="videos-container">

          <ScrollReveal direction="up">

            <div className="videos-hero-top">

              <span className="videos-eyebrow">
                VIDEO ARCHIVE
              </span>

              <span className="videos-count">
                {videos.length
                  .toString()
                  .padStart(2, "0")}{" "}
                VIDEOS
              </span>

            </div>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <div className="videos-hero-content">

              <h1>
                Stories,
                <br />
                <em>ideas</em> & things
                <br />
                I’m exploring.
              </h1>

              <p>
                A collection of videos, projects,
                experiments and ideas I’ve shared
                along the way.
              </p>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================
          VIDEO LIBRARY
      ===================================== */}

      <section className="videos-library">

        <div className="videos-container">

          {/* =================================
              SEARCH + CATEGORY
          ================================= */}

          <ScrollReveal direction="up">

            <div className="videos-toolbar">

              {/* SEARCH */}

              <div className="videos-search">

                <Search size={20} />

                <input
                  type="text"
                  placeholder="Search by title, topic or keyword..."
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                />

                {search && (
                  <button
                    type="button"
                    className="clear-search"
                    onClick={() =>
                      setSearch("")
                    }
                  >
                    Clear
                  </button>
                )}

              </div>


              {/* CATEGORY DROPDOWN */}

              <div
                className={`category-dropdown ${
                  isCategoryOpen
                    ? "open"
                    : ""
                }`}
                ref={categoryRef}
              >

                {/* SELECTED CATEGORY */}

                <button
                  type="button"
                  className="category-trigger"
                  onClick={() =>
                    setIsCategoryOpen(
                      (prev) => !prev
                    )
                  }
                >

                  <div className="category-trigger-left">

                    {selectedCategoryData?.icon &&
                      (() => {
                        const Icon =
                          selectedCategoryData.icon;

                        return (
                          <Icon size={17} />
                        );
                      })()}

                    <span>
                      {selectedCategoryData?.name ||
                        "All Topics"}
                    </span>

                  </div>

                  <ChevronDown
                    size={18}
                    className="category-chevron"
                  />

                </button>


                {/* DROPDOWN MENU */}

                {isCategoryOpen && (

                  <div className="category-menu">

                    {categories.map(
                      (category) => {

                        const Icon =
                          category.icon;

                        const count =
                          category.id ===
                          "all"
                            ? videos.length
                            : categoryCounts[
                                category.id
                              ] || 0;

                        const isActive =
                          selectedCategory ===
                          category.id;

                        return (
                          <button
                            type="button"
                            key={category.id}
                            className={`category-option ${
                              isActive
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              handleCategoryChange(
                                category.id
                              )
                            }
                          >

                            <div className="category-option-left">

                              <Icon size={17} />

                              <span>
                                {category.name}
                              </span>

                            </div>

                            <span className="category-count">
                              {count}
                            </span>

                          </button>
                        );
                      }
                    )}

                  </div>
                )}

              </div>

            </div>

          </ScrollReveal>


          {/* =================================
              RESULT INFO
          ================================= */}

          <ScrollReveal
            direction="up"
            delay={100}
          >

            <div className="videos-results-info">

              <span>
                {filteredVideos.length}{" "}
                {filteredVideos.length === 1
                  ? "video"
                  : "videos"}
              </span>


              {selectedCategory !==
                "all" && (
                <span className="active-filter">
                  {selectedCategoryData.name}
                </span>
              )}


              {search && (
                <span className="active-filter">
                  Search: "{search}"
                </span>
              )}

            </div>

          </ScrollReveal>


          {/* =================================
              VIDEO GRID
          ================================= */}

          {filteredVideos.length > 0 ? (

            <div className="videos-grid">

              {filteredVideos.map(
                (video, index) => (

                  <ScrollReveal
                    key={video.id}
                    direction="up"
                    delay={index * 100}
                  >

                    <article className="video-card">

                      {/* THUMBNAIL */}

                      <Link
                        to={`/videos/${video.id}`}
                        className="video-thumbnail"
                      >

                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.title}
                          loading="lazy"
                        />

                        <div className="video-overlay" />

                        <div className="video-number">
                          #
                          {video.id
                            .toString()
                            .padStart(3, "0")}
                        </div>

                        <div className="video-play">

                          <Play
                            size={20}
                            fill="currentColor"
                          />

                        </div>

                        <span className="video-duration">
                          {video.duration}
                        </span>

                      </Link>


                      {/* CONTENT */}

                      <div className="video-card-content">

                        <div className="video-card-meta">

                          <span>
                            {video.category}
                          </span>

                          <ArrowUpRight
                            size={17}
                          />

                        </div>


                        <h2>
                          {video.title}
                        </h2>


                        <p>
                          {video.subtitle}
                        </p>


                        {/* TAGS */}

                        <div className="video-tags">

                          {video.tags
                            .slice(0, 3)
                            .map((tag) => (
                              <span
                                key={tag}
                              >
                                {tag}
                              </span>
                            ))}

                        </div>


                        {/* =================================
                            THREE ACTION BUTTONS
                        ================================= */}

                        <div className="video-card-actions">

                          {/* QUIZ & SOURCES */}

                          <Link
                            to={`/videos/${video.id}`}
                            className="video-action quiz-source-btn"
                          >
                            Quiz & Sources

                            <ArrowUpRight
                              size={15}
                            />
                          </Link>


                          {/* WATCH */}

                          <a
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                            target="_blank"
                            rel="noreferrer"
                            className="video-action watch-btn"
                          >
                            Watch

                            <Play
                              size={14}
                              fill="currentColor"
                            />

                          </a>


                          {/* SOURCE PDF */}

                          <a
                            href={`/Resources/${video.id}.pdf`}
                            target="_blank"
                            rel="noreferrer"
                            className="video-action pdf-btn"
                          >
                            Source PDF

                            <FileText
                              size={14}
                            />

                          </a>

                        </div>

                      </div>

                    </article>

                  </ScrollReveal>

                )
              )}

            </div>

          ) : (

            /* =================================
               NO RESULTS
            ================================= */

            <ScrollReveal direction="up">

              <div className="videos-empty">

                <span>
                  NO RESULTS
                </span>

                <h2>
                  No videos found.
                </h2>

                <p>
                  Try another search term or
                  select a different category.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                >
                  Reset filters
                </button>

              </div>

            </ScrollReveal>

          )}

        </div>

      </section>

    </main>
  );
}

export default Videos;