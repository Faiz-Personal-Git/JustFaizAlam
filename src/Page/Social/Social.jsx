import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {

  Home,
  Plus,

  MessageCircle,
  Search,
  MoreHorizontal,

  Heart,

  Send,

  Bookmark,

  ImagePlus,

  Video,

  Link2,

  PenLine,

  X,

  ChevronLeft,

  ChevronRight,

  ArrowUpRight,

  Hash,

  Camera,

  Grid3X3,

} from "lucide-react";

import SEO from "../../components/SEO";

import "./Social.css";

const PROFILE = "/Images/dp.png";

const image = (id, width = 900) =>

  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const stories = [

  {

    id: 1,

    name: "Your Story",

    image: PROFILE,

    isOwn: true,

    title: "Share your moments",

    text: "A little glimpse into my everyday journey.",

    background: image("photo-1470770841072-f978cf4d019e"),

  },

  {

    id: 2,

    name: "Updates",

    image: image("photo-1500648767791-00dcc994a43e", 150),

    title: "Something new is coming!",

    text: "Working on something exciting. Stay tuned.",

    background: image("photo-1498050108023-c5249f4df085"),

  },

  {

    id: 3,

    name: "Behind Scenes",

    image: image("photo-1506794778202-cad84cf45f1d", 150),

    title: "Behind the scenes",

    text: "Every project starts with an idea.",

    background: image("photo-1497366754035-f200968a6e72"),

  },

  {

    id: 4,

    name: "Travel",

    image: image("photo-1506794778202-cad84cf45f1d", 150),

    title: "A little escape",

    text: "Sometimes you need to pause and explore.",

    background: image("photo-1470770841072-f978cf4d019e"),

  },

  {

    id: 5,

    name: "Work",

    image: image("photo-1507003211169-0a1dd7228f2d", 150),

    title: "Work in progress",

    text: "Building, learning and improving every day.",

    background: image("photo-1498050108023-c5249f4df085"),

  },

  {

    id: 6,

    name: "Ideas",

    image: image("photo-1534528741775-53994a69daeb", 150),

    title: "Ideas become reality",

    text: "Start small. Keep building.",

    background: image("photo-1455390582262-044cdead277a"),

  },

  {

    id: 7,

    name: "Learning",

    image: image("photo-1506794778202-cad84cf45f1d", 150),

    title: "Keep learning",

    text: "There is always something new to discover.",

    background: image("photo-1491841550275-ad7854e35ca6"),

  },

  {

    id: 8,

    name: "Studio",

    image: image("photo-1500648767791-00dcc994a43e", 150),

    title: "Studio moments",

    text: "Creating something meaningful.",

    background: image("photo-1497366754035-f200968a6e72"),

  },

];

