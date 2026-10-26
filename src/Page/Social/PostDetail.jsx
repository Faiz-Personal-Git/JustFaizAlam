import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CalendarDays, FileText, Heart, Image as ImageIcon, Video } from "lucide-react";
import SEO from "../../components/SEO";
import socialPosts from "../../data/socialPosts";
import "./Social.css";

const formatDate = (value) => new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));

function PostDetail() {
  const { postId } = useParams();
  const post = socialPosts.find(item => item.id === postId);
  if (!post) return <main className="social-detail-page"><div className="social-shell social-not-found"><span className="social-section-label"><span>404</span> POST NOT FOUND</span><h1>This update <em>doesn’t exist.</em></h1><p>The post may have moved, or the link may be incorrect.</p><Link className="social-back-link" to="/social"><ArrowLeft size={15} /> Back to social feed</Link></div></main>;

  return <main className="social-detail-page">
    <SEO title={`${post.label} | Faiz Alam`} description={post.content.slice(0, 155)} path={`/social/${post.id}`} type="article" image={post.image ? `https://justfaizalam.vercel.app${post.image}` : undefined} />
    <div className="social-shell social-detail-shell">
      <Link className="social-back-link" to="/social"><ArrowLeft size={15} /> Back to all updates</Link>
      <article className="social-detail-card">
        <div className="social-detail-topline"><span className="social-section-label"><span>FAIZ / FEED</span></span><span className="social-post-kind">{post.type === "image" ? <ImageIcon size={13} /> : post.type === "video" ? <Video size={13} /> : <FileText size={13} />}{post.type.toUpperCase()}</span></div>
        <div className="social-detail-author"><img src="/Images/dp.png" alt="Faiz Alam" /><div><strong>Faiz Alam</strong><span>@justfaizalam</span></div></div>
        <div className="social-detail-content"><div className="social-post-label">{post.label}</div><h1>{post.content}</h1><span className="social-post-date"><CalendarDays size={14} /> {formatDate(post.date)}</span></div>
        {post.type === "image" && post.image && <div className="social-detail-media"><img src={post.image} alt={post.imageAlt || ""} /></div>}
        {post.type === "video" && post.videoUrl && <div className="social-detail-media social-post-video"><iframe src={post.videoUrl} title="Video shared by Faiz Alam" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>}
        <div className="social-post-tags">{post.tags?.map(tag => <span key={tag}>#{tag}</span>)}</div>
        <div className="social-detail-bottom"><span><Heart size={15} /> {post.likes} sample likes</span><Link to="/social">More updates <ArrowUpRight size={15} /></Link></div>
      </article>
    </div>
  </main>;
}
export default PostDetail;
