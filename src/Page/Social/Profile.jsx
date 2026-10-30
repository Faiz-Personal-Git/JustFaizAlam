import { useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";

import {

  Grid3X3,

  Play,

  Bookmark,

  Heart,

  MessageCircle,

  Share2,

  MoreHorizontal,

  MapPin,

  Link2,

  CalendarDays,

  X,

  Check,

  Plus,

  ArrowUpRight,

  Settings,

} from "lucide-react";

import SEO from "../../components/SEO";

import "./Profile.css";

const PROFILE_IMAGE = "/Images/dp.png";

const image = (id, width = 900) =>

  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const initialProfile = {

  name: "Faiz Alam",

  username: "justfaizalam",

  bio: "Software Engineer & Digital Creator. Building digital experiences, exploring ideas and telling stories that matter.",

  website: "https://faiz-alam-xi.vercel.app",

  location: "India",

};

const highlights = [

  {

    id: 1,

    title: "Behind scenes",

    image: image("photo-1498050108023-c5249f4df085", 300),

  },

  {

    id: 2,

    title: "My work",

    image: image("photo-1497366216548-37526070297c", 300),

  },

  {

    id: 3,

    title: "Travel",

    image: image("photo-1470770841072-f978cf4d019e", 300),

  },

  {

    id: 4,

    title: "Ideas",

    image: image("photo-1455390582262-044cdead277a", 300),

  },

  {

    id: 5,

    title: "Projects",

    image: image("photo-1518770660439-4636190af475", 300),

  },

];

const posts = [

  {

    id: 1,

    type: "image",

    image: image("photo-1498050108023-c5249f4df085"),

    likes: 1240,

    comments: 86,

    caption: "Building something meaningful. One line of code at a time.",

  },

  {

    id: 2,

    type: "video",

    image: image("photo-1492619375914-88005aa9e8fb"),

    likes: 2860,

    comments: 124,

    caption: "Every story deserves to be heard.",

  },

  {

    id: 3,

    type: "image",

    image: image("photo-1455390582262-044cdead277a"),

    likes: 960,

    comments: 42,

    caption: "Ideas become reality through action.",

  },

  {

    id: 4,

    type: "image",

    image: image("photo-1497366216548-37526070297c"),

    likes: 780,

    comments: 31,

    caption: "A little focus goes a long way.",

  },

  {

    id: 5,

    type: "video",

    image: image("photo-1518770660439-4636190af475"),

    likes: 2130,

    comments: 98,

    caption: "The tools shaping tomorrow.",

  },

  {

    id: 6,

    type: "image",

    image: image("photo-1470770841072-f978cf4d019e"),

    likes: 4210,

    comments: 173,

    caption: "Finding beauty in the little things.",

  },

  {

    id: 7,

    type: "image",

    image: image("photo-1497366754035-f200968a6e72"),

    likes: 870,

    comments: 28,

    caption: "The creative process, behind the scenes.",

  },

  {

    id: 8,

    type: "video",

    image: image("photo-1500530855697-b586d89ba3ee"),

    likes: 1520,

    comments: 65,

    caption: "Looking beyond the obvious.",

  },

  {

    id: 9,

    type: "image",

    image: image("photo-1507679799987-c73779587ccf"),

    likes: 1120,

    comments: 54,

    caption: "Think clearly. Build patiently.",

  },

];

const formatCount = (value) =>

  value >= 1000

    ? `${(value / 1000).toFixed(1).replace(".0", "")}k`

    : value;

/* =========================================================

   EDIT PROFILE DRAWER

========================================================= */

function ProfileEditModal({ profile, onClose, onSave }) {

  const [form, setForm] = useState(profile);

  const update = (field, value) => {

    setForm((current) => ({

      ...current,

      [field]: value,

    }));

  };

  const submit = (event) => {

    event.preventDefault();

    onSave(form);

    onClose();

  };

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") onClose();

    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);

    };

  }, [onClose]);

  return (

    <div className="pf-drawer-backdrop" onClick={onClose}>

      <aside

        className="pf-edit-drawer"

        onClick={(event) => event.stopPropagation()}

        role="dialog"

        aria-modal="true"

        aria-labelledby="pf-edit-title"

      >

        <div className="pf-drawer-header">

          <div>

            <span className="pf-eyebrow">YOUR IDENTITY</span>

            <h2 id="pf-edit-title">Edit profile</h2>

            <p>Update how people see you in the community.</p>

          </div>

          <button

            type="button"

            className="pf-drawer-close"

            onClick={onClose}

            aria-label="Close edit profile"

          >

            <X size={20} />

          </button>

        </div>

        <form className="pf-drawer-form" onSubmit={submit}>

          <div className="pf-drawer-body">

            <div className="pf-edit-photo">

              <img src={PROFILE_IMAGE} alt={profile.name} />

              <div>

                <strong>Profile photo</strong>

                <span>Photo upload will be connected later.</span>

              </div>

            </div>

            <label>

              <span>Display name</span>

              <input

                value={form.name}

                maxLength={60}

                onChange={(event) => update("name", event.target.value)}

                placeholder="Your name"

                required

              />

            </label>

            <label>

              <span>Bio</span>

              <textarea

                value={form.bio}

                maxLength={180}

                rows={4}

                onChange={(event) => update("bio", event.target.value)}

                placeholder="Tell people a little about yourself"

              />

              <small>{form.bio.length}/180 characters</small>

            </label>

            <label>

              <span>Website</span>

              <input

                type="url"

                value={form.website}

                onChange={(event) => update("website", event.target.value)}

                placeholder="https://yourwebsite.com"

              />

            </label>

            <label>

              <span>Location</span>

              <input

                value={form.location}

                onChange={(event) => update("location", event.target.value)}

                placeholder="City, Country"

              />

            </label>

          </div>

          <div className="pf-drawer-footer">

            <button

              type="button"

              className="pf-cancel-button"

              onClick={onClose}

            >

              Cancel

            </button>

            <button type="submit" className="pf-primary-button">

              <Check size={15} />

              Save changes

            </button>

          </div>

        </form>

      </aside>

    </div>

  );

}