const posts = [

  {

    id: 1,

    type: "image",

    label: "BEHIND THE SCENES",

    content:

      "A calm evening after a long day of coding. Small moments like these keep me going. 🌅",

    image: image("photo-1498050108023-c5249f4df085"),

    date: "2026-10-28",

    likes: 124,

    comments: 18,

    tags: ["life", "behindthescenes", "mountains", "coding"],

  },

  {

    id: 2,

    type: "video",

    label: "VIDEO",

    content:

      "Working on a new documentary script. The research, the story and the visuals are coming together nicely. 🎬",

    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",

    image: image("photo-1492619375914-88005aa9e8fb"),

    date: "2026-10-26",

    likes: 256,

    comments: 42,

    tags: ["documentary", "youtube", "research"],

  },

  {

    id: 3,

    type: "text",

    label: "LEARNING",

    content:

      "Sometimes a simple workspace and a clear plan are all you need to make real progress. Stay consistent. Keep learning. Keep building. ✨",

    date: "2026-10-24",

    likes: 189,

    comments: 27,

    tags: ["productivity", "workspace", "learning"],

  },

  {

    id: 4,

    type: "image",

    label: "LIFE & LEARNING",

    content:

      "Same person. Higher goals. Better habits. A new chapter begins with small daily decisions.",

    image: image("photo-1470770841072-f978cf4d019e"),

    date: "2026-10-22",

    likes: 342,

    comments: 31,

    tags: ["motivation", "growth", "life"],

  },

  {

    id: 5,

    type: "text",

    label: "BUILDING IN PUBLIC",

    content:

      "A portfolio should be more than a collection of projects. I want this space to become a living record of what I build, what I learn, and the ideas I explore along the way.",

    date: "2026-10-20",

    likes: 98,

    comments: 14,

    tags: ["buildinginpublic", "webdevelopment"],

  },

  {

    id: 6,

    type: "image",

    label: "CREATIVE WORK",

    content:

      "The best ideas sometimes arrive when you step away from the screen.",

    image: image("photo-1455390582262-044cdead277a"),

    date: "2026-10-18",

    likes: 156,

    comments: 19,

    tags: ["ideas", "creativity"],

  },

  {

    id: 7,

    type: "video",

    label: "DOCUMENTARY",

    content:

      "A quick look at my video editing workflow. Research first, storytelling next, and visuals that bring everything together.",

    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",

    image: image("photo-1492619375914-88005aa9e8fb"),

    date: "2026-10-16",

    likes: 412,

    comments: 52,

    tags: ["editing", "filmmaking", "youtube"],

  },

  {

    id: 8,

    type: "text",

    label: "THOUGHTS",

    content:

      "Don't wait for everything to be perfect. Sometimes the first imperfect step is the most important one.",

    date: "2026-10-14",

    likes: 231,

    comments: 36,

    tags: ["thoughts", "motivation"],

  },

  {

    id: 9,

    type: "image",

    label: "TRAVEL",

    content:

      "Mountains, fresh air and a little time away from the usual routine. Nature has its own way of refreshing the mind.",

    image: image("photo-1464822759023-fed622ff2c3b"),

    date: "2026-10-12",

    likes: 527,

    comments: 64,

    tags: ["travel", "nature", "mountains"],

  },

  {

    id: 10,

    type: "text",

    label: "WEB DEVELOPMENT",

    content:

      "Clean code is not just about making things work. It is about making things understandable for the next person who reads them.",

    date: "2026-10-10",

    likes: 112,

    comments: 16,

    tags: ["coding", "webdevelopment"],

  },

  {

    id: 11,

    type: "image",

    label: "WORKSPACE",

    content:

      "A little desk inspiration for another productive day. What does your ideal workspace look like?",

    image: image("photo-1497366754035-f200968a6e72"),

    date: "2026-10-08",

    likes: 204,

    comments: 25,

    tags: ["workspace", "productivity"],

  },

  {

    id: 12,

    type: "video",

    label: "CREATOR LIFE",

    content:

      "A small glimpse of the process behind creating content for the internet.",

    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",

    image: image("photo-1492619375914-88005aa9e8fb"),

    date: "2026-10-06",

    likes: 318,

    comments: 39,

    tags: ["creator", "content"],

  },

  {

    id: 13,

    type: "text",

    label: "BUSINESS",

    content:

      "A business is built on trust, consistency and solving real problems. Everything else comes after that.",

    date: "2026-10-04",

    likes: 176,

    comments: 22,

    tags: ["business", "entrepreneurship"],

  },

  {

    id: 14,

    type: "image",

    label: "INSPIRATION",

    content:

      "Take a moment. Look around. Appreciate how far you have come.",

    image: image("photo-1500530855697-b586d89ba3ee"),

    date: "2026-10-02",

    likes: 298,

    comments: 33,

    tags: ["inspiration", "nature"],

  },

  {

    id: 15,

    type: "text",

    label: "TECH & WEB",

    content:

      "React, APIs, databases and a little debugging. Another day of learning something new.",

    date: "2026-09-30",

    likes: 89,

    comments: 12,

    tags: ["react", "programming"],

  },

  {

    id: 16,

    type: "image",

    label: "CREATIVE PROCESS",

    content:

      "A notebook full of ideas is where many of my favourite projects begin.",

    image: image("photo-1456324504439-367cee3b3c32"),

    date: "2026-09-28",

    likes: 147,

    comments: 17,

    tags: ["ideas", "planning"],

  },

  {

    id: 17,

    type: "video",

    label: "TRAVEL FILM",

    content:

      "Beautiful places, little details and stories worth remembering.",

    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",

    image: image("photo-1470770841072-f978cf4d019e"),

    date: "2026-09-26",

    likes: 621,

    comments: 71,

    tags: ["travel", "filmmaking"],

  },

  {

    id: 18,

    type: "text",

    label: "PERSONAL NOTES",

    content:

      "You don't need to have the entire journey figured out. Just know your next step.",

    date: "2026-09-24",

    likes: 215,

    comments: 29,

    tags: ["life", "thoughts"],

  },

  {

    id: 19,

    type: "image",

    label: "BEHIND THE SCENES",

    content:

      "The small details make the final result. Always give the process the attention it deserves.",

    image: image("photo-1498050108023-c5249f4df085"),

    date: "2026-09-22",

    likes: 163,

    comments: 20,

    tags: ["behindthescenes", "work"],

  },

  {

    id: 20,

    type: "text",

    label: "A NEW CHAPTER",

    content:

      "More ideas to explore. More things to build. More stories to tell. This is only the beginning. 🚀",

    date: "2026-09-20",

    likes: 389,

    comments: 48,

    tags: ["journey", "growth", "updates"],

  },

];

