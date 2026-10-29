import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

import {

  ArrowRight,

  ArrowUpRight,

  BookOpen,

  CalendarDays,

  Clock3,

  Download,

  FileText,

  Search,

  X,

} from "lucide-react";

import SEO from "../../components/SEO";

import resources from "../../data/resources";

import "./Resources.css";

const categories = [

  "All Resources",

  "Web Development",

  "Content Creation",

  "SEO & Growth",

  "Free Resources",

  "Tools & Reviews",

];

function Resources() {

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("All Resources");

  const [sortBy, setSortBy] = useState("latest");

  const featuredResource =

    resources.find((resource) => resource.featured) || resources[0];

  const filteredResources = useMemo(() => {

    const query = search.trim().toLowerCase();

    let result = resources.filter((resource) => {

      const searchableText = [

        resource.title,

        resource.description,

        resource.category,

        resource.type,

        ...(resource.tags || []),

      ]

        .join(" ")

        .toLowerCase();

      const matchesSearch =

        !query || searchableText.includes(query);

      const matchesCategory =

        activeCategory === "All Resources" ||

        resource.category === activeCategory;

      return matchesSearch && matchesCategory;

    });

    if (sortBy === "latest") {

      result = [...result].sort(

        (a, b) => new Date(b.date) - new Date(a.date)

      );

    }

    if (sortBy === "oldest") {

      result = [...result].sort(

        (a, b) => new Date(a.date) - new Date(b.date)

      );

    }

    if (sortBy === "title") {

      result = [...result].sort((a, b) =>

        a.title.localeCompare(b.title)

      );

    }

    return result;

  }, [search, activeCategory, sortBy]);

  const featuredIsVisible =

    !search.trim() && activeCategory === "All Resources";

  const clearFilters = () => {

    setSearch("");

    setActiveCategory("All Resources");

    setSortBy("latest");

  };

  const formatDate = (date) => {

    if (!date) return "Resource";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {

      day: "numeric",

      month: "short",

      year: "numeric",

    });

  };

  const getCategorySlug = (category) => {

    const categoryMap = {

      "Web Development": "tutorials",

      "Content Creation": "tutorials",

      "SEO & Growth": "tutorials",

      "Free Resources": "freebies",

      "Tools & Reviews": "reviews",

    };

    return categoryMap[category] || "tutorials";

  };

  const renderResourceCard = (resource, index) => (

    <article

      className="resource-card"

      key={resource.slug}

      style={{ "--card-index": index }}

    >

      <div className="resource-card-top">

        <span className="resource-type">

          <FileText size={13} />

          {resource.type}

        </span>

        <span className="resource-card-number">

          {String(index + 1).padStart(2, "0")}

        </span>

      </div>

      <div className="resource-card-content">

        <span className="resource-category-label">

          {resource.category}

        </span>

        <h3>{resource.title}</h3>

        <p>{resource.description}</p>

        {resource.tags?.length > 0 && (

          <div className="resource-tags">

            {resource.tags.slice(0, 3).map((tag) => (

              <span key={tag}>{tag}</span>

            ))}

          </div>

        )}

      </div>

      <div className="resource-card-meta">

        <span>

          <Clock3 size={14} />

          {resource.readTime}

        </span>

        <span>

          <CalendarDays size={14} />

          {formatDate(resource.date)}

        </span>

      </div>

      <div className="resource-card-footer">

        {resource.downloadUrl ? (

          <a

            className="resource-card-link"

            href={resource.downloadUrl}

            download

          >

            <Download size={16} />

            {resource.downloadLabel || "Download"}

            <ArrowUpRight size={15} />

          </a>

        ) : (

          <Link

            className="resource-card-link"

            to={`/resources/${resource.slug}`}

          >

            Read Resource

            <ArrowRight size={16} />

          </Link>

        )}

      </div>

    </article>

  );

  return (

    <>

      <SEO

        title="Free Resources, Tutorials & Tools | Faiz Alam"

        description="Explore practical web development tutorials, SEO guides, content creation resources, useful tools and free downloads by Faiz Alam."

        path="/resources"

      />

      <main className="resources-page">

        <section className="resources-container resources-featured-section">

          <div className="resources-section-heading">

            <div>

              <span className="resources-section-kicker">EDITOR'S PICK</span>

              <h2>Start with something useful.</h2>

            </div>

            <span className="resources-heading-index">01 / FEATURED</span>

          </div>

          {featuredIsVisible && featuredResource && (

            <article className="resources-featured-card">

              <div className="resources-featured-art">

                <div className="resources-featured-art-grid" />

                <div className="resources-featured-art-label">

                  FEATURED RESOURCE

                </div>

                <div className="resources-featured-art-center">

                  <span>01</span>

                  <BookOpen size={52} strokeWidth={1} />

                  <div className="resources-featured-art-line" />

                  <span>THE PRACTICAL GUIDE</span>

                </div>

                <div className="resources-featured-art-footer">

                  <span>RESEARCH</span>

                  <span>LEARN</span>

                  <span>BUILD</span>

                </div>

              </div>

              <div className="resources-featured-copy">

                <div className="resources-featured-meta">

                  <span>{featuredResource.category}</span>

                  <span>

                    <Clock3 size={14} />

                    {featuredResource.readTime}

                  </span>

                </div>

                <h3>{featuredResource.title}</h3>

                <p>{featuredResource.description}</p>

                <div className="resources-featured-bottom">

                  <span className="resources-featured-date">

                    Published {formatDate(featuredResource.date)}

                  </span>

                  <Link

                    to={`/resources/${featuredResource.slug}`}

                    className="resources-featured-link"

                  >

                    Read Featured Guide

                    <ArrowUpRight size={17} />

                  </Link>

                </div>

              </div>

            </article>

          )}

        </section>

        <section

          className="resources-library-section"

          id="resource-library"

        >

          <div className="resources-container">

            <div className="resources-section-heading resources-library-heading">

              <div>

                <span className="resources-section-kicker">

                  EXPLORE THE LIBRARY

                </span>

                <h2>Resources for your next move.</h2>

                <p>

                  Search guides, discover tools and find practical

                  resources for your work.

                </p>

              </div>

              <div className="resources-total-count">

                <strong>{String(resources.length).padStart(2, "0")}</strong>

                <span>RESOURCES</span>

              </div>

            </div>

            <div className="resources-controls">

              <label className="resources-search">

                <Search size={19} />

                <input

                  type="search"

                  value={search}

                  onChange={(event) => setSearch(event.target.value)}

                  placeholder="Search guides, tools, topics..."

                  aria-label="Search resources"

                />

                {search && (

                  <button

                    type="button"

                    onClick={() => setSearch("")}

                    aria-label="Clear search"

                  >

                    <X size={16} />

                  </button>

                )}

              </label>

              <label className="resources-sort">

                <span>Sort by</span>

                <select

                  value={sortBy}

                  onChange={(event) => setSortBy(event.target.value)}

                  aria-label="Sort resources"

                >

                  <option value="latest">Latest</option>

                  <option value="oldest">Oldest</option>

                  <option value="title">Title A–Z</option>

                </select>

              </label>

            </div>

            <div className="resources-filter-row" aria-label="Resource categories">

              {categories.map((category) => (

                <button

                  key={category}

                  type="button"

                  className={

                    activeCategory === category

                      ? "resources-filter active"

                      : "resources-filter"

                  }

                  onClick={() => setActiveCategory(category)}

                >

                  {category}

                </button>

              ))}

            </div>

            <div className="resources-results-bar">

              <span>

                Showing <strong>{filteredResources.length}</strong>{" "}

                {filteredResources.length === 1 ? "resource" : "resources"}

              </span>

              {(search || activeCategory !== "All Resources") && (

                <button

                  type="button"

                  onClick={clearFilters}

                  className="resources-clear-filters"

                >

                  Clear filters

                  <X size={14} />

                </button>

              )}

            </div>

            {filteredResources.length > 0 ? (

              <div className="resources-grid">

                {filteredResources.map((resource, index) =>

                  renderResourceCard(resource, index)

                )}

              </div>

            ) : (

              <div className="resources-empty-state">

                <div className="resources-empty-icon">

                  <Search size={26} />

                </div>

                <h3>No matching resources found</h3>

                <p>

                  Try a different keyword or choose another category.

                </p>

                <button type="button" onClick={clearFilters}>

                  Show all resources

                </button>

              </div>

            )}

          </div>

        </section>

        <section className="resources-container resources-bottom-cta">

          <div className="resources-cta-mark">

            <BookOpen size={28} strokeWidth={1.3} />

          </div>

          <div className="resources-cta-copy">

            <span className="resources-section-kicker">KEEP EXPLORING</span>

            <h2>Make your next step a smarter one.</h2>

            <p>

              Browse tutorials, explore free resources and learn at your

              own pace.

            </p>

          </div>

          <Link to="/resources/freebies" className="resources-cta-link">

            Explore Freebies

            <ArrowRight size={17} />

          </Link>

        </section>

      </main>

    </>

  );

}

export default Resources;
