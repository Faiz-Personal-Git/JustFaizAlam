import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

import {

  Home,

  Compass,

  Search,

  Heart,

  Bookmark,

  Share2,

  ArrowUpRight,

  Play,

  Plus,

  X,

  TrendingUp,

  Sparkles,

  Image as ImageIcon,

  Video,

  Hash,

  Users,


  ChevronRight,

} from "lucide-react";

import SEO from "../../components/SEO";

import "./Explore.css";

const PROFILE = "/Images/dp.png";

const image = (id, width = 900) =>

  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const HERO_IMAGE =

  "https://app.agilitywriter.ai/img/2023/10/23/Skills-Needed-to-Succeed-as-a-Digital-Creator-126837604.jpg";

const categories = [

  "All",

  "Photography",

  "Technology",

  "Documentary",

  "Business",

  "Travel",

  "Design",

  "Lifestyle",

];

const discoveryPosts = [

  {

    id: 1,

    title: "The art of building something meaningful",

    description:

      "A creative workspace, a clear vision and the discipline to keep showing up.",

    category: "Technology",

    type: "image",

    image: image("photo-1498050108023-c5249f4df085"),

    author: "Creator Community",

    username: "@creatorcommunity",

    avatar: image("photo-1500648767791-00dcc994a43e", 120),

    likes: 1240,

    time: "2 hours ago",

    tags: ["creativity", "workspace", "technology"],

  },

  {

    id: 2,

    title: "Stories hidden in the ordinary",

    description:

      "Documentary storytelling is about noticing the details everyone else walks past.",

    category: "Documentary",

    type: "video",

    image: image("photo-1492619375914-88005aa9e8fb"),

    author: "Visual Stories",

    username: "@visualstories",

    avatar: image("photo-1506794778202-cad84cf45f1d", 120),

    likes: 2860,

    time: "4 hours ago",

    tags: ["filmmaking", "storytelling"],

  },

  {

    id: 3,

    title: "A quieter kind of adventure",

    description:

      "Sometimes the best reset is a little distance from the noise.",

    category: "Travel",

    type: "image",

    image: image("photo-1464822759023-fed622ff2c3b"),

    author: "Wander Journal",

    username: "@wanderjournal",

    avatar: image("photo-1534528741775-53994a69daeb", 120),

    likes: 3480,

    time: "6 hours ago",

    tags: ["mountains", "travel", "nature"],

  },

  {

    id: 4,

    title: "Design that feels effortless",

    description:

      "Good design is not about adding more. It is about making every detail matter.",

    category: "Design",

    type: "image",

    image: image("photo-1497366754035-f200968a6e72"),

    author: "Design Stories",

    username: "@designstories",

    avatar: image("photo-1544005313-94ddf0286df2", 120),

    likes: 960,

    time: "Yesterday",

    tags: ["design", "minimalism"],

  },

  {

    id: 5,

    title: "Ideas are only the beginning",

    description:

      "Turning a small idea into a real business takes patience, focus and execution.",

    category: "Business",

    type: "image",

    image: image("photo-1455390582262-044cdead277a"),

    author: "The Founder Edit",

    username: "@thefounderedit",

    avatar: image("photo-1507003211169-0a1dd7228f2d", 120),

    likes: 1870,

    time: "Yesterday",

    tags: ["business", "founder", "ideas"],

  },

  {

    id: 6,

    title: "Finding beauty in natural light",

    description:

      "A simple frame, warm light and a moment worth remembering.",

    category: "Photography",

    type: "image",

    image: image("photo-1470770841072-f978cf4d019e"),

    author: "Frame & Focus",

    username: "@frameandfocus",

    avatar: image("photo-1531123897727-8f129e1688ce", 120),

    likes: 4210,

    time: "2 days ago",

    tags: ["photography", "light", "nature"],

  },

  {

    id: 7,

    title: "The future is being built today",

    description:

      "A look at the tools and technologies changing how we work.",

    category: "Technology",

    type: "video",

    image: image("photo-1518770660439-4636190af475"),

    author: "Tech Perspective",

    username: "@techperspective",

    avatar: image("photo-1506794778202-cad84cf45f1d", 120),

    likes: 2130,

    time: "2 days ago",

    tags: ["technology", "innovation"],

  },

  {

    id: 8,

    title: "Small rituals, better days",

    description:

      "A little structure can create room for more meaningful work.",

    category: "Lifestyle",

    type: "image",

    image: image("photo-1497366216548-37526070297c"),

    author: "Everyday Notes",

    username: "@everydaynotes",

    avatar: image("photo-1544005313-94ddf0286df2", 120),

    likes: 780,

    time: "3 days ago",

    tags: ["lifestyle", "routine"],

  },

  {

    id: 9,

    title: "Behind every great story",

    description:

      "Research, preparation and the people whose stories deserve to be heard.",

    category: "Documentary",

    type: "image",

    image: image("photo-1500530855697-b586d89ba3ee"),

    author: "The Story Room",

    username: "@thestoryroom",

    avatar: image("photo-1500648767791-00dcc994a43e", 120),

    likes: 1520,

    time: "4 days ago",

    tags: ["documentary", "research"],

  },

];

