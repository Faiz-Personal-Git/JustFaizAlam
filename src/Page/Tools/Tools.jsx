

import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

import {

  ArrowDownRight,
  Youtube,

  ArrowRight,

  ArrowUpRight,

  Search,

  Zap,

  Code2,

  FileText,

  PenLine,

  Calculator,

  Clock3,

  Type,

  ScanText,

  LockKeyhole,

  Terminal,

  Palette,

  Image,

  Tags,

  ChartNoAxesColumnIncreasing,

  MessageSquare,

  Lightbulb,

  BookOpen,

  Languages,

  CheckSquare,

  CalendarDays,

  Wallet,

  FileCode2,

  Database,

  Regex,

  Hash,

  Target,

  CircleDollarSign,

} from "lucide-react";

import "./Tools.css";

import toolsHero from "../../assets/tool-hero.png";

import SEO from "../../components/SEO";

const categories = [

  "All",

  "YouTube",

  "Writing",

  "Developer",

  "Design",

  "SEO",

  "Social Media",

  "Productivity",

  "Business",

  "Utilities",

];

const tools = [

  {

    id: "youtube-title-generator",

    title: "YouTube Title Generator",

    description: "Create catchy, SEO-friendly titles for your videos.",

    category: "YouTube",

    type: "FREE",

    icon: Youtube,

    available: true,

  },

  {

    id: "youtube-hook-generator",

    title: "YouTube Hook Generator",

    description: "Develop powerful opening lines for better audience retention.",

    category: "YouTube",

    type: "FREE",

    icon: Zap,

    available: true,

  },

  {

    id: "youtube-description-generator",

    title: "YouTube Description Writer",

    description: "Generate structured descriptions and chapter outlines.",

    category: "YouTube",

    type: "PRO",

    icon: FileText,

  },

  {

    id: "youtube-tags-generator",

    title: "YouTube Tags Generator",

    description: "Organize relevant tags and keyword ideas for your video.",

    category: "YouTube",

    type: "FREE",

    icon: Tags,

  },

  {

    id: "thumbnail-planner",

    title: "Thumbnail Concept Planner",

    description: "Plan thumbnail concepts around composition and storytelling.",

    category: "YouTube",

    type: "PRO",

    icon: Image,

  },

  {

    id: "video-seo-analyzer",

    title: "Video SEO Analyzer",

    description: "Review video metadata and identify optimization opportunities.",

    category: "YouTube",

    type: "PRO",

    icon: ChartNoAxesColumnIncreasing,

  },

  {

    id: "script-word-counter",

    title: "Script Word Counter",

    description: "Count words, characters and estimate narration time.",

    category: "Writing",

    type: "FREE",

    icon: PenLine,

    available: true,

  },

  {

    id: "social-caption-generator",

    title: "Social Caption Generator",

    description: "Create caption drafts for posts and short-form content.",

    category: "Writing",

    type: "FREE",

    icon: MessageSquare,

    available: true,

  },

  {

    id: "blog-topic-generator",

    title: "Blog Topic Generator",

    description: "Explore content ideas for your next article.",

    category: "Writing",

    type: "FREE",

    icon: Lightbulb,

  },

  {

    id: "blog-outline-generator",

    title: "Blog Outline Generator",

    description: "Structure an article with headings and subtopics.",

    category: "Writing",

    type: "PRO",

    icon: BookOpen,

  },

  {

    id: "content-rewriter",

    title: "Content Rewriter",

    description: "Explore alternative phrasing and improve readability.",

    category: "Writing",

    type: "PRO",

    icon: ScanText,

  },

  {

    id: "grammar-readability-checker",

    title: "Grammar & Readability Checker",

    description: "Review text clarity, sentence structure and readability.",

    category: "Writing",

    type: "PRO",

    icon: Type,

  },

  {

    id: "website-cost-estimator",

    title: "Website Cost Estimator",

    description: "Estimate a project budget based on pages and features.",

    category: "Developer",

    type: "FREE",

    icon: Calculator,

    available: true,

  },

  {

    id: "html-minifier",

    title: "HTML Minifier",

    description: "Minify HTML markup to reduce file size.",

    category: "Developer",

    type: "FREE",

    icon: Code2,

  },

  {

    id: "css-minifier",

    title: "CSS Minifier",

    description: "Compress CSS by removing unnecessary whitespace.",

    category: "Developer",

    type: "FREE",

    icon: FileCode2,

  },

  {

    id: "javascript-minifier",

    title: "JavaScript Minifier",

    description: "Minify JavaScript for production workflows.",

    category: "Developer",

    type: "FREE",

    icon: Terminal,

  },

  {

    id: "json-formatter",

    title: "JSON Formatter",

    description: "Format and validate JSON data.",

    category: "Developer",

    type: "FREE",

    icon: Database,

  },

  {

    id: "regex-tester",

    title: "Regex Tester",

    description: "Test regular expressions against sample text.",

    category: "Developer",

    type: "PRO",

    icon: Regex,

  },

  {

    id: "color-palette-generator",

    title: "Color Palette Generator",

    description: "Explore coordinated color combinations for your projects.",

    category: "Design",

    type: "FREE",

    icon: Palette,

  },

  {

    id: "image-compressor",

    title: "Image Compressor",

    description: "Reduce image file sizes while preserving useful quality.",

    category: "Design",

    type: "FREE",

    icon: Image,

  },

  {

    id: "font-pairing-tool",

    title: "Font Pairing Tool",

    description: "Explore typography combinations for web projects.",

    category: "Design",

    type: "PRO",

    icon: Type,

  },

  {

    id: "meta-description-generator",

    title: "Meta Description Writer",

    description: "Draft concise search snippets for website pages.",

    category: "SEO",

    type: "FREE",

    icon: ScanText,

  },

  {

    id: "keyword-cluster-planner",

    title: "Keyword Cluster Planner",

    description: "Organize related keyword ideas into topic groups.",

    category: "SEO",

    type: "PRO",

    icon: Target,

  },

  {

    id: "hashtag-generator",

    title: "Hashtag Generator",

    description: "Develop relevant hashtag ideas around a topic.",

    category: "Social Media",

    type: "FREE",

    icon: Hash,

  },

  {

    id: "social-content-calendar",

    title: "Social Content Calendar",

    description: "Plan publishing dates and organize content ideas.",

    category: "Social Media",

    type: "PRO",

    icon: CalendarDays,

  },

  {

    id: "pomodoro-timer",

    title: "Focus Timer",

    description: "Structure work sessions and planned breaks.",

    category: "Productivity",

    type: "FREE",

    icon: Clock3,

  },

  {

    id: "checklist-builder",

    title: "Checklist Builder",

    description: "Organize recurring tasks and project checklists.",

    category: "Productivity",

    type: "FREE",

    icon: CheckSquare,

  },

  {

    id: "freelance-rate-calculator",

    title: "Freelance Rate Calculator",

    description: "Estimate a project rate from your target income and workload.",

    category: "Business",

    type: "FREE",

    icon: CircleDollarSign,

  },

  {

    id: "invoice-planner",

    title: "Invoice Planner",

    description: "Organize invoice details and prepare a billing checklist.",

    category: "Business",

    type: "PRO",

    icon: Wallet,

  },

  {

    id: "text-case-converter",

    title: "Text Case Converter",

    description: "Convert text into uppercase, lowercase and title case.",

    category: "Utilities",

    type: "FREE",

    icon: Languages,

  },

];