const messages = [

  {

    name: "Aman Verma",

    text: "Bro, that video was amazing!",

    time: "10:24 AM",

    unread: 2,

    image: image("photo-1500648767791-00dcc994a43e", 120),

  },

  {

    name: "Priya Singh",

    text: "Can you share the project files?",

    time: "9:18 AM",

    unread: 1,

    image: image("photo-1534528741775-53994a69daeb", 120),

  },

  {

    name: "Rohit Mehta",

    text: "Let's plan for the next trip.",

    time: "8:45 AM",

    unread: 0,

    image: image("photo-1506794778202-cad84cf45f1d", 120),

  },

  {

    name: "Sneha Kapoor",

    text: "This looks so good! ✨",

    time: "Yesterday",

    unread: 0,

    image: image("photo-1544005313-94ddf0286df2", 120),

  },

  {

    name: "Creative Crew",

    text: "Rohit: See you all there!",

    time: "Monday",

    unread: 4,

    image: image("photo-1529156069898-49953e39b3ac", 120),

  },

];

const formatDate = (value) =>

  new Intl.DateTimeFormat("en", {

    day: "numeric",

    month: "short",

    year: "numeric",

  }).format(new Date(value));

/* ---------------------------------------------------------

   STORY ITEM

\--------------------------------------------------------- */

function StoryItem({ story, onClick }) {

  return (

    <button

      type="button"

      className={`social-story-item ${story.isOwn ? "own-story" : ""}`}

      onClick={onClick}

    >

      <span className="social-story-ring">

        <img src={story.image} alt={story.name} loading="lazy" />

        {story.isOwn && (

          <span className="social-story-add">

            <Plus size={13} />

          </span>

        )}

      </span>

      <span className="social-story-name">{story.name}</span>

    </button>

  );

}

/* ---------------------------------------------------------

   POST CARD

\--------------------------------------------------------- */