const suggestedCreators = [

  {

    id: "creator",

    name: "Creator Community",

    username: "@creatorcommunity",

    description: "Content & creativity",

    avatar: image("photo-1500648767791-00dcc994a43e", 120),

  },

  {

    id: "design",

    name: "Design Stories",

    username: "@designstories",

    description: "Design & inspiration",

    avatar: image("photo-1544005313-94ddf0286df2", 120),

  },

  {

    id: "visual",

    name: "Visual Stories",

    username: "@visualstories",

    description: "Film & storytelling",

    avatar: image("photo-1506794778202-cad84cf45f1d", 120),

  },

];

const trendingTopics = [

  { label: "Web Development", count: "2.4k posts" },

  { label: "Documentary", count: "1.8k posts" },

  { label: "Creator Economy", count: "1.2k posts" },

  { label: "Photography", count: "980 posts" },

  { label: "Entrepreneurship", count: "760 posts" },

];

function formatLikes(value) {

  if (value >= 1000) {

    return `${(value / 1000).toFixed(1)}k`;

  }

  return value.toString();

}

function ExploreCard({

  post,

  liked,

  saved,

  followed,

  onLike,

  onSave,

  onFollow,

  onOpen,

}) {

  return (

    <article className="explore-card">

      <button

        type="button"

        className="explore-card-media"

        onClick={() => onOpen(post)}

        aria-label={`Open ${post.title}`}

      >

        <img src={post.image} alt={post.title} loading="lazy" />

        <span className="explore-card-category">

          {post.category}

        </span>

        {post.type === "video" && (

          <span className="explore-video-indicator">

            <Play size={17} fill="currentColor" />

          </span>

        )}

        <span className="explore-card-open">

          <ArrowUpRight size={17} />

        </span>

      </button>

      <div className="explore-card-content">

        <div className="explore-card-author">

          <img src={post.avatar} alt={post.author} loading="lazy" />

          <div>

            <strong>{post.author}</strong>

            <span>{post.time}</span>

          </div>

          <button

            type="button"

            className={`explore-follow-button ${

              followed ? "is-following" : ""

            }`}

            onClick={() => onFollow(post.username)}

          >

            {followed ? "Following" : "Follow"}

          </button>

        </div>

        <button

          type="button"

          className="explore-card-title"

          onClick={() => onOpen(post)}

        >

          {post.title}

        </button>

        <p>{post.description}</p>

        <div className="explore-card-footer">

          <div>

            <button

              type="button"

              className={liked ? "is-liked" : ""}

              onClick={() => onLike(post.id)}

              aria-label="Like post"

            >

              <Heart size={16} fill={liked ? "currentColor" : "none"} />

              <span>{formatLikes(post.likes + (liked ? 1 : 0))}</span>

            </button>

            <span className="explore-card-kind">

              {post.type === "video" ? (

                <Video size={15} />

              ) : (

                <ImageIcon size={15} />

              )}

              {post.type}

            </span>

          </div>

          <button

            type="button"

            className={`explore-save-button ${

              saved ? "is-saved" : ""

            }`}

            onClick={() => onSave(post.id)}

            aria-label="Save post"

          >

            <Bookmark size={17} fill={saved ? "currentColor" : "none"} />

          </button>

        </div>

      </div>

    </article>

  );

}