const sortOptions = [

  { value: "latest", label: "Latest" },

  { value: "az", label: "Name: A–Z" },

  { value: "free", label: "Free first" },

  { value: "pro", label: "Pro first" },

];

function Tools() {

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const [activeType, setActiveType] = useState("ALL");

  const [sortBy, setSortBy] = useState("latest");

  const filteredTools = useMemo(() => {

    const query = search.trim().toLowerCase();

    const result = tools.filter((tool) => {

      const matchesCategory =

        activeCategory === "All" || tool.category === activeCategory;

      const matchesType =

        activeType === "ALL" || tool.type === activeType;

      const matchesSearch =

        !query ||

        tool.title.toLowerCase().includes(query) ||

        tool.description.toLowerCase().includes(query) ||

        tool.category.toLowerCase().includes(query);

      return matchesCategory && matchesType && matchesSearch;

    });

    if (sortBy === "az") {

      return result.sort((a, b) => a.title.localeCompare(b.title));

    }

    if (sortBy === "free") {

      return result.sort((a, b) => a.type.localeCompare(b.type));

    }

    if (sortBy === "pro") {

      return result.sort((a, b) => b.type.localeCompare(a.type));

    }

    return result;

  }, [search, activeCategory, activeType, sortBy]);

  const freeCount = tools.filter((tool) => tool.type === "FREE").length;

  const proCount = tools.filter((tool) => tool.type === "PRO").length;

  return (

    <main className="tools-page">

      <SEO

        title="Free Online Tools for Creators, Developers & SEO | Faiz Alam"

        description="Explore free online tools for YouTube creators, writers, developers, SEO, design and productivity. Generate video titles, count script words, format JSON and simplify everyday tasks."

        path="/tools"

      />

      {/* Hero */}

      <section

        className="tools-hero"

        style={{ "--tools-hero-image": `url("${toolsHero}")` }}

      >

        <div className="tools-container">

          <div className="tools-hero-content">

            <div className="tools-hero-copy">

              <div className="tools-eyebrow">

                <span />

                THE FAIZ ALAM TOOLKIT

              </div>

              <h1>

                Better tools.

                <br />

                <em>Sharper work.</em>

              </h1>

              <p>

                A growing collection of practical tools for creators,

                writers, developers and professionals. Save time, get better

                results and focus on the work that matters.

              </p>

              <div className="tools-hero-actions">

                <a href="#tool-library" className="tools-primary-btn">

                  Explore all tools

                  <ArrowDownRight size={16} />

                </a>

                <span className="tools-hero-note">

                  Built for the work behind the screen.

                </span>

              </div>

            </div>

          </div>

          <div className="tools-hero-bottom">

            <span>DESIGNED FOR THE CREATIVE PROCESS</span>

            <span>DISCOVER. CREATE. REFINE.</span>

          </div>

        </div>

      </section>

      {/* Collection statistics */}

      <section className="tools-stats-section">

        <div className="tools-container tools-stats">

          <div className="tools-stat">

            <strong>{String(tools.length).padStart(2, "0")}</strong>

            <span>TOOLS IN LIBRARY</span>

          </div>

          <div className="tools-stat">

            <strong>{String(freeCount).padStart(2, "0")}</strong>

            <span>FREE TOOLS</span>

          </div>

          <div className="tools-stat">

            <strong>{String(proCount).padStart(2, "0")}</strong>

            <span>PLANNED PRO TOOLS</span>

          </div>

          <div className="tools-stat">

            <strong>01</strong>

            <span>GROWING COLLECTION</span>

          </div>

        </div>

      </section>

      {/* Tool library */}

      <section className="tools-library-section" id="tool-library">

        <div className="tools-container">

          <div className="tools-section-heading">

            <div>

              <div className="tools-eyebrow">

                <span />

                THE COLLECTION

              </div>

              <h2>

                Find your next

                <br />

                <em>useful tool.</em>

              </h2>

            </div>

            <p>

              From your first idea to the final publish button, find a tool

              that fits the job.

            </p>

          </div>

          <div className="tools-filter-bar">

            <div className="tools-search">

              <Search size={16} />

              <input

                type="search"

                value={search}

                onChange={(event) => setSearch(event.target.value)}

                placeholder="Search tools..."

                aria-label="Search tools"

              />

              {search && (

                <button

                  type="button"

                  className="tools-clear-search"

                  onClick={() => setSearch("")}

                  aria-label="Clear search"

                >

                  ×

                </button>

              )}

            </div>

            <div className="tools-category-tabs">

              {categories.map((category) => (

                <button

                  key={category}

                  type="button"

                  className={`tools-category-tab ${activeCategory === category ? "active" : ""

                    }`}

                  onClick={() => setActiveCategory(category)}

                >

                  {category}

                </button>

              ))}

            </div>

            <select

              className="tools-sort"

              value={sortBy}

              onChange={(event) => setSortBy(event.target.value)}

              aria-label="Sort tools"

            >

              {sortOptions.map((option) => (

                <option key={option.value} value={option.value}>

                  {option.label}

                </option>

              ))}

            </select>

          </div>

          <div className="tools-type-filter">

            <span>

              SHOWING {String(filteredTools.length).padStart(2, "0")} TOOLS

            </span>

            <div>

              {[

                ["ALL", "All"],

                ["FREE", "Free"],

                ["PRO", "Pro"],

              ].map(([value, label]) => (

                <button

                  type="button"

                  key={value}

                  className={activeType === value ? "active" : ""}

                  onClick={() => setActiveType(value)}

                >

                  {label}

                </button>

              ))}

            </div>

          </div>

          <div className="tools-grid">

            {filteredTools.map((tool) => {

              const Icon = tool.icon;

              return (

                <article className="tool-card" key={tool.id}>

                  <div className="tool-card-top">

                    <div className="tool-icon">

                      <Icon size={21} strokeWidth={1.6} />

                    </div>

                    <span

                      className={`tool-access-badge ${tool.type === "PRO" ? "pro" : "free"

                        }`}

                    >

                      {tool.type === "PRO" && <LockKeyhole size={10} />}

                      {tool.type}

                    </span>

                  </div>

                  <div className="tool-card-category">{tool.category}</div>

                  <h3>{tool.title}</h3>

                  <p className="tool-card-description">{tool.description}</p>

                  <div className="tool-card-bottom">

                    {tool.available ? (

                      <Link

                        to={`/tools/${tool.id}`}

                        className="tool-open-link"

                      >

                        Open tool

                        <ArrowUpRight size={15} />

                      </Link>

                    ) : (

                      <span className="tool-coming-soon">

                        {tool.type === "PRO" ? "Planned Pro tool" : "Coming soon"}

                      </span>

                    )}

                    <span className="tool-card-number">

                      {String(tools.indexOf(tool) + 1).padStart(2, "0")}

                    </span>

                  </div>

                </article>

              );

            })}

          </div>

          {filteredTools.length === 0 && (

            <div className="tools-empty-state">

              <Search size={25} />

              <h3>No tools found</h3>

              <p>Try another keyword or reset your filters.</p>

              <button

                type="button"

                onClick={() => {

                  setSearch("");

                  setActiveCategory("All");

                  setActiveType("ALL");

                  setSortBy("latest");

                }}

              >

                Reset filters

              </button>

            </div>

          )}

        </div>

      </section>

      {/* Closing CTA */}

      <section className="tools-cta-section">

        <div className="tools-container">

          <div className="tools-cta">

            <div>

              <span className="tools-eyebrow">

                <span />

                HAVE AN IDEA?

              </span>

              <h2>

                Missing a tool?

                <em> Let's build something useful.</em>

              </h2>

              <p>

                Suggest a tool that could make your creative or technical

                workflow easier.

              </p>

            </div>

            <Link to="/contact" className="tools-cta-button">

              Suggest a tool

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </section>

    </main>

  );

}

export default Tools;