function PostCard({ post, onOpenComments }) {

  const [liked, setLiked] = useState(false);

  const [saved, setSaved] = useState(false);

  const [likeCount, setLikeCount] = useState(post.likes);

  const toggleLike = () => {

    setLiked((current) => {

      setLikeCount((count) => count + (current ? -1 : 1));

      return !current;

    });

  };

  const sharePost = async () => {

    const url = `${window.location.origin}/social#post-${post.id}`;

    try {

      if (navigator.share) {

        await navigator.share({

          title: "Faiz Alam",

          text: post.content,

          url,

        });

      } else {

        await navigator.clipboard.writeText(url);

        window.alert("Post link copied!");

      }

    } catch (error) {

      if (error.name !== "AbortError") {

        console.error(error);

      }

    }

  };

  return (

    <article className="social-post-card" id={`post-${post.id}`}>

      <div className="social-post-header">

        <div className="social-post-author">

          <img src={PROFILE} alt="Faiz Alam" />

          <div>

            <strong>Faiz Alam</strong>

            <span>@justfaizalam · {formatDate(post.date)}</span>

          </div>

        </div>

        <div className="social-post-menu">

          <span><i /> Public</span>

          <button type="button" aria-label="Post options">

            <MoreHorizontal size={20} />

          </button>

        </div>

      </div>

      <div className="social-post-body">

        {post.label && (

          <span className="social-post-label">{post.label}</span>

        )}

        <p>{post.content}</p>

      </div>

      {post.type === "image" && (

        <div className="social-post-media">

          <img

            src={post.image}

            alt={post.label || "Post image"}

            loading="lazy"

          />

        </div>

      )}

      {post.type === "video" && (

        <div className="social-post-media social-video-media">

          <iframe

            src={post.videoUrl}

            title={`Video by Faiz Alam - ${post.id}`}

            loading="lazy"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

            allowFullScreen

          />

        </div>

      )}

      {post.tags?.length > 0 && (

        <div className="social-post-tags">

          {post.tags.map((tag) => (

            <span key={tag}>#{tag}</span>

          ))}

        </div>

      )}

      <div className="social-post-actions">

        <div className="social-post-action-group">

          <button

            type="button"

            className={liked ? "liked" : ""}

            onClick={toggleLike}

            aria-label="Like post"

          >

            <Heart size={20} fill={liked ? "currentColor" : "none"} />

            <span>{likeCount}</span>

          </button>

          <button

            type="button"

            aria-label="Open comments"

            onClick={() => onOpenComments(post)}

          >

            <MessageCircle size={20} />

            <span>{post.comments}</span>

          </button>

          <button type="button" onClick={sharePost} aria-label="Share post">

            <Send size={19} />

          </button>

        </div>

        <button

          type="button"

          className={`social-save-button ${saved ? "saved" : ""}`}

          onClick={() => setSaved((current) => !current)}

          aria-label="Save post"

        >

          <Bookmark size={19} fill={saved ? "currentColor" : "none"} />

        </button>

      </div>

    </article>

  );

}

/* ---------------------------------------------------------

   POST DETAIL / COMMENTS

\--------------------------------------------------------- */