function ExplorePreview({ post, onClose, liked, onLike, saved, onSave }) {

  const sharePost = async () => {

    const url = `${window.location.origin}/social/explore#post-${post.id}`;

    try {

      if (navigator.share) {

        await navigator.share({

          title: post.title,

          text: post.description,

          url,

        });

      } else if (navigator.clipboard?.writeText) {

        await navigator.clipboard.writeText(url);

        window.alert("Link copied!");

      }

    } catch (error) {

      if (error.name !== "AbortError") {

        console.error("Share failed:", error);

      }

    }

  };

  return (

    <div className="explore-preview-overlay" onClick={onClose}>

      <section

        className="explore-preview"

        onClick={(event) => event.stopPropagation()}

      >

        <button

          type="button"

          className="explore-preview-close"

          onClick={onClose}

          aria-label="Close preview"

        >

          <X size={20} />

        </button>

        <div className="explore-preview-image">

          <img src={post.image} alt={post.title} />

          {post.type === "video" && (

            <span>

              <Play size={23} fill="currentColor" />

            </span>

          )}

        </div>

        <div className="explore-preview-content">

          <span className="explore-eyebrow">{post.category}</span>

          <h2>{post.title}</h2>

          <p>{post.description}</p>

          <div className="explore-preview-author">

            <img src={post.avatar} alt={post.author} />

            <div>

              <strong>{post.author}</strong>

              <span>{post.username}</span>

            </div>

          </div>

          <div className="explore-preview-tags">

            {post.tags.map((tag) => (

              <span key={tag}>#{tag}</span>

            ))}

          </div>

          <div className="explore-preview-actions">

            <button

              type="button"

              className={liked ? "is-liked" : ""}

              onClick={() => onLike(post.id)}

            >

              <Heart size={18} fill={liked ? "currentColor" : "none"} />

              Like

            </button>

            <button

              type="button"

              className={saved ? "is-saved" : ""}

              onClick={() => onSave(post.id)}

            >

              <Bookmark size={18} fill={saved ? "currentColor" : "none"} />

              Save

            </button>

            <button type="button" onClick={sharePost}>

              <Share2 size={18} />

              Share

            </button>

          </div>

        </div>

      </section>

    </div>

  );

}

