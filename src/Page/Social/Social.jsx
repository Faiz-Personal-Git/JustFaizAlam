import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Image as ImageIcon, Video, FileText, Heart, MessageCircle, Share2, MoveUpRight } from "lucide-react";
import SEO from "../../components/SEO";
import socialPosts from "../../data/socialPosts";
import "./Social.css";

const formatDate = (value) => new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));

function PostMedia({ post }) {
  if (post.type === "image" && post.image) return <div className="social-post-media social-post-image"><img src={post.image} alt={post.imageAlt || ""} loading="lazy" /></div>;
  if (post.type === "video" && post.videoUrl) return <div className="social-post-media social-post-video"><iframe src={post.videoUrl} title="Video shared by Faiz Alam" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>;
  return null;
}

function Social() {
  const copyPostLink = async (postId) => {
    const url = `${window.location.origin}/social/${postId}`;
    try { await navigator.clipboard.writeText(url); window.alert("Post link copied."); }
    catch { window.prompt("Copy this post link:", url); }
  };

  return <div className="social-page">
    <SEO title="Social Feed | Faiz Alam" description="Notes, photos, videos and updates from Faiz Alam — software engineer, website developer and documentary creator." path="/social" />
    <section className="social-intro">
      <div className="social-shell">
        <div className="social-eyebrow"><span className="social-eyebrow-dot" /> THE PERSONAL FEED</div>
        <div className="social-intro-grid">
          <div>
            <h1>Life between<br /><em>the projects.</em></h1>
            <p className="social-intro-copy">Thoughts, work in progress, things I’m learning, and stories worth sharing. A little more personal, a little less polished.</p>
          </div>
          <div className="social-profile-card">
            <div className="social-profile-topline"><span>CREATOR PROFILE</span><span className="social-profile-status"><i /> PUBLIC</span></div>
            <div className="social-profile-main">
              <div className="social-avatar-ring"><img src="/Images/dp.png" alt="Faiz Alam" /></div>
              <div className="social-profile-identity"><h2>Faiz Alam</h2><span>@justfaizalam</span><p>Software Engineer · YouTuber · Storyteller</p></div>
            </div>
            <p className="social-profile-bio">Building digital products and making complex stories easier to understand.</p>
            <div className="social-profile-links"><Link to="/about">About me <ArrowUpRight size={14} /></Link><Link to="/contact">Get in touch <ArrowUpRight size={14} /></Link></div>
          </div>
        </div>
        <div className="social-intro-bottom"><span>NOTES / PHOTOS / VIDEOS</span><span>UPDATED AS I GO <b>↘</b></span></div>
      </div>
    </section>

    <section className="social-feed-section">
      <div className="social-shell">
        <div className="social-feed-heading">
          <div><div className="social-section-label"><span>01</span> THE TIMELINE</div><h2>Latest <em>updates.</em></h2></div>
          <span className="social-post-count">{String(socialPosts.length).padStart(2, "0")} POSTS</span>
        </div>
        <div className="social-feed-layout">
          <div className="social-timeline">
            {socialPosts.map((post, index) => <article className="social-post" key={post.id}>
              <div className="social-post-rail"><span className="social-post-index">{String(index + 1).padStart(2, "0")}</span><span className="social-post-rail-line" /></div>
              <div className="social-post-card">
                <div className="social-post-header">
                  <div className="social-post-author"><img src="/Images/dp.png" alt="" /><div><strong>Faiz Alam</strong><span>@justfaizalam</span></div></div>
                  <span className="social-post-kind">{post.type === "image" ? <ImageIcon size={13} /> : post.type === "video" ? <Video size={13} /> : <FileText size={13} />}{post.type.toUpperCase()}</span>
                </div>
                <div className="social-post-body"><div className="social-post-label">{post.label}</div><p>{post.content}</p></div>
                <PostMedia post={post} />
                {post.tags?.length > 0 && <div className="social-post-tags">{post.tags.map(tag => <span key={tag}>#{tag}</span>)}</div>}
                <div className="social-post-footer">
                  <span className="social-post-date"><CalendarDays size={13} /> {formatDate(post.date)}</span>
                  <div className="social-post-actions"><span title="Sample likes"><Heart size={14} /> {post.likes}</span><Link to={`/social/${post.id}`}><MessageCircle size={14} /> View post</Link><button type="button" onClick={() => copyPostLink(post.id)}><Share2 size={14} /> Share</button></div>
                </div>
              </div>
            </article>)}
          </div>
          <aside className="social-sidebar">
            <div className="social-sidebar-card social-note-card"><span className="social-sidebar-kicker">A SMALL NOTE</span><h3>Made in public.<br /><em>Shared with purpose.</em></h3><p>This feed is a home for ideas, experiments, updates and the occasional behind-the-scenes moment.</p><Link to="/contact">Say hello <MoveUpRight size={14} /></Link></div>
            <div className="social-sidebar-card"><span className="social-sidebar-kicker">EXPLORE MORE</span>
              <Link className="social-explore-link" to="/projects"><span><b>Selected work</b><small>Projects & builds</small></span><ArrowUpRight size={16} /></Link>
              <Link className="social-explore-link" to="/videos"><span><b>Watch stories</b><small>Videos & documentaries</small></span><ArrowUpRight size={16} /></Link>
              <Link className="social-explore-link" to="/blog"><span><b>Read the blog</b><small>Longer thoughts</small></span><ArrowUpRight size={16} /></Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>;
}
export default Social;