function PostDetail({ post, onClose }) {

  const [liked, setLiked] = useState(false);

  const [likeCount, setLikeCount] = useState(post.likes);

  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState([

    {

      id: 1,

      name: "Aman Verma",

      handle: "@amanverma",

      text: "Really love this update! Keep going. ✨",

      time: "2h",

    },

    {

      id: 2,

      name: "Priya Singh",

      handle: "@priyasingh",

      text: "This is inspiring. Looking forward to more!",

      time: "1h",

    },

  ]);

  useEffect(() => {

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKey = (event) => {

      if (event.key === "Escape") onClose();

    };

    window.addEventListener("keydown", handleKey);

    return () => {

      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKey);

    };

  }, [onClose]);

  const toggleLike = () => {

    setLiked((current) => {

      setLikeCount((count) => count + (current ? -1 : 1));

      return !current;

    });

  };

  const sharePost = async () => {

    const url = `${window.location.origin}/social#post-${post.id}`;

    try {

      if (navigator.share) {

        await navigator.share({

          title: "Faiz Alam",

          text: post.content,

          url,

        });

      } else {

        await navigator.clipboard.writeText(url);

        window.alert("Post link copied!");

      }

    } catch (error) {

      if (error.name !== "AbortError") {

        console.error(error);

      }

    }

  };

  const submitComment = (event) => {

    event.preventDefault();

    const text = commentText.trim();

    if (!text) return;

    setComments((current) => [

      ...current,

      {

        id: Date.now(),

        name: "Faiz Alam",

        handle: "@justfaizalam",

        text,

        time: "now",

      },

    ]);

    setCommentText("");

  };

  return (

    <div className="social-post-detail-overlay" onClick={onClose}>

      <section

        className="social-post-detail"

        onClick={(event) => event.stopPropagation()}

      >

        <button

          className="social-detail-close"

          type="button"

          onClick={onClose}

          aria-label="Close post"

        >

          <X size={21} />

        </button>

        <div className="social-detail-media-column">

          {post.type === "image" && (

            <img src={post.image} alt={post.label || "Post image"} />

          )}

          {post.type === "video" && (

            <iframe

              src={post.videoUrl}

              title={`Video by Faiz Alam - ${post.id}`}

              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

              allowFullScreen

            />

          )}

          {post.type === "text" && (

            <div className="social-detail-text-post">

              <span>FAIZ ALAM · THOUGHTS</span>

              <p>{post.content}</p>

            </div>

          )}

        </div>

        <div className="social-detail-conversation">

          <header className="social-detail-author">

            <img src={PROFILE} alt="Faiz Alam" />

            <div>

              <strong>Faiz Alam</strong>

              <span>@justfaizalam · {formatDate(post.date)}</span>

            </div>

            <span className="social-detail-public">PUBLIC</span>

          </header>

          <div className="social-detail-caption">

            {post.label && <span>{post.label}</span>}

            <p>{post.content}</p>

            {post.tags?.length > 0 && (

              <div>

                {post.tags.map((tag) => (

                  <span key={tag}>#{tag}</span>

                ))}

              </div>

            )}

          </div>

          <div className="social-detail-comments-heading">

            <strong>Comments</strong>

            <span>{comments.length} conversations</span>

          </div>

          <div className="social-detail-comments">

            {comments.map((comment) => (

              <article className="social-detail-comment" key={comment.id}>

                <div className="social-comment-avatar">

                  {comment.name.charAt(0)}

                </div>

                <div>

                  <div className="social-comment-meta">

                    <strong>{comment.name}</strong>

                    <span>{comment.handle} · {comment.time}</span>

                  </div>

                  <p>{comment.text}</p>

                  <button type="button">Reply</button>

                </div>

              </article>

            ))}

          </div>

          <div className="social-detail-actions">

            <button

              type="button"

              className={liked ? "liked" : ""}

              onClick={toggleLike}

            >

              <Heart size={19} fill={liked ? "currentColor" : "none"} />

              {likeCount}

            </button>

            <button

              type="button"

              onClick={() =>

                document

                  .querySelector(".social-detail-comment-input")

                  ?.focus()

              }

            >

              <MessageCircle size={19} />

              Comment

            </button>

            <button type="button" onClick={sharePost}>

              <Send size={18} />

              Share

            </button>

          </div>

          <form className="social-detail-comment-form" onSubmit={submitComment}>

            <img src={PROFILE} alt="Your profile" />

            <input

              className="social-detail-comment-input"

              value={commentText}

              onChange={(event) => setCommentText(event.target.value)}

              placeholder="Write a comment..."

              aria-label="Write a comment"

            />

            <button type="submit" disabled={!commentText.trim()}>

              Post

            </button>

          </form>

        </div>

      </section>

    </div>

  );

}

/* ---------------------------------------------------------

   STORY VIEWER

\--------------------------------------------------------- */

function StoryViewer({ story, onClose, onNext, onPrevious }) {

  useEffect(() => {

    const timer = window.setTimeout(onNext, 5000);

    const handleKey = (event) => {

      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") onNext();

      if (event.key === "ArrowLeft") onPrevious();

    };

    window.addEventListener("keydown", handleKey);

    return () => {

      window.clearTimeout(timer);

      window.removeEventListener("keydown", handleKey);

    };

  }, [story.id, onNext, onPrevious, onClose]);

  return (

    <div className="social-story-overlay" onClick={onClose}>

      <div

        className="social-story-viewer"

        onClick={(event) => event.stopPropagation()}

      >

        <div className="social-story-progress">

          <span key={story.id} />

        </div>

        <div className="social-story-viewer-header">

          <div>

            <img src={story.image} alt="" />

            <div>

              <strong>{story.name}</strong>

              <small>Just now</small>

            </div>

          </div>

          <button type="button" onClick={onClose} aria-label="Close story">

            <X size={22} />

          </button>

        </div>

        <img

          className="social-story-background"

          src={story.background}

          alt=""

        />

        <div className="social-story-content">

          <span>FAIZ ALAM · STORIES</span>

          <h2>{story.title}</h2>

          <p>{story.text}</p>

        </div>

        <button

          className="social-story-nav previous"

          type="button"

          onClick={onPrevious}

          aria-label="Previous story"

        >

          <ChevronLeft />

        </button>

        <button

          className="social-story-nav next"

          type="button"

          onClick={onNext}

          aria-label="Next story"

        >

          <ChevronRight />

        </button>

        <div className="social-story-viewer-bottom">

          <span>Enjoying this moment?</span>

          <Heart size={21} />

        </div>

      </div>

    </div>

  );

}