/* =========================================================

   STORY VIEWER

========================================================= */

function StoryViewer({ stories, activeIndex, onClose, onChange }) {

  const story = stories[activeIndex];

  useEffect(() => {

    if (!story) return;

    const timer = window.setTimeout(() => {

      if (activeIndex < stories.length - 1) {

        onChange(activeIndex + 1);

      } else {

        onClose();

      }

    }, 5000);

    const handleKeyDown = (event) => {

      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {

        onChange(

          activeIndex < stories.length - 1 ? activeIndex + 1 : 0

        );

      }

      if (event.key === "ArrowLeft") {

        onChange(

          activeIndex > 0 ? activeIndex - 1 : stories.length - 1

        );

      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      window.clearTimeout(timer);

      window.removeEventListener("keydown", handleKeyDown);

    };

  }, [activeIndex, stories.length, onChange, onClose, story]);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    return () => {

      document.body.style.overflow = "";

    };

  }, []);

  if (!story) return null;

  const previous = () => {

    onChange(activeIndex > 0 ? activeIndex - 1 : stories.length - 1);

  };

  const next = () => {

    if (activeIndex < stories.length - 1) {

      onChange(activeIndex + 1);

    } else {

      onClose();

    }

  };

  return (

    <div className="pf-story-overlay" onClick={onClose}>

      <div

        className="pf-story-viewer"

        onClick={(event) => event.stopPropagation()}

      >

        <div className="pf-story-progress">

          {stories.map((item, index) => (

            <span

              key={item.id}

              className={index < activeIndex ? "completed" : ""}

            >

              {index === activeIndex && <i />}

            </span>

          ))}

        </div>

        <div className="pf-story-header">

          <div className="pf-story-user">

            <img src={PROFILE_IMAGE} alt="Faiz Alam" />

            <div>

              <strong>Faiz Alam</strong>

              <small>@justfaizalam · Story</small>

            </div>

          </div>

          <button

            type="button"

            onClick={onClose}

            aria-label="Close story"

          >

            <X size={22} />

          </button>

        </div>

        <img

          className="pf-story-image"

          src={story.image}

          alt={story.title}

        />

        <div className="pf-story-caption">

          <span>FAIZ ALAM · STORIES</span>

          <h2>{story.title}</h2>

        </div>

        <button

          type="button"

          className="pf-story-hit pf-story-hit-left"

          onClick={previous}

          aria-label="Previous story"

        />

        <button

          type="button"

          className="pf-story-hit pf-story-hit-right"

          onClick={next}

          aria-label="Next story"

        />

      </div>

    </div>

  );

}