function Explore() {

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const [activeTab, setActiveTab] = useState("For you");

  const [likedPosts, setLikedPosts] = useState([]);

  const [savedPosts, setSavedPosts] = useState([]);

  const [followedUsers, setFollowedUsers] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {

    let result = [...discoveryPosts];

    if (activeCategory !== "All") {

      result = result.filter(

        (post) => post.category === activeCategory

      );

    }

    const query = search.trim().toLowerCase();

    if (query) {

      result = result.filter((post) => {

        const searchableText = [

          post.title,

          post.description,

          post.category,

          post.author,

          post.username,

          ...post.tags,

        ]

          .join(" ")

          .toLowerCase();

        return searchableText.includes(query);

      });

    }

    if (activeTab === "Following") {

      result = result.filter((post) =>

        followedUsers.includes(post.username)

      );

    }

    if (activeTab === "Popular") {

      result.sort((a, b) => b.likes - a.likes);

    }

    if (activeTab === "Latest") {

      result.reverse();

    }

    return result;

  }, [search, activeCategory, activeTab, followedUsers]);

  const toggleLike = (id) => {

    setLikedPosts((current) =>

      current.includes(id)

        ? current.filter((item) => item !== id)

        : [...current, id]

    );

  };

  const toggleSave = (id) => {

    setSavedPosts((current) =>

      current.includes(id)

        ? current.filter((item) => item !== id)

        : [...current, id]

    );

  };

  const toggleFollow = (username) => {

    setFollowedUsers((current) =>

      current.includes(username)

        ? current.filter((item) => item !== username)

        : [...current, username]

    );

  };

  const selectTopic = (topic) => {

    setSearch(topic);

    setActiveCategory("All");

    setActiveTab("For you");

  };

  return (

    <div className="explore-page">

      <SEO

        title="Explore | Faiz Alam"

        description="Discover creators, ideas, photography, technology and stories."

        path="/social/explore"

      />

<div className="explore-shell">

        <div className="explore-layout">

          {/* LEFT NAVIGATION */}

          <aside className="explore-left-sidebar">

            <Link to="/social" className="explore-sidebar-profile">

              <img src={PROFILE} alt="Faiz Alam" />

              <span>

                <strong>Faiz Alam</strong>

                <small>@justfaizalam</small>

              </span>

            </Link>

            <nav className="explore-sidebar-nav">

              <Link to="/social">

                <Home size={18} />

                Home

              </Link>

              <Link to="/social/explore" className="active">

                <Compass size={18} />

                Explore

              </Link>

              <a href="#explore-trending">

                <TrendingUp size={18} />

                Trending

              </a>

              <a href="#explore-creators">

                <Users size={18} />

                Creators

              </a>

            </nav>

            <div className="explore-sidebar-note">

              <span>YOUR SPACE</span>

              <h3>Stay curious.</h3>

              <p>

                Discover new perspectives, people and ideas worth following.

              </p>

            </div>

            <Link to="/social" className="explore-back-home">

              <ArrowUpRight size={15} />

              Back to social home

            </Link>

          </aside>

          {/* MAIN CONTENT */}

          <main className="explore-main">

            {/* PAGE HEADING */}

            <div className="explore-page-heading">

              <div>

                <span className="explore-eyebrow">

                  THE DISCOVERY SPACE

                </span>

                <h1>

                  Explore <em>what's interesting.</em>

                </h1>

                <p>

                  Fresh ideas, creative people and stories from across the community.

                </p>

              </div>

              <span className="explore-heading-mark">

                <Sparkles size={22} />

              </span>

            </div>

            {/* SEARCH */}

            <div className="explore-search">

              <Search size={19} />

              <input

                type="search"

                value={search}

                onChange={(event) => setSearch(event.target.value)}

                placeholder="Search creators, topics, posts..."

                aria-label="Search Explore"

              />

              {search && (

                <button

                  type="button"

                  onClick={() => setSearch("")}

                  aria-label="Clear search"

                >

                  <X size={17} />

                </button>

              )}

              <span>⌘ K</span>

            </div>

            {/* FEATURED HERO */}

            <section className="explore-featured">

              <img

                className="explore-featured-image"

                src={HERO_IMAGE}

                alt="Creative workspace with camera and laptop"

              />

              <div className="explore-featured-overlay" />

              <div className="explore-featured-content">

                <span>EDITOR'S PICK · THIS WEEK</span>

                <h2>

                  Creativity begins

                  <em>with curiosity.</em>

                </h2>

                <p>

                  Explore the people, ideas and processes shaping the creative world.

                </p>

                <button

                  type="button"

                  onClick={() => {

                    setActiveCategory("Technology");

                    setActiveTab("For you");

                  }}

                >

                  Discover stories <ArrowUpRight size={16} />

                </button>

              </div>

              <span className="explore-featured-index">01 / 04</span>

            </section>

            {/* TRENDING TOPICS */}

            <section className="explore-trending" id="explore-trending">

              <div className="explore-section-heading">

                <div>

                  <span className="explore-eyebrow">WHAT'S HAPPENING</span>

                  <h2>Trending topics</h2>

                </div>

                <TrendingUp size={19} />

              </div>

              <div className="explore-topic-list">

                {trendingTopics.map((topic, index) => (

                  <button

                    type="button"

                    key={topic.label}

                    onClick={() => selectTopic(topic.label)}

                  >

                    <span className="explore-topic-number">

                      0{index + 1}

                    </span>

                    <span className="explore-topic-name">

                      <strong>#{topic.label.replaceAll(" ", "")}</strong>

                      <small>{topic.count}</small>

                    </span>

                    <ArrowUpRight size={16} />

                  </button>

                ))}

              </div>

            </section>

            {/* DISCOVERY FEED */}

            <section className="explore-discover-section">

              <div className="explore-section-heading explore-feed-title">

                <div>

                  <span className="explore-eyebrow">CURATED FOR YOU</span>

                  <h2>Discover something new.</h2>

                </div>

                <span className="explore-results-count">

                  {filteredPosts.length} RESULTS

                </span>

              </div>

              <div className="explore-feed-tabs">

                {["For you", "Following", "Popular", "Latest"].map((tab) => (

                  <button

                    type="button"

                    key={tab}

                    className={activeTab === tab ? "active" : ""}

                    onClick={() => setActiveTab(tab)}

                  >

                    {tab}

                  </button>

                ))}

              </div>

              <div className="explore-category-list">

                {categories.map((category) => (

                  <button

                    type="button"

                    key={category}

                    className={

                      activeCategory === category ? "active" : ""

                    }

                    onClick={() => setActiveCategory(category)}

                  >

                    {category}

                  </button>

                ))}

              </div>

              {filteredPosts.length > 0 ? (

                <div className="explore-grid">

                  {filteredPosts.map((post) => (

                    <ExploreCard

                      key={post.id}

                      post={post}

                      liked={likedPosts.includes(post.id)}

                      saved={savedPosts.includes(post.id)}

                      followed={followedUsers.includes(post.username)}

                      onLike={toggleLike}

                      onSave={toggleSave}

                      onFollow={toggleFollow}

                      onOpen={setSelectedPost}

                    />

                  ))}

                </div>

              ) : (

                <div className="explore-empty">

                  <Search size={25} />

                  <h3>No discoveries yet</h3>

                  <p>

                    Try another search or choose a different category.

                  </p>

                  <button

                    type="button"

                    onClick={() => {

                      setSearch("");

                      setActiveCategory("All");

                      setActiveTab("For you");

                    }}

                  >

                    Clear filters

                  </button>

                </div>

              )}

            </section>

          </main>

          {/* RIGHT SIDEBAR */}

          <aside className="explore-right-sidebar">

            <section className="explore-side-card" id="explore-creators">

              <div className="explore-side-heading">

                <div>

                  <span className="explore-eyebrow">GOOD PEOPLE</span>

                  <h3>Creators to know</h3>

                </div>

                <Users size={18} />

              </div>

              {suggestedCreators.map((creator) => (

                <div className="explore-creator" key={creator.id}>

                  <img src={creator.avatar} alt={creator.name} />

                  <div>

                    <strong>{creator.name}</strong>

                    <small>{creator.description}</small>

                  </div>

                  <button

                    type="button"

                    className={

                      followedUsers.includes(creator.username)

                        ? "following"

                        : ""

                    }

                    onClick={() => toggleFollow(creator.username)}

                    aria-label={`Follow ${creator.name}`}

                  >

                    {followedUsers.includes(creator.username) ? "✓" : <Plus size={15} />}

                  </button>

                </div>

              ))}

              <span className="explore-side-footnote">

                Suggestions based on popular topics

              </span>

            </section>

            <section className="explore-side-card explore-quick-topics">

              <div className="explore-side-heading">

                <div>

                  <span className="explore-eyebrow">EXPLORE BY INTEREST</span>

                  <h3>Popular interests</h3>

                </div>

                <Hash size={18} />

              </div>

              <div className="explore-interest-list">

                {[

                  "Creative Work",

                  "Artificial Intelligence",

                  "Personal Growth",

                  "Filmmaking",

                  "Entrepreneurship",

                  "Photography",

                ].map((interest) => (

                  <button

                    type="button"

                    key={interest}

                    onClick={() => selectTopic(interest)}

                  >

                    {interest}

                    <ChevronRight size={14} />

                  </button>

                ))}

              </div>

            </section>

            <section className="explore-side-note">

              <span>A NOTE TO REMEMBER</span>

              <h3>

                Stay curious.

                <em>Keep creating.</em>

              </h3>

              <p>

                The best discoveries often begin with a simple question.

              </p>

              <Link to="/about">

                About Faiz <ArrowUpRight size={15} />

              </Link>

            </section>

            <div className="explore-footer-links">

              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>

              <span>© {new Date().getFullYear()} Faiz Alam</span>

            </div>

          </aside>

        </div>

      </div>

{/* POST PREVIEW */}

      {selectedPost && (

        <ExplorePreview

          post={selectedPost}

          onClose={() => setSelectedPost(null)}

          liked={likedPosts.includes(selectedPost.id)}

          onLike={toggleLike}

          saved={savedPosts.includes(selectedPost.id)}

          onSave={toggleSave}

        />

      )}

    </div>

  );

}

export default Explore;