/* ---------------------------------------------------------

   MESSAGES PANEL

\--------------------------------------------------------- */

function MessagesPanel({ onClose }) {

  useEffect(() => {

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKey = (event) => {

      if (event.key === "Escape") onClose();

    };

    window.addEventListener("keydown", handleKey);

    return () => {

      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKey);

    };

  }, [onClose]);

  return (

    <div className="social-modal-overlay" onClick={onClose}>

      <div

        className="social-messages-panel"

        onClick={(event) => event.stopPropagation()}

      >

        <div className="social-panel-heading">

          <div>

            <span>YOUR INBOX</span>

            <h2>Messages</h2>

          </div>

          <button type="button" onClick={onClose} aria-label="Close messages">

            <X />

          </button>

        </div>

        <div className="social-message-search">

          <Search size={17} />

          <span>Search conversations...</span>

        </div>

        <div className="social-message-list">

          {messages.map((message) => (

            <div className="social-message-item" key={message.name}>

              <img src={message.image} alt={message.name} loading="lazy" />

              <div>

                <strong>{message.name}</strong>

                <p>{message.text}</p>

              </div>

              <div className="social-message-meta">

                <small>{message.time}</small>

                {message.unread > 0 && <span>{message.unread}</span>}

              </div>

            </div>

          ))}

        </div>

        <div className="social-message-note">

          Message preview · Chat functionality will be connected later

        </div>

      </div>

    </div>

  );

}

/* ---------------------------------------------------------

   CREATE PANEL

\--------------------------------------------------------- */

function CreatePanel({ onClose, onStory }) {

  useEffect(() => {

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKey = (event) => {

      if (event.key === "Escape") onClose();

    };

    window.addEventListener("keydown", handleKey);

    return () => {

      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKey);

    };

  }, [onClose]);

  return (

    <div className="social-modal-overlay" onClick={onClose}>

      <div

        className="social-create-panel"

        onClick={(event) => event.stopPropagation()}

      >

        <div className="social-panel-heading">

          <div>

            <span>SHARE SOMETHING</span>

            <h2>Create</h2>

          </div>

          <button type="button" onClick={onClose} aria-label="Close create">

            <X />

          </button>

        </div>

        <div className="social-create-grid">

          <button type="button" onClick={onClose}>

            <ImagePlus />

            <strong>Post</strong>

            <small>Share photos and thoughts</small>

          </button>

          <button type="button" onClick={onStory}>

            <Camera />

            <strong>Story</strong>

            <small>Share a temporary moment</small>

          </button>

          <button type="button" onClick={onClose}>

            <Video />

            <strong>Video</strong>

            <small>Share a video</small>

          </button>

          <button type="button" onClick={onClose}>

            <PenLine />

            <strong>Write</strong>

            <small>Share your thoughts</small>

          </button>

        </div>

        <p>

          Publishing will be connected when the backend is ready.

        </p>

      </div>

    </div>

  );

}

/* ---------------------------------------------------------

   MAIN SOCIAL PAGE

\--------------------------------------------------------- */