/* =========================================================

   POST PREVIEW

========================================================= */

function PostPreview({ post, onClose }) {

  const share = async () => {

    const url = `${window.location.origin}/social/profile#post-${post.id}`;

    try {

      if (navigator.share) {

        await navigator.share({

          title: "Faiz Alam",

          text: post.caption,

          url,

        });

      } else if (navigator.clipboard?.writeText) {

        await navigator.clipboard.writeText(url);

        window.alert("Post link copied!");

      }

    } catch (error) {

      if (error.name !== "AbortError") {

        console.error(error);

      }

    }

  };

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") onClose();

    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      document.body.style.overflow = "";

      window.removeEventListener("keydown", handleKeyDown);

    };

  }, [onClose]);

  return (

    <div className="pf-modal-backdrop" onClick={onClose}>

      <section

        className="pf-post-preview"

        onClick={(event) => event.stopPropagation()}

        role="dialog"

        aria-modal="true"

      >

        <button

          type="button"

          className="pf-preview-close"

          onClick={onClose}

          aria-label="Close preview"

        >

          <X size={20} />

        </button>

        <div className="pf-preview-image">

          <img src={post.image} alt={post.caption} />

        </div>

        <div className="pf-preview-content">

          <div className="pf-preview-author">

            <img src={PROFILE_IMAGE} alt="Faiz Alam" />

            <div>

              <strong>Faiz Alam</strong>

              <span>@justfaizalam</span>

            </div>

          </div>

          <p>{post.caption}</p>

          <div className="pf-preview-stats">

            <span>

              <Heart size={16} />

              {formatCount(post.likes)}

            </span>

            <span>

              <MessageCircle size={16} />

              {formatCount(post.comments)}

            </span>

          </div>

          <button

            type="button"

            className="pf-preview-share"

            onClick={share}

          >

            <Share2 size={16} />

            Share post

          </button>

        </div>

      </section>

    </div>

  );

}

/* =========================================================

   PROFILE PAGE

========================================================= */