function Social() {

  const [activeStory, setActiveStory] = useState(null);

  const [activePost, setActivePost] = useState(null);

  const [showMessages, setShowMessages] = useState(false);

  const [showCreate, setShowCreate] = useState(false);

  const [activeFilter, setActiveFilter] = useState("All");

  const [followedSuggestions, setFollowedSuggestions] = useState([]);

  const filteredPosts =

    activeFilter === "All"

      ? posts

      : posts.filter(

          (post) => post.type === activeFilter.toLowerCase()

        );

  const openStory = (index) => setActiveStory(index);

  const nextStory = () => {

    setActiveStory((current) =>

      current === null ? null : (current + 1) % stories.length

    );

  };

  const previousStory = () => {

    setActiveStory((current) =>

      current === null

        ? null

        : (current - 1 + stories.length) % stories.length

    );

  };

  const toggleFollow = (id) => {

    setFollowedSuggestions((current) =>

      current.includes(id)

        ? current.filter((item) => item !== id)

        : [...current, id]

    );

  };

  return (

    <div className="social-page">

      <SEO

        title="Social Feed | Faiz Alam"

        description="Stories, photos, videos and updates from Faiz Alam."

        path="/social"

      />

      <div className="social-container">

        <div className="social-layout">

          {/* LEFT SIDEBAR */}

          <aside className="social-left-sidebar">

            <div className="social-profile-mini">

              <img src={PROFILE} alt="Faiz Alam" />

              <div>

                <strong>Faiz Alam</strong>

                <span>@justfaizalam</span>

              </div>

            </div>

            <nav className="social-sidebar-nav">

              <a href="#social-home" className="active">

                <Home size={19} /> Home

              </a>

              <a href="#social-posts">

                <Grid3X3 size={19} /> My Posts

              </a>

              <a href="#social-posts">

                <Bookmark size={19} /> Saved

              </a>

              <a href="#social-posts">

                <Heart size={19} /> Liked

              </a>

              <button

                type="button"

                onClick={() => setShowMessages(true)}

              >

                <MessageCircle size={19} /> Messages

              </button>

            </nav>

            <div className="social-sidebar-categories">

              <span>CATEGORIES</span>

              {["All", "Image", "Video", "Text"].map((type) => (

                <button

                  type="button"

                  key={type}

                  className={activeFilter === type ? "active" : ""}

                  onClick={() => setActiveFilter(type)}

                >

                  <Hash size={16} />

                  {type === "All" ? "All Posts" : `${type} Posts`}

                </button>

              ))}

            </div>

            <div className="social-sidebar-promo">

              <img

                src={image("photo-1470770841072-f978cf4d019e", 500)}

                alt="Mountain landscape"

                loading="lazy"

              />

              <div>

                <h3>Ideas in progress.</h3>

                <span>A PUBLIC JOURNEY</span>

              </div>

            </div>

          </aside>

          {/* MAIN FEED */}

          <main className="social-main" id="social-home">

            {/* STORIES */}

            <section className="social-stories-section">

              <div className="social-section-heading">

                <div>

                  <h2>Stories</h2>

                  <span>Moments worth sharing</span>

                </div>

                <span className="social-live-label">

                  <i /> LIVE

                </span>

              </div>

              <div className="social-stories-list">

                {stories.map((story, index) => (

                  <StoryItem

                    key={story.id}

                    story={story}

                    onClick={() => openStory(index)}

                  />

                ))}

              </div>

            </section>

            {/* COMPOSER */}

            <section className="social-composer">

              <div className="social-composer-top">

                <img src={PROFILE} alt="Faiz Alam" />

                <button

                  type="button"

                  onClick={() => setShowCreate(true)}

                >

                  Share an update with your audience...

                </button>

              </div>

              <div className="social-composer-actions">

                <button type="button" onClick={() => setShowCreate(true)}>

                  <ImagePlus /> Photo

                </button>

                <button type="button" onClick={() => setShowCreate(true)}>

                  <Video /> Video

                </button>

                <button type="button" onClick={() => setShowCreate(true)}>

                  <Link2 /> Link

                </button>

                <button type="button" onClick={() => setShowCreate(true)}>

                  <PenLine /> Write

                </button>

              </div>

            </section>

            {/* FEED HEADING */}

            <div className="social-feed-heading">

              <div>

                <h2>Your <em>feed.</em></h2>

                <span>Updates from my journey</span>

              </div>

              <span className="social-total-posts">

                {filteredPosts.length} POSTS

              </span>

            </div>

            {/* FILTERS */}

            <div className="social-mobile-filters">

              {["All", "Image", "Video", "Text"].map((type) => (

                <button

                  type="button"

                  key={type}

                  className={activeFilter === type ? "active" : ""}

                  onClick={() => setActiveFilter(type)}

                >

                  {type}

                </button>

              ))}

            </div>

            {/* POSTS */}

            <section className="social-posts-list" id="social-posts">

              {filteredPosts.map((post) => (

                <PostCard

                  key={post.id}

                  post={post}

                  onOpenComments={setActivePost}

                />

              ))}

            </section>

            <div className="social-feed-end">

              YOU'RE ALL CAUGHT UP

            </div>

          </main>

          {/* RIGHT SIDEBAR */}

          <aside className="social-right-sidebar">

            <section className="social-intro-card">

              <span>A SMALL NOTE</span>

              <h3>

                Made in public.

                <em>Shared with purpose.</em>

              </h3>

              <p>

                A space for my ideas, experiments, updates and

                behind-the-scenes moments.

              </p>

              <Link to="/contact">

                Say hello <ArrowUpRight size={15} />

              </Link>

            </section>

            <section className="social-sidebar-card">

              <div className="social-sidebar-heading-row">

                <h3>Trending Topics</h3>

                <span>See All</span>

              </div>

              <div className="social-trending">

                {[

                  "#YouTube",

                  "#WebDevelopment",

                  "#Documentary",

                  "#Business",

                  "#LifeAndLearning",

                  "#BehindTheScenes",

                ].map((tag) => (

                  <span key={tag}>{tag}</span>

                ))}

              </div>

            </section>

            <section className="social-sidebar-card social-people-card">

              <div className="social-sidebar-heading-row">

                <h3>People to follow</h3>

                <span>Suggested</span>

              </div>

              <div className="social-suggested-user">

                <img

                  src={image("photo-1500648767791-00dcc994a43e", 120)}

                  alt="Creator Community"

                  loading="lazy"

                />

                <div className="social-suggested-info">

                  <strong>Creator Community</strong>

                  <small>Content & creativity</small>

                </div>

                <button

                  type="button"

                  className={`social-suggest-follow ${

                    followedSuggestions.includes("community")

                      ? "following"

                      : ""

                  }`}

                  onClick={() => toggleFollow("community")}

                >

                  {followedSuggestions.includes("community")

                    ? "Following"

                    : "Follow"}

                </button>

              </div>

              <div className="social-suggested-user">

                <img

                  src={image("photo-1534528741775-53994a69daeb", 120)}

                  alt="Design Stories"

                  loading="lazy"

                />

                <div className="social-suggested-info">

                  <strong>Design Stories</strong>

                  <small>Design & inspiration</small>

                </div>

                <button

                  type="button"

                  className={`social-suggest-follow ${

                    followedSuggestions.includes("design")

                      ? "following"

                      : ""

                  }`}

                  onClick={() => toggleFollow("design")}

                >

                  {followedSuggestions.includes("design")

                    ? "Following"

                    : "Follow"}

                </button>

              </div>

            </section>

            <section className="social-sidebar-card social-about-mini">

              <span>FAIZ ALAM</span>

              <p>Software Engineer · Creator · Learner</p>

              <Link to="/about">

                About me <ArrowUpRight size={14} />

              </Link>

            </section>

          </aside>

        </div>

      </div>

      {/* POST DETAIL */}

      {activePost && (

        <PostDetail

          post={activePost}

          onClose={() => setActivePost(null)}

        />

      )}

      {/* STORY VIEWER */}

      {activeStory !== null && (

        <StoryViewer

          story={stories[activeStory]}

          onClose={() => setActiveStory(null)}

          onNext={nextStory}

          onPrevious={previousStory}

        />

      )}

      {/* CREATE MODAL */}

      {showCreate && (

        <CreatePanel

          onClose={() => setShowCreate(false)}

          onStory={() => {

            setShowCreate(false);

            openStory(0);

          }}

        />

      )}

      {/* MESSAGES */}

      {showMessages && (

        <MessagesPanel onClose={() => setShowMessages(false)} />

      )}

    </div>

  );

}

export default Social;