function Profile() {

  const [profile, setProfile] = useState(initialProfile);

  const [activeTab, setActiveTab] = useState("posts");

  const [selectedPost, setSelectedPost] = useState(null);

  const [showEdit, setShowEdit] = useState(false);

  const [activeStory, setActiveStory] = useState(null);

  const [savedPosts, setSavedPosts] = useState([]);

  const storyItems = useMemo(

    () => [

      {

        id: 0,

        title: "A little glimpse into my world",

        image: PROFILE_IMAGE,

      },

      ...highlights,

    ],

    []

  );

  const visiblePosts = useMemo(() => {

    if (activeTab === "reels") {

      return posts.filter((post) => post.type === "video");

    }

    if (activeTab === "saved") {

      return posts.filter((post) => savedPosts.includes(post.id));

    }

    return posts;

  }, [activeTab, savedPosts]);

  const shareProfile = async () => {

    const url = `${window.location.origin}/social/profile`;

    try {

      if (navigator.share) {

        await navigator.share({

          title: `${profile.name} on Faiz Alam Social`,

          url,

        });

      } else if (navigator.clipboard?.writeText) {

        await navigator.clipboard.writeText(url);

        window.alert("Profile link copied!");

      }

    } catch (error) {

      if (error.name !== "AbortError") {

        console.error(error);

      }

    }

  };

  const toggleSave = (id) => {

    setSavedPosts((current) =>

      current.includes(id)

        ? current.filter((item) => item !== id)

        : [...current, id]

    );

  };

  return (

    <div className="pf-page">

      <SEO

        title={`${profile.name} | Profile`}

        description={profile.bio}

        path="/social/profile"

      />

      <main className="pf-container">

        <div className="pf-topline">

          <span className="pf-eyebrow">SOCIAL / PROFILE</span>

          <Link to="/social" className="pf-back-link">

            <ArrowUpRight size={15} />

            Back to community

          </Link>

        </div>

        {/* PROFILE INTRO */}

        <section className="pf-profile">

          <div className="pf-avatar-column">

            <button

              type="button"

              className="pf-avatar pf-avatar-clickable"

              onClick={() => setActiveStory(0)}

              aria-label="Open profile story"

            >

              <img src={PROFILE_IMAGE} alt={profile.name} />

              <span className="pf-avatar-story-indicator" />

            </button>

          </div>

          <div className="pf-profile-info">

            <div className="pf-profile-top">

              <div className="pf-name-wrap">

                <h1>{profile.name}</h1>

                <span className="pf-verified" title="Verified profile">

                  <Check size={11} />

                </span>

              </div>

              <span className="pf-username">@{profile.username}</span>

              <div className="pf-desktop-actions">

                <button

                  type="button"

                  className="pf-primary-button"

                  onClick={() => setShowEdit(true)}

                >

                  <Settings size={15} />

                  Edit profile

                </button>

                <button

                  type="button"

                  className="pf-secondary-button"

                  onClick={shareProfile}

                >

                  <Share2 size={15} />

                  Share profile

                </button>

                <button

                  type="button"

                  className="pf-icon-button"

                  onClick={shareProfile}

                  aria-label="More options"

                >

                  <MoreHorizontal size={19} />

                </button>

              </div>

            </div>

            <div className="pf-stats">

              <div>

                <strong>24</strong>

                <span>posts</span>

              </div>

              <div>

                <strong>1,248</strong>

                <span>followers</span>

              </div>

              <div>

                <strong>386</strong>

                <span>following</span>

              </div>

            </div>

            <div className="pf-bio">

              <strong>{profile.name}</strong>

              <p>{profile.bio}</p>

            </div>

            <div className="pf-profile-meta">

              {profile.location && (

                <span>

                  <MapPin size={14} />

                  {profile.location}

                </span>

              )}

              <span>

                <CalendarDays size={14} />

                Joined October 2026

              </span>

              {profile.website && (

                <a

                  href={profile.website}

                  target="_blank"

                  rel="noreferrer"

                >

                  <Link2 size={14} />

                  {profile.website.replace(/^https?:\/\//, "")}

                  <ArrowUpRight size={12} />

                </a>

              )}

            </div>

          </div>

          {/* MOBILE ACTIONS */}

          <div className="pf-mobile-actions">

            <button

              type="button"

              className="pf-primary-button"

              onClick={() => setShowEdit(true)}

            >

              <Settings size={14} />

              Edit profile

            </button>

            <button

              type="button"

              className="pf-secondary-button"

              onClick={shareProfile}

            >

              <Share2 size={14} />

              Share profile

            </button>

          </div>

        </section>

        {/* STORY HIGHLIGHTS */}

        <section className="pf-highlights">

          <button

            type="button"

            className="pf-highlight pf-add-highlight"

            onClick={() => setShowEdit(true)}

          >

            <span className="pf-highlight-circle">

              <Plus size={23} />

            </span>

            <span>New</span>

          </button>

          {highlights.map((story) => (

            <button

              type="button"

              className="pf-highlight"

              key={story.id}

              onClick={() => setActiveStory(story.id)}

            >

              <span className="pf-highlight-circle">

                <img src={story.image} alt={story.title} />

              </span>

              <span>{story.title}</span>

            </button>

          ))}

        </section>

        {/* CONTENT NAVIGATION */}

        <section className="pf-content">

          <div className="pf-tabs" role="tablist" aria-label="Profile posts">

            <button

              type="button"

              role="tab"

              aria-selected={activeTab === "posts"}

              className={activeTab === "posts" ? "active" : ""}

              onClick={() => setActiveTab("posts")}

            >

              <Grid3X3 size={17} />

              <span>Posts</span>

            </button>

            <button

              type="button"

              role="tab"

              aria-selected={activeTab === "reels"}

              className={activeTab === "reels" ? "active" : ""}

              onClick={() => setActiveTab("reels")}

            >

              <Play size={17} />

              <span>Reels</span>

            </button>

            <button

              type="button"

              role="tab"

              aria-selected={activeTab === "saved"}

              className={activeTab === "saved" ? "active" : ""}

              onClick={() => setActiveTab("saved")}

            >

              <Bookmark size={17} />

              <span>Saved</span>

            </button>

          </div>

          {visiblePosts.length > 0 ? (

            <div className="pf-post-grid">

              {visiblePosts.map((post) => (

                <article

                  className="pf-post"

                  key={post.id}

                  id={`post-${post.id}`}

                >

                  <button

                    type="button"

                    className="pf-post-image"

                    onClick={() => setSelectedPost(post)}

                    aria-label={`Open post: ${post.caption}`}

                  >

                    <img

                      src={post.image}

                      alt={post.caption}

                      loading="lazy"

                    />

                    {post.type === "video" && (

                      <span className="pf-post-type">

                        <Play size={18} fill="currentColor" />

                      </span>

                    )}

                    <span className="pf-post-hover">

                      <span>

                        <Heart size={19} fill="currentColor" />

                        {formatCount(post.likes)}

                      </span>

                      <span>

                        <MessageCircle size={19} fill="currentColor" />

                        {formatCount(post.comments)}

                      </span>

                    </span>

                  </button>

                  <button

                    type="button"

                    className={`pf-post-save ${

                      savedPosts.includes(post.id) ? "saved" : ""

                    }`}

                    onClick={() => toggleSave(post.id)}

                    aria-label={

                      savedPosts.includes(post.id)

                        ? "Remove saved post"

                        : "Save post"

                    }

                  >

                    <Bookmark

                      size={15}

                      fill={

                        savedPosts.includes(post.id)

                          ? "currentColor"

                          : "none"

                      }

                    />

                  </button>

                </article>

              ))}

            </div>

          ) : (

            <div className="pf-empty">

              <Bookmark size={25} />

              <h3>No saved posts yet</h3>

              <p>Posts you save will appear here.</p>

            </div>

          )}

        </section>

      </main>

      {/* EDIT PROFILE DRAWER */}

      {showEdit && (

        <ProfileEditModal

          profile={profile}

          onClose={() => setShowEdit(false)}

          onSave={setProfile}

        />

      )}

      {/* STORY VIEWER */}

      {activeStory !== null && (

        <StoryViewer

          stories={storyItems}

          activeIndex={activeStory}

          onChange={setActiveStory}

          onClose={() => setActiveStory(null)}

        />

      )}

      {/* POST PREVIEW */}

      {selectedPost && (

        <PostPreview

          post={selectedPost}

          onClose={() => setSelectedPost(null)}

        />

      )}

    </div>

  );

}

export default Profile;
