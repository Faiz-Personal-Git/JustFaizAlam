
// // import { useMemo } from "react";
// // import {
// //   ArrowRight,
// //   ArrowUpRight,
// //   Play,
// //   ShieldCheck,
// //   Mail,
// //   Atom,
// //   Users,
// //   Scale,
// //   Leaf,
// //   ChartNoAxesColumnIncreasing,
// //   Waves,
// //   Code2,
// //   FileText,
// //   CirclePlay,
// //   ExternalLink,
// //   MoveUpRight,
// // } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import videos from "../../data/videos";
// // import categories from "../../data/categories";
// // import quizzes from "../../data/quizzes";
// // import ScrollReveal from "../../components/ScrollReveal";
// // import SEO from "../../components/SEO";
// // import "./Home.css";

// // const workItems = [
// //   {
// //     number: "01",
// //     category: "FULL-STACK DEVELOPMENT",
// //     title: "BharatTouch",
// //     description: "A digital networking platform built around profile pages, sharing tools and database-driven features.",
// //     tech: ["ASP.NET MVC", "MySQL"],
// //     image: "/Images/btlogo.svg",
// //     link: "https://bharattouch.com/",
// //     type: "Platform development",
// //   },
// //   {
// //     number: "02",
// //     category: "API DEVELOPMENT",
// //     title: "BONC Network",
// //     description: "Backend and API implementation designed to support a connected digital product.",
// //     tech: ["ASP.NET Core", "MySQL"],
// //     image: "/Images/bonclogo.svg",
// //     link: "https://boncnetwork.com/",
// //     type: "Backend engineering",
// //   },
// //   {
// //     number: "03",
// //     category: "FULL-STACK DEVELOPMENT",
// //     title: "PatrolX",
// //     description: "A security management platform with operational workflows and application-side logic.",
// //     tech: ["ASP.NET MVC", "SQL"],
// //     image: "/Images/patrolxlogo.png",
// //     link: "https://patrolx.app/",
// //     type: "Product engineering",
// //   },
// // ];

// // const beliefs = [
// //   { number: "01", icon: Atom, title: "Rationalism", description: "Evidence first. Ask questions, examine the facts and be willing to change your mind." },
// //   { number: "02", icon: Users, title: "Human dignity", description: "A society should be measured by how it treats people with the least power and opportunity." },
// //   { number: "03", icon: Scale, title: "Secularism", description: "Equal rights and equal citizenship should never depend on someone's faith or background." },
// //   { number: "04", icon: Leaf, title: "Environmentalism", description: "Clean air, clean water and a liveable climate are essentials, not optional luxuries." },
// //   { number: "05", icon: ChartNoAxesColumnIncreasing, title: "Progress", description: "Ideas and traditions deserve scrutiny. Keep what helps people; improve what does not." },
// //   { number: "06", icon: Waves, title: "Freedom", description: "Freedom means room to speak, question, disagree and belong—equally for everyone." },
// // ];

// // const howIWork = [
// //   {
// //     number: "01",
// //     icon: CirclePlay,
// //     title: "Documentaries",
// //     eyebrow: "RESEARCH → SCRIPT → STORY",
// //     description: "I turn complex subjects into clear, engaging videos. Research, context and sources matter as much as the final edit.",
// //   },
// //   {
// //     number: "02",
// //     icon: ShieldCheck,
// //     title: "Content standards",
// //     eyebrow: "CLARITY OVER HYPE",
// //     description: "I aim for family-friendly, informative work. I avoid promotions that conflict with public wellbeing and do not take paid political-party promotions.",
// //   },
// //   {
// //     number: "03",
// //     icon: Mail,
// //     title: "Communication",
// //     eyebrow: "SHORT · CLEAR · RELEVANT",
// //     description: "For collaborations, project ideas or video suggestions, email is the best place to start. I may not be able to respond to every personal request.",
// //     email: "justfaizalam@gmail.com",
// //   },
// // ];

// // function SectionIntro({ number, eyebrow, title, accent, description, link, linkText }) {
// //   return (
// //     <div className="section-intro">
// //       <div className="section-intro-top">
// //         <span className="section-index">{number}</span>
// //         <span className="section-eyebrow">{eyebrow}</span>
// //       </div>
// //       <div className="section-intro-body">
// //         <div>
// //           <h2 className="section-heading-title">{title} <em>{accent}</em></h2>
// //           {description && <p className="section-heading-copy">{description}</p>}
// //         </div>
// //         {link && <Link className="section-heading-link" to={link}>{linkText}<ArrowUpRight size={16} /></Link>}
// //       </div>
// //     </div>
// //   );
// // }

// // function Home() {
// //   const featuredVideos = videos.slice(0, 3);
// //   const quizCategories = useMemo(() => {
// //     const quizList = Object.values(quizzes || {});
// //     return categories
// //       .filter((category) => category.id !== "all")
// //       .map((category) => {
// //         const categoryVideoIds = videos
// //           .filter((video) => video.category?.toLowerCase().replace(/\s+/g, "-") === category.id)
// //           .map((video) => video.id);
// //         return {
// //           ...category,
// //           quizCount: quizList.filter((quiz) => categoryVideoIds.includes(quiz.videoId)).length,
// //         };
// //       })
// //       .filter((category) => category.quizCount > 0);
// //   }, []);

// //   return (
// //     <div className="home-page">
// //       <SEO
// //         title="Faiz Alam | Software Engineer, YouTuber & Documentary Creator"
// //         description="Faiz Alam is a software engineer, YouTuber and documentary creator from India building digital products, websites and stories worth understanding."
// //         path="/"
// //       />

// //       {/* HERO */}
// //       <section className="home-hero">
// //         <div className="hero-background" aria-hidden="true"><img src="/Images/dp.png" alt="" /></div>
// //         <div className="hero-overlay" aria-hidden="true" />
// //         <div className="hero-grid-lines" aria-hidden="true" />
// //         <div className="home-container hero-container">
// //           <div className="hero-content">
// //             <ScrollReveal direction="up">
// //               <div className="hero-label"><span className="hero-live-dot" /> INDEPENDENT CREATOR <span className="hero-label-divider">/</span> SOFTWARE ENGINEER</div>
// //             </ScrollReveal>
// //             <ScrollReveal direction="up" delay={80}>
// //               <p className="hero-kicker">TECHNOLOGY. PEOPLE. IDEAS.</p>
// //               <h1 className="hero-title">Curiosity is<br /><em>the starting point.</em></h1>
// //             </ScrollReveal>
// //             <ScrollReveal direction="up" delay={160}>
// //               <p className="hero-description">I build digital products and create documentaries that make complicated stories easier to understand.</p>
// //             </ScrollReveal>
// //             <ScrollReveal direction="up" delay={230}>
// //               <div className="hero-actions">
// //                 <Link to="/videos" className="button button-primary"><Play size={15} fill="currentColor" /> Explore documentaries</Link>
// //                 <Link to="/projects" className="button button-outline">View my work <ArrowUpRight size={16} /></Link>
// //               </div>
// //               <div className="hero-footnote"><span className="hero-footnote-line" /> Based in Ambala, India <span className="hero-footnote-dot">·</span> Working across code and stories</div>
// //             </ScrollReveal>
// //           </div>
// //         </div>
// //         <div className="hero-side-note">FAIZ ALAM <span>—</span> PERSONAL PORTFOLIO</div>
// //         <a className="hero-scroll" href="#who-i-am"><span>SCROLL TO EXPLORE</span><span className="hero-scroll-line" /></a>
// //       </section>

// //       {/* 01 — ABOUT */}
// //       <section className="home-section about-section" id="who-i-am">
// //         <div className="home-container">
// //           <SectionIntro number="01" eyebrow="A LITTLE ABOUT ME" title="Two worlds." accent="One curiosity." description="I move between software engineering and storytelling—building useful things, then asking better questions about the world around them." />
// //           <div className="about-feature">
// //             <ScrollReveal direction="left">
// //               <div className="about-image-stack">
// //                 <div className="about-image-main"><img src="/Images/1.png" alt="Faiz Alam" loading="lazy" /></div>
// //                 <div className="about-image-small"><img src="/Images/5.png" alt="Faiz Alam working on creative projects" loading="lazy" /></div>
// //                 <span className="about-image-caption">THE PERSON BEHIND THE PROJECTS</span>
// //                 <span className="about-image-mark">FA.</span>
// //               </div>
// //             </ScrollReveal>
// //             <ScrollReveal direction="right" delay={100}>
// //               <div className="about-copy">
// //                 <span className="content-overline">HELLO, I'M FAIZ</span>
// //                 <h3>Engineer by practice.<br /><em>Storyteller by choice.</em></h3>
// //                 <p>I work on web applications and digital products, with experience across frontend and backend development. Outside engineering, I make documentary-style videos that explore people, systems and ideas.</p>
// //                 <p>This website brings those two sides together: the things I build, the stories I publish and the questions that keep me curious.</p>
// //                 <div className="about-stats">
// //                   <div><strong>01</strong><span>Curiosity-led<br />approach</span></div>
// //                   <div><strong>02</strong><span>Code +<br />storytelling</span></div>
// //                   <div><strong>03</strong><span>Research-minded<br />content</span></div>
// //                 </div>
// //                 <Link to="/about" className="underlined-link">Read my full story <ArrowUpRight size={16} /></Link>
// //               </div>
// //             </ScrollReveal>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 02 — DOCUMENTARIES */}
// //       <section className="home-section documentaries-section" id="documentaries">
// //         <div className="home-container">
// //           <SectionIntro number="02" eyebrow="WATCH · QUESTION · LEARN" title="Stories worth" accent="looking into." description="Documentary videos built around research, context and the details that are easy to miss." link="/videos" linkText="All documentaries" />
// //           <div className="documentary-list">
// //             {featuredVideos.map((video, index) => (
// //               <ScrollReveal key={video.id} direction="up" delay={index * 80}>
// //                 <article className="documentary-row">
// //                   <Link to={`/videos/${video.id}`} className="documentary-image">
// //                     <img src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} alt={video.title} loading="lazy" />
// //                     <span className="documentary-play"><Play size={17} fill="currentColor" /></span>
// //                     <span className="documentary-number">EP. {String(video.id).padStart(2, "0")}</span>
// //                     {video.duration && <span className="documentary-duration">{video.duration}</span>}
// //                   </Link>
// //                   <div className="documentary-info">
// //                     <div className="documentary-meta"><span>{video.category || "DOCUMENTARY"}</span><span>FEATURED {String(index + 1).padStart(2, "0")}</span></div>
// //                     <h3>{video.title}</h3>
// //                     {video.subtitle && <p>{video.subtitle}</p>}
// //                     <div className="documentary-actions">
// //                       <Link to={`/videos/${video.id}`} className="video-action video-action-primary"><FileText size={14} /> Research & quiz <ArrowUpRight size={13} /></Link>
// //                       <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noreferrer" className="video-action"><Play size={13} fill="currentColor" /> Watch video</a>
// //                       <a href={`/Resources/${video.id}.pdf`} target="_blank" rel="noreferrer" className="video-action"><ExternalLink size={13} /> Source PDF</a>
// //                     </div>
// //                   </div>
// //                 </article>
// //               </ScrollReveal>
// //             ))}
// //           </div>
// //           <div className="research-note"><span className="research-note-icon"><FileText size={17} /></span><p><strong>Research is part of the story.</strong> Open a video to explore its related quiz and sources, or browse the complete archive.</p><Link to="/videos">Browse archive <ArrowRight size={15} /></Link></div>
// //         </div>
// //       </section>

// //       {/* 03 — QUIZ */}
// //       <section className="home-section quiz-section" id="quiz">
// //         <div className="home-container">
// //           <SectionIntro number="03" eyebrow="DON'T JUST WATCH" title="How much did" accent="you take away?" description="Put your understanding to the test with quizzes connected to documentary topics." link="/quiz" linkText="Open quiz library" />
// //           <div className="quiz-feature">
// //             <div className="quiz-feature-copy">
// //               <span className="quiz-stamp">THE KNOWLEDGE CHECK</span>
// //               <div className="quiz-big-number">Q<span>.</span></div>
// //               <h3>Watch with curiosity.<br /><em>Leave with clarity.</em></h3>
// //               <p>Choose a topic, answer questions and revisit the story from a different angle. Each quiz is a chance to check what stayed with you.</p>
// //               <Link to="/quiz" className="button button-dark">Start exploring <ArrowUpRight size={16} /></Link>
// //               <div className="quiz-feature-foot"><span>{quizCategories.length} TOPIC CATEGORIES</span><span>LEARN BY TESTING</span></div>
// //             </div>
// //             <div className="quiz-topics">
// //               <div className="quiz-topics-heading"><span>EXPLORE BY TOPIC</span><span>01 — {String(Math.min(quizCategories.length, 5)).padStart(2, "0")}</span></div>
// //               {quizCategories.slice(0, 5).map((category, index) => {
// //                 const Icon = category.icon;
// //                 return <Link to={`/quiz/${category.id}`} className="quiz-topic-row" key={category.id}><span className="quiz-topic-index">{String(index + 1).padStart(2, "0")}</span><span className="quiz-topic-icon">{Icon && <Icon size={17} />}</span><span className="quiz-topic-name">{category.name}</span><span className="quiz-topic-count">{category.quizCount} {category.quizCount === 1 ? "QUIZ" : "QUIZZES"}</span><ArrowUpRight className="quiz-topic-arrow" size={17} /></Link>;
// //               })}
// //               {quizCategories.length === 0 && <p className="quiz-empty">New quizzes will appear here as they are published.</p>}
// //               <Link to="/quiz" className="quiz-topics-all">View all quiz topics <ArrowRight size={15} /></Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 04 — BELIEFS */}
// //       <section className="home-section beliefs-section" id="beliefs">
// //         <div className="home-container">
// //           <SectionIntro number="04" eyebrow="THE PRINCIPLES BEHIND THE WORK" title="Ideas I" accent="stand by." description="These principles shape the questions I ask and the kind of work I want to put into the world." />
// //           <div className="beliefs-list">
// //             {beliefs.map((belief, index) => {
// //               const Icon = belief.icon;
// //               return <ScrollReveal key={belief.number} direction="up" delay={index * 45}><article className="belief-row"><span className="belief-number">{belief.number}</span><span className="belief-icon"><Icon size={21} strokeWidth={1.5} /></span><h3>{belief.title}</h3><p>{belief.description}</p><span className="belief-row-arrow"><ArrowUpRight size={17} /></span></article></ScrollReveal>;
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 05 — SELECTED WORK */}
// //       <section className="home-section work-section" id="selected-work">
// //         <div className="home-container">
// //           <SectionIntro number="05" eyebrow="SELECTED ENGINEERING WORK" title="Built to" accent="be useful." description="A selection of digital products and backend systems I've contributed to. Open a project to learn more." link="/projects" linkText="All projects" />
// //           <div className="work-project-list">
// //             {workItems.map((work, index) => (
// //               <ScrollReveal key={work.number} direction="up" delay={index * 80}>
// //                 <a href={work.link} target="_blank" rel="noopener noreferrer" className={`work-project work-project-${index + 1}`}>
// //                   <div className="work-project-number">{work.number}<span> / 03</span></div>
// //                   <div className="work-project-brand"><img src={work.image} alt={`${work.title} logo`} loading="lazy" /></div>
// //                   <div className="work-project-content"><span className="work-project-type">{work.category}</span><h3>{work.title}</h3><p>{work.description}</p><div className="work-card-tech">{work.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
// //                   <div className="work-project-visit"><span>VISIT PROJECT</span><MoveUpRight size={19} /></div>
// //                 </a>
// //               </ScrollReveal>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 06 — CURRENT FOCUS */}
// //       <section className="home-section now-section" id="now">
// //         <div className="home-container">
// //           <SectionIntro number="06" eyebrow="CURRENT FOCUS" title="What has my" accent="attention now." description="A snapshot of the areas I'm actively exploring and developing." />
// //           <div className="now-feature">
// //             <div className="now-feature-aside"><span className="now-pulse" /> CURRENTLY IN PROGRESS <span className="now-aside-line" /><span className="now-aside-bottom">AN OPEN WORKING LOG</span></div>
// //             <div className="now-items">
// //               <article className="now-item"><span className="now-item-index">01</span><div className="now-item-icon"><CirclePlay size={20} /></div><div className="now-item-copy"><small>DOCUMENTARIES</small><h3>Researching new stories</h3><p>Building evidence-led scripts and visual narratives around subjects worth understanding.</p></div><span className="now-item-status">IN PROGRESS</span></article>
// //               <article className="now-item"><span className="now-item-index">02</span><div className="now-item-icon"><Code2 size={20} /></div><div className="now-item-copy"><small>DEVELOPMENT</small><h3>Building digital products</h3><p>Creating practical web applications with thoughtful interfaces and reliable backend logic.</p></div><span className="now-item-status">IN PROGRESS</span></article>
// //               <article className="now-item"><span className="now-item-index">03</span><div className="now-item-icon"><FileText size={20} /></div><div className="now-item-copy"><small>WRITING & RESEARCH</small><h3>Connecting ideas to context</h3><p>Turning research and notes into clear explanations that support the work I publish.</p></div><span className="now-item-status">ONGOING</span></article>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 07 — WORKING PRINCIPLES */}
// //       <section className="home-section how-section" id="how-i-work">
// //         <div className="home-container">
// //           <SectionIntro number="07" eyebrow="HOW I APPROACH THE WORK" title="Clear intent." accent="Careful execution." description="Whether it's a video or a software project, the goal is to make the outcome useful, understandable and considered." />
// //           <div className="how-process-line"><span>01 / INTENT</span><span>02 / EXECUTION</span><span>03 / DELIVERY</span></div>
// //           <div className="how-grid">
// //             {howIWork.map((item, index) => {
// //               const Icon = item.icon;
// //               return <ScrollReveal key={item.number} direction="up" delay={index * 80}><article className="how-card"><div className="how-card-top"><span>{item.number}</span><Icon size={22} strokeWidth={1.5} /></div><span className="how-card-eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p>{item.email && <a href={`mailto:${item.email}`} className="how-email">{item.email}<ArrowUpRight size={14} /></a>}<span className="how-card-bottom">FAIZ ALAM <span>—</span> PRINCIPLE {item.number}</span></article></ScrollReveal>;
// //             })}
// //           </div>
// //         </div>
// //       </section>

// //       {/* 08 — CONTACT */}
// //       <section className="home-section work-with-section" id="contact-cta">
// //         <div className="home-container">
// //           <div className="work-with-box">
// //             <div className="work-with-main">
// //               <div className="section-intro-top"><span className="section-index">08</span><span className="section-eyebrow">WORK WITH ME</span></div>
// //               <span className="content-overline">HAVE SOMETHING IN MIND?</span>
// //               <h2>Let's make<br /><em>something meaningful.</em></h2>
// //               <p>For software projects, content collaborations or a thoughtful conversation about an idea, get in touch.</p>
// //               <Link to="/contact" className="button button-primary">Start a conversation <ArrowUpRight size={16} /></Link>
// //             </div>
// //             <div className="work-with-side"><span className="work-with-side-number">FA.</span><div className="work-with-side-rule" /><span>SOFTWARE<br />STORYTELLING<br />COLLABORATION</span><ArrowUpRight size={24} /></div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default Home; */



// /* =========================================================
//    FAIZ ALAM — HOMEPAGE / COMPLETE VISUAL SYSTEM
//    Editorial portfolio: ink, paper, rust and restrained motion
// ========================================================= */

// .home-page {
//   --fa-ink: #171916;
//   --fa-ink-soft: #222620;
//   --fa-paper: #f4f1e9;
//   --fa-paper-deep: #eae5d9;
//   --fa-white: #fffdf8;
//   --fa-muted: #777a70;
//   --fa-line: rgba(23, 25, 22, .16);
//   --fa-rust: #b75e3d;
//   --fa-rust-dark: #8e452c;
//   --fa-olive: #6f765e;
//   background: var(--fa-paper);
//   color: var(--fa-ink);
//   font-family: inherit;
//   overflow: clip;
// }

// .home-page * { box-sizing: border-box; }
// .home-page img { display: block; max-width: 100%; }
// .home-page a { color: inherit; text-decoration: none; }
// .home-page .home-container { width: min(1160px, calc(100% - 72px)); margin-inline: auto; }
// .home-page .home-section { position: relative; padding: 112px 0; }
// .home-page .home-section:nth-of-type(odd) { background: var(--fa-paper); }
// .home-page .home-section:nth-of-type(even) { background: var(--fa-white); }
// .home-page p { margin-top: 0; }

// /* Hero */
// .home-page .home-hero { min-height: 690px; min-height: min(790px, 92svh); position: relative; isolation: isolate; display: flex; align-items: center; background: #151814; color: #f8f5ed; overflow: hidden; }
// .home-page .hero-background { position: absolute; inset: 0; z-index: -3; overflow: hidden; background: #171a16; }
// .home-page .hero-background img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 70% 35%; opacity: .86; }
// .home-page .hero-overlay { position: absolute; inset: 0; z-index: -2; background: linear-gradient(90deg, rgba(17,20,17,.98) 0%, rgba(17,20,17,.92) 28%, rgba(17,20,17,.64) 51%, rgba(17,20,17,.12) 100%), linear-gradient(0deg, rgba(17,20,17,.58), transparent 35%); }
// .home-page .hero-grid-lines { position: absolute; inset: 0; z-index: -1; pointer-events: none; opacity: .17; background-image: linear-gradient(90deg, transparent calc(25% - 1px), rgba(255,255,255,.2) 25%, transparent calc(25% + 1px), transparent calc(50% - 1px), rgba(255,255,255,.15) 50%, transparent calc(50% + 1px), transparent calc(75% - 1px), rgba(255,255,255,.12) 75%, transparent calc(75% + 1px)); }
// .home-page .hero-container { padding-top: 74px; padding-bottom: 94px; }
// .home-page .hero-content { max-width: 650px; position: relative; z-index: 1; }
// .home-page .hero-label, .home-page .section-intro-top, .home-page .content-overline, .home-page .section-eyebrow, .home-page .hero-kicker { font-size: 10px; line-height: 1.4; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }
// .home-page .hero-label { display: inline-flex; align-items: center; gap: 10px; color: rgba(248,245,237,.78); padding: 11px 13px; border: 1px solid rgba(248,245,237,.22); background: rgba(16,19,16,.26); }
// .home-page .hero-live-dot { width: 6px; height: 6px; border-radius: 50%; background: #c77753; box-shadow: 0 0 0 4px rgba(199,119,83,.14); }
// .home-page .hero-label-divider { color: #c77753; }
// .home-page .hero-kicker { color: #d18a69; margin: 42px 0 15px; }
// .home-page .hero-title { margin: 0; max-width: 680px; font-size: clamp(52px, 6.7vw, 92px); line-height: .99; font-weight: 520; letter-spacing: -.065em; }
// .home-page .hero-title em, .home-page .section-heading-title em, .home-page .about-copy h3 em, .home-page .quiz-feature-copy h3 em, .home-page .work-with-main h2 em { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
// .home-page .hero-title em { color: #d18a69; }
// .home-page .hero-description { max-width: 435px; margin: 27px 0 0; color: rgba(248,245,237,.74); font-size: 16px; line-height: 1.8; }
// .home-page .hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
// .home-page .button { min-height: 48px; display: inline-flex; justify-content: center; align-items: center; gap: 10px; padding: 0 18px; border: 1px solid transparent; font-size: 12px; font-weight: 700; letter-spacing: .025em; transition: background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease; }
// .home-page .button:hover { transform: translateY(-2px); }
// .home-page .button-primary { background: var(--fa-rust); color: #fffaf3; }
// .home-page .button-primary:hover { background: #c56b49; }
// .home-page .button-outline { border-color: rgba(255,255,255,.38); color: #fffaf3; background: rgba(255,255,255,.035); }
// .home-page .button-outline:hover { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.65); }
// .home-page .button-dark { background: var(--fa-ink); color: var(--fa-white); }
// .home-page .button-dark:hover { background: #30362d; }
// .home-page .hero-footnote { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 34px; color: rgba(248,245,237,.56); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
// .home-page .hero-footnote-line { width: 24px; height: 1px; background: #c77753; }
// .home-page .hero-footnote-dot { color: #c77753; }
// .home-page .hero-side-note { position: absolute; right: 29px; top: 50%; writing-mode: vertical-rl; transform: translateY(-50%); display: flex; gap: 10px; align-items: center; color: rgba(255,255,255,.68); font-size: 9px; letter-spacing: .16em; }
// .home-page .hero-side-note span { color: #d18a69; }
// .home-page .hero-scroll { position: absolute; bottom: 27px; left: max(36px, calc((100% - 1160px) / 2)); display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,.62); font-size: 9px; letter-spacing: .16em; }
// .home-page .hero-scroll-line { display: inline-block; width: 58px; height: 1px; background: rgba(255,255,255,.4); position: relative; overflow: hidden; }
// .home-page .hero-scroll-line::after { content: ''; position: absolute; inset: 0; width: 25px; background: #d18a69; animation: fa-scroll-line 2s ease-in-out infinite; }
// @keyframes fa-scroll-line { 0% { transform: translateX(-28px); } 100% { transform: translateX(65px); } }

// /* Section headings */
// .home-page .section-intro { margin-bottom: 48px; }
// .home-page .section-intro-top { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; color: var(--fa-muted); }
// .home-page .section-index { display: inline-flex; justify-content: center; align-items: center; width: 30px; height: 30px; border: 1px solid var(--fa-line); color: var(--fa-rust); font-size: 10px; letter-spacing: 0; }
// .home-page .section-eyebrow { color: var(--fa-muted); }
// .home-page .section-intro-body { display: flex; align-items: flex-end; justify-content: space-between; gap: 34px; }
// .home-page .section-heading-title { margin: 0; max-width: 800px; font-size: clamp(37px, 4.7vw, 62px); line-height: 1.04; font-weight: 520; letter-spacing: -.055em; }
// .home-page .section-heading-title em { color: var(--fa-rust); }
// .home-page .section-heading-copy { max-width: 520px; margin: 18px 0 0; color: #696c62; font-size: 14px; line-height: 1.85; }
// .home-page .section-heading-link { display: inline-flex; align-items: center; gap: 10px; flex: 0 0 auto; padding-bottom: 5px; border-bottom: 1px solid var(--fa-rust); color: var(--fa-ink); font-size: 12px; font-weight: 700; transition: color .2s ease; }
// .home-page .section-heading-link:hover, .home-page .underlined-link:hover { color: var(--fa-rust); }
// .home-page .section-heading-link svg, .home-page .underlined-link svg { color: var(--fa-rust); }
// .home-page .content-overline { display: block; margin-bottom: 18px; color: var(--fa-rust); }

// /* About */
// .home-page .about-section { background: var(--fa-white) !important; }
// .home-page .about-feature { display: grid; grid-template-columns: minmax(0, .94fr) minmax(0, 1fr); align-items: center; gap: clamp(46px, 8vw, 110px); }
// .home-page .about-image-stack { position: relative; min-height: 490px; padding: 0 54px 42px 0; }
// .home-page .about-image-main { position: absolute; inset: 0 65px 45px 0; overflow: hidden; background: var(--fa-paper-deep); }
// .home-page .about-image-main img { width: 100%; height: 100%; object-fit: cover; object-position: center 24%; filter: saturate(.82); }
// .home-page .about-image-small { position: absolute; right: 0; bottom: 0; width: 43%; height: 42%; border: 8px solid var(--fa-white); overflow: hidden; background: var(--fa-paper-deep); }
// .home-page .about-image-small img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
// .home-page .about-image-caption { position: absolute; bottom: 12px; left: 0; color: var(--fa-muted); font-size: 9px; letter-spacing: .14em; }
// .home-page .about-image-mark { position: absolute; top: 18px; right: 15px; color: #fff; font: italic 27px Georgia, serif; text-shadow: 0 1px 10px rgba(0,0,0,.4); }
// .home-page .about-copy h3 { margin: 0 0 22px; font-size: clamp(34px, 4vw, 49px); line-height: 1.1; font-weight: 520; letter-spacing: -.05em; }
// .home-page .about-copy h3 em { color: var(--fa-rust); }
// .home-page .about-copy > p { max-width: 520px; margin: 0 0 15px; color: #696c62; font-size: 14px; line-height: 1.9; }
// .home-page .about-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--fa-line); border-bottom: 1px solid var(--fa-line); margin: 29px 0 24px; }
// .home-page .about-stats > div { padding: 16px 12px 16px 0; display: flex; align-items: flex-start; gap: 10px; }
// .home-page .about-stats > div + div { border-left: 1px solid var(--fa-line); padding-left: 15px; }
// .home-page .about-stats strong { font-size: 17px; font-weight: 500; color: var(--fa-rust); }
// .home-page .about-stats span { color: var(--fa-muted); font-size: 10px; line-height: 1.55; }
// .home-page .underlined-link { display: inline-flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--fa-rust); padding-bottom: 7px; font-size: 12px; font-weight: 700; }

// /* Documentaries */
// .home-page .documentaries-section { background: var(--fa-paper) !important; }
// .home-page .documentary-list { border-top: 1px solid var(--fa-line); }
// .home-page .documentary-row { display: grid; grid-template-columns: minmax(260px, .88fr) minmax(0, 1fr); gap: clamp(25px, 5vw, 62px); padding: 30px 0; border-bottom: 1px solid var(--fa-line); }
// .home-page .documentary-image { position: relative; display: block; aspect-ratio: 16 / 9; overflow: hidden; background: #d8d2c6; }
// .home-page .documentary-image img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease, filter .45s ease; }
// .home-page .documentary-image:hover img { transform: scale(1.04); filter: saturate(1.08); }
// .home-page .documentary-image::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(10,12,10,.52), transparent 55%); pointer-events: none; }
// .home-page .documentary-play { position: absolute; z-index: 1; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 48px; height: 48px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: var(--fa-rust); box-shadow: 0 4px 22px rgba(0,0,0,.2); transition: transform .2s ease; }
// .home-page .documentary-image:hover .documentary-play { transform: translate(-50%, -50%) scale(1.08); }
// .home-page .documentary-number, .home-page .documentary-duration { position: absolute; z-index: 1; bottom: 13px; color: #fff; font-size: 9px; letter-spacing: .1em; }
// .home-page .documentary-number { left: 14px; }
// .home-page .documentary-duration { right: 14px; }
// .home-page .documentary-info { display: flex; flex-direction: column; justify-content: center; align-items: flex-start; padding: 4px 0; }
// .home-page .documentary-meta { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; color: var(--fa-rust); font-size: 9px; font-weight: 700; letter-spacing: .12em; }
// .home-page .documentary-meta span + span { color: var(--fa-muted); }
// .home-page .documentary-info h3 { max-width: 560px; margin: 0 0 12px; font-size: clamp(23px, 2.7vw, 34px); line-height: 1.12; letter-spacing: -.04em; font-weight: 560; }
// .home-page .documentary-info > p { max-width: 520px; margin: 0 0 21px; color: #6b6d64; font-size: 13px; line-height: 1.8; }
// .home-page .documentary-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 5px; }
// .home-page .video-action { min-height: 35px; display: inline-flex; align-items: center; gap: 7px; padding: 0 10px; border: 1px solid var(--fa-line); color: #5d6058; font-size: 10px; font-weight: 650; transition: all .2s ease; }
// .home-page .video-action:hover { border-color: var(--fa-rust); color: var(--fa-rust); }
// .home-page .video-action-primary { background: var(--fa-ink); border-color: var(--fa-ink); color: var(--fa-white); }
// .home-page .video-action-primary:hover { background: var(--fa-rust); border-color: var(--fa-rust); color: #fff; }
// .home-page .research-note { display: flex; align-items: center; gap: 16px; margin-top: 30px; padding: 18px 20px; background: var(--fa-white); border-left: 3px solid var(--fa-rust); }
// .home-page .research-note-icon { flex: 0 0 36px; width: 36px; height: 36px; display: grid; place-items: center; color: var(--fa-rust); background: var(--fa-paper); }
// .home-page .research-note p { flex: 1; margin: 0; color: #686b62; font-size: 12px; line-height: 1.7; }
// .home-page .research-note p strong { color: var(--fa-ink); }
// .home-page .research-note > a { display: inline-flex; align-items: center; gap: 8px; flex: 0 0 auto; font-size: 11px; font-weight: 700; }
// .home-page .research-note > a svg { color: var(--fa-rust); }

// /* Quiz */
// .home-page .quiz-section { background: var(--fa-white) !important; }
// .home-page .quiz-feature { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); background: var(--fa-paper); border: 1px solid var(--fa-line); }
// .home-page .quiz-feature-copy { position: relative; overflow: hidden; padding: clamp(30px, 5vw, 58px); color: var(--fa-white); background: var(--fa-ink); }
// .home-page .quiz-feature-copy::after { content: 'Q'; position: absolute; right: -10px; bottom: -110px; font: 360px/.8 Georgia, serif; color: rgba(255,255,255,.035); pointer-events: none; }
// .home-page .quiz-stamp { display: inline-block; position: relative; z-index: 1; padding: 8px 10px; border: 1px solid rgba(255,255,255,.24); color: #d7a188; font-size: 9px; letter-spacing: .13em; }
// .home-page .quiz-big-number { position: relative; z-index: 1; margin: 35px 0 13px; font: 100px/.8 Georgia, serif; letter-spacing: -.08em; }
// .home-page .quiz-big-number span { color: #d18a69; }
// .home-page .quiz-feature-copy h3 { position: relative; z-index: 1; margin: 0 0 18px; font-size: clamp(28px, 3vw, 39px); line-height: 1.1; font-weight: 500; letter-spacing: -.04em; }
// .home-page .quiz-feature-copy h3 em { color: #d18a69; }
// .home-page .quiz-feature-copy > p { position: relative; z-index: 1; max-width: 360px; color: rgba(255,255,255,.64); font-size: 13px; line-height: 1.85; margin-bottom: 25px; }
// .home-page .quiz-feature-foot { position: relative; z-index: 1; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-top: 40px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,.18); color: rgba(255,255,255,.46); font-size: 8px; letter-spacing: .13em; }
// .home-page .quiz-topics { padding: 30px clamp(22px, 4vw, 46px); }
// .home-page .quiz-topics-heading { display: flex; justify-content: space-between; gap: 12px; padding: 5px 0 18px; border-bottom: 1px solid var(--fa-line); color: var(--fa-muted); font-size: 9px; font-weight: 700; letter-spacing: .13em; }
// .home-page .quiz-topic-row { min-height: 68px; display: grid; grid-template-columns: 24px 34px minmax(0, 1fr) auto 18px; align-items: center; gap: 12px; border-bottom: 1px solid var(--fa-line); transition: background .2s ease; }
// .home-page .quiz-topic-row:hover { background: rgba(183,94,61,.055); }
// .home-page .quiz-topic-index { color: #a0a196; font-size: 10px; }
// .home-page .quiz-topic-icon { width: 32px; height: 32px; display: grid; place-items: center; color: var(--fa-rust); background: #e9e2d6; }
// .home-page .quiz-topic-name { font-size: 13px; font-weight: 700; }
// .home-page .quiz-topic-count { color: var(--fa-muted); font-size: 8px; letter-spacing: .06em; }
// .home-page .quiz-topic-arrow { color: var(--fa-rust); }
// .home-page .quiz-topics-all { display: inline-flex; align-items: center; gap: 9px; margin-top: 22px; font-size: 11px; font-weight: 700; }
// .home-page .quiz-topics-all svg { color: var(--fa-rust); }
// .home-page .quiz-empty { color: var(--fa-muted); font-size: 13px; }

// /* Beliefs */
// .home-page .beliefs-section { background: var(--fa-paper) !important; }
// .home-page .beliefs-list { border-top: 1px solid var(--fa-line); }
// .home-page .belief-row { display: grid; grid-template-columns: 42px 48px minmax(170px, .8fr) minmax(0, 1.2fr) 20px; align-items: center; gap: 22px; min-height: 104px; padding: 21px 8px; border-bottom: 1px solid var(--fa-line); transition: background .2s ease, padding .2s ease; }
// .home-page .belief-row:hover { background: rgba(255,253,248,.65); padding-inline: 17px; }
// .home-page .belief-number { align-self: start; padding-top: 4px; color: #9a9b90; font-size: 10px; }
// .home-page .belief-icon { width: 43px; height: 43px; display: grid; place-items: center; border: 1px solid var(--fa-line); color: var(--fa-rust); }
// .home-page .belief-row h3 { margin: 0; font-size: 18px; font-weight: 560; letter-spacing: -.025em; }
// .home-page .belief-row p { max-width: 520px; margin: 0; color: #6e7067; font-size: 12px; line-height: 1.8; }
// .home-page .belief-row-arrow { color: var(--fa-rust); }

// /* Selected work */
// .home-page .work-section { background: var(--fa-white) !important; }
// .home-page .work-project-list { border-top: 1px solid var(--fa-line); }
// .home-page .work-project { display: grid; grid-template-columns: 65px 145px minmax(0, 1fr) 115px; gap: 30px; align-items: center; padding: 28px 10px; border-bottom: 1px solid var(--fa-line); transition: background .2s ease, padding .2s ease; }
// .home-page .work-project:hover { background: var(--fa-paper); padding-inline: 20px; }
// .home-page .work-project-number { align-self: start; padding-top: 7px; color: var(--fa-rust); font-size: 13px; font-weight: 700; }
// .home-page .work-project-number span { color: #a3a398; font-size: 9px; font-weight: 500; }
// .home-page .work-project-brand { width: 130px; height: 88px; display: grid; place-items: center; padding: 17px; background: var(--fa-paper); border: 1px solid rgba(23,25,22,.06); }
// .home-page .work-project-brand img { max-width: 100%; max-height: 100%; object-fit: contain; }
// .home-page .work-project-content { min-width: 0; }
// .home-page .work-project-type { color: var(--fa-rust); font-size: 9px; font-weight: 700; letter-spacing: .13em; }
// .home-page .work-project-content h3 { margin: 7px 0 6px; font-size: 24px; line-height: 1.1; letter-spacing: -.04em; font-weight: 600; }
// .home-page .work-project-content p { max-width: 550px; margin: 0 0 12px; color: #71736a; font-size: 12px; line-height: 1.7; }
// .home-page .work-card-tech { display: flex; flex-wrap: wrap; gap: 6px; }
// .home-page .work-card-tech span { padding: 5px 8px; border: 1px solid var(--fa-line); color: #66695f; font-size: 9px; }
// .home-page .work-project-visit { justify-self: end; display: flex; flex-direction: column; align-items: flex-end; gap: 13px; color: var(--fa-rust); }
// .home-page .work-project-visit span { color: var(--fa-muted); font-size: 8px; font-weight: 700; letter-spacing: .1em; }

// /* Now */
// .home-page .now-section { background: var(--fa-paper) !important; }
// .home-page .now-feature { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: clamp(28px, 6vw, 78px); padding: 38px; background: var(--fa-white); border: 1px solid var(--fa-line); }
// .home-page .now-feature-aside { display: flex; flex-direction: column; align-items: flex-start; gap: 13px; color: var(--fa-rust); font-size: 9px; font-weight: 700; letter-spacing: .12em; }
// .home-page .now-pulse { width: 8px; height: 8px; border-radius: 50%; background: #798764; box-shadow: 0 0 0 5px rgba(121,135,100,.12); }
// .home-page .now-aside-line { width: 36px; height: 1px; margin-top: 10px; background: var(--fa-line); }
// .home-page .now-aside-bottom { margin-top: auto; padding-top: 25px; color: #9b9b90; font-size: 8px; }
// .home-page .now-items { border-top: 1px solid var(--fa-line); }
// .home-page .now-item { display: grid; grid-template-columns: 24px 42px minmax(0, 1fr) auto; align-items: start; gap: 17px; padding: 23px 0; border-bottom: 1px solid var(--fa-line); }
// .home-page .now-item-index { padding-top: 5px; color: #a0a196; font-size: 10px; }
// .home-page .now-item-icon { width: 40px; height: 40px; display: grid; place-items: center; color: var(--fa-rust); background: var(--fa-paper); }
// .home-page .now-item-copy small { display: block; margin-bottom: 7px; color: var(--fa-rust); font-size: 8px; font-weight: 700; letter-spacing: .13em; }
// .home-page .now-item-copy h3 { margin: 0 0 7px; font-size: 18px; font-weight: 600; letter-spacing: -.025em; }
// .home-page .now-item-copy p { max-width: 510px; margin: 0; color: #77796f; font-size: 12px; line-height: 1.75; }
// .home-page .now-item-status { margin-top: 5px; padding: 6px 7px; border: 1px solid rgba(111,118,94,.28); color: var(--fa-olive); font-size: 7px; letter-spacing: .08em; white-space: nowrap; }

// /* How I work */
// .home-page .how-section { background: var(--fa-white) !important; }
// .home-page .how-process-line { display: flex; gap: 0; margin: 0 0 22px; border-bottom: 1px solid var(--fa-line); color: var(--fa-muted); font-size: 8px; font-weight: 700; letter-spacing: .14em; }
// .home-page .how-process-line span { flex: 1; padding: 0 0 13px; }
// .home-page .how-process-line span + span { padding-left: 20px; border-left: 1px solid var(--fa-line); }
// .home-page .how-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--fa-line); }
// .home-page .how-grid > * + * { border-left: 1px solid var(--fa-line); }
// .home-page .how-card { min-height: 325px; height: 100%; padding: 27px 25px 20px; display: flex; flex-direction: column; background: var(--fa-white); transition: background .25s ease; }
// .home-page .how-card:hover { background: var(--fa-paper); }
// .home-page .how-card-top { display: flex; align-items: center; justify-content: space-between; color: var(--fa-rust); }
// .home-page .how-card-top > span { font-size: 11px; }
// .home-page .how-card-eyebrow { display: block; margin-top: 34px; color: var(--fa-muted); font-size: 8px; font-weight: 700; letter-spacing: .12em; }
// .home-page .how-card h3 { margin: 9px 0 12px; font-size: 23px; line-height: 1.1; font-weight: 600; letter-spacing: -.04em; }
// .home-page .how-card > p { margin: 0; color: #707268; font-size: 12px; line-height: 1.8; }
// .home-page .how-email { display: inline-flex; align-items: center; gap: 7px; margin-top: 16px; color: var(--fa-rust); font-size: 10px; font-weight: 700; overflow-wrap: anywhere; }
// .home-page .how-card-bottom { display: flex; gap: 7px; margin-top: auto; padding-top: 25px; color: #a1a196; font-size: 7px; letter-spacing: .13em; }
// .home-page .how-card-bottom span { color: var(--fa-rust); }

// /* Contact CTA */
// .home-page .work-with-section { padding-top: 75px; padding-bottom: 100px; background: var(--fa-paper) !important; }
// .home-page .work-with-box { display: grid; grid-template-columns: minmax(0, 1fr) 240px; overflow: hidden; color: var(--fa-white); background: var(--fa-ink); }
// .home-page .work-with-main { padding: clamp(32px, 6vw, 66px); }
// .home-page .work-with-main .section-intro-top { margin-bottom: 40px; color: rgba(255,255,255,.55); }
// .home-page .work-with-main .section-index { border-color: rgba(255,255,255,.24); color: #d18a69; }
// .home-page .work-with-main .section-eyebrow { color: rgba(255,255,255,.6); }
// .home-page .work-with-main .content-overline { color: #d18a69; }
// .home-page .work-with-main h2 { margin: 0; font-size: clamp(38px, 5vw, 62px); line-height: 1.02; letter-spacing: -.06em; font-weight: 520; }
// .home-page .work-with-main h2 em { color: #d18a69; }
// .home-page .work-with-main > p { max-width: 480px; margin: 22px 0 26px; color: rgba(255,255,255,.63); font-size: 13px; line-height: 1.85; }
// .home-page .work-with-side { display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between; padding: 35px 28px; border-left: 1px solid rgba(255,255,255,.16); background: #20251e; color: rgba(255,255,255,.6); font-size: 9px; line-height: 1.9; letter-spacing: .14em; }
// .home-page .work-with-side-number { color: #d18a69; font: italic 58px/.9 Georgia, serif; letter-spacing: -.08em; }
// .home-page .work-with-side-rule { width: 38px; height: 1px; background: #d18a69; }
// .home-page .work-with-side svg { color: #d18a69; }

// /* ScrollReveal wrappers should not shrink grid children */
// .home-page .documentary-list > *, .home-page .beliefs-list > *, .home-page .work-project-list > *, .home-page .how-grid > * { min-width: 0; }

// /* Responsive */
// @media (max-width: 1000px) {
//   .home-page .home-section { padding: 88px 0; }
//   .home-page .home-container { width: min(100% - 48px, 850px); }
//   .home-page .home-hero { min-height: 680px; }
//   .home-page .hero-background img { object-position: 68% center; }
//   .home-page .hero-overlay { background: linear-gradient(90deg, rgba(17,20,17,.98) 0%, rgba(17,20,17,.87) 42%, rgba(17,20,17,.32) 100%), linear-gradient(0deg, rgba(17,20,17,.45), transparent 40%); }
//   .home-page .hero-content { max-width: 590px; }
//   .home-page .about-feature { gap: 45px; }
//   .home-page .about-image-stack { min-height: 430px; }
//   .home-page .work-project { grid-template-columns: 45px 115px minmax(0, 1fr) 85px; gap: 20px; }
//   .home-page .work-project-brand { width: 108px; height: 80px; }
//   .home-page .now-feature { grid-template-columns: 150px minmax(0, 1fr); gap: 30px; padding: 28px; }
// }

// @media (max-width: 760px) {
//   .home-page .home-container { width: calc(100% - 36px); }
//   .home-page .home-section { padding: 68px 0; }
//   .home-page .home-hero { min-height: 710px; min-height: 90svh; align-items: flex-end; }
//   .home-page .hero-background img { object-position: 65% top; opacity: .73; }
//   .home-page .hero-overlay { background: linear-gradient(90deg, rgba(17,20,17,.91) 0%, rgba(17,20,17,.66) 56%, rgba(17,20,17,.22) 100%), linear-gradient(0deg, rgba(17,20,17,.98) 0%, rgba(17,20,17,.82) 35%, rgba(17,20,17,.05) 100%); }
//   .home-page .hero-grid-lines { opacity: .08; }
//   .home-page .hero-container { padding-top: 100px; padding-bottom: 100px; }
//   .home-page .hero-content { max-width: 570px; }
//   .home-page .hero-kicker { margin-top: 31px; }
//   .home-page .hero-title { font-size: clamp(48px, 11vw, 72px); }
//   .home-page .hero-description { max-width: 390px; font-size: 14px; }
//   .home-page .hero-side-note { display: none; }
//   .home-page .hero-scroll { left: 18px; bottom: 22px; }
//   .home-page .section-intro { margin-bottom: 34px; }
//   .home-page .section-intro-body { align-items: flex-start; flex-direction: column; gap: 22px; }
//   .home-page .section-heading-title { font-size: clamp(37px, 9vw, 54px); }
//   .home-page .section-heading-copy { font-size: 13px; }
//   .home-page .about-feature { grid-template-columns: 1fr; gap: 40px; }
//   .home-page .about-image-stack { width: min(100%, 480px); min-height: 450px; margin-inline: auto; }
//   .home-page .about-copy h3 { font-size: 38px; }
//   .home-page .documentary-row { grid-template-columns: 1fr; gap: 20px; padding: 23px 0; }
//   .home-page .documentary-image { aspect-ratio: 16 / 8.8; }
//   .home-page .documentary-info h3 { font-size: 28px; }
//   .home-page .documentary-info > p { margin-bottom: 15px; }
//   .home-page .research-note { align-items: flex-start; flex-wrap: wrap; gap: 12px; padding: 16px; }
//   .home-page .research-note p { flex-basis: calc(100% - 52px); }
//   .home-page .research-note > a { margin-left: 48px; }
//   .home-page .quiz-feature { grid-template-columns: 1fr; }
//   .home-page .quiz-feature-copy { padding: 30px; }
//   .home-page .quiz-big-number { margin-top: 27px; font-size: 82px; }
//   .home-page .quiz-feature-foot { margin-top: 28px; }
//   .home-page .quiz-topics { padding: 24px 22px; }
//   .home-page .belief-row { grid-template-columns: 24px 40px minmax(0, 1fr) 18px; gap: 12px; padding: 19px 0; }
//   .home-page .belief-icon { width: 38px; height: 38px; }
//   .home-page .belief-row h3 { font-size: 16px; }
//   .home-page .belief-row p { grid-column: 3 / 4; grid-row: 2; font-size: 12px; }
//   .home-page .belief-row-arrow { grid-column: 4; grid-row: 1; }
//   .home-page .work-project { grid-template-columns: 34px minmax(0, 1fr) 34px; gap: 15px; padding: 23px 4px; }
//   .home-page .work-project-number { grid-column: 1; grid-row: 1 / span 2; }
//   .home-page .work-project-brand { grid-column: 2; grid-row: 1; width: 100%; height: 95px; justify-self: start; padding: 20px; }
//   .home-page .work-project-content { grid-column: 2 / 4; grid-row: 2; }
//   .home-page .work-project-content h3 { font-size: 24px; }
//   .home-page .work-project-visit { grid-column: 3; grid-row: 1; align-self: start; padding-top: 5px; }
//   .home-page .work-project-visit span { display: none; }
//   .home-page .now-feature { grid-template-columns: 1fr; gap: 24px; padding: 22px; }
//   .home-page .now-feature-aside { flex-direction: row; align-items: center; flex-wrap: wrap; }
//   .home-page .now-aside-line { width: 22px; margin: 0; }
//   .home-page .now-aside-bottom { margin: 0 0 0 auto; padding: 0; }
//   .home-page .now-item { grid-template-columns: 20px 38px minmax(0, 1fr); gap: 12px; }
//   .home-page .now-item-icon { width: 36px; height: 36px; }
//   .home-page .now-item-copy h3 { font-size: 16px; }
//   .home-page .now-item-status { grid-column: 3; justify-self: start; margin-top: 8px; }
//   .home-page .how-process-line span { font-size: 7px; }
//   .home-page .how-process-line span + span { padding-left: 10px; }
//   .home-page .how-grid { grid-template-columns: 1fr; }
//   .home-page .how-grid > * + * { border-left: 0; border-top: 1px solid var(--fa-line); }
//   .home-page .how-card { min-height: auto; padding: 24px; }
//   .home-page .how-card-eyebrow { margin-top: 24px; }
//   .home-page .how-card-bottom { margin-top: 25px; }
//   .home-page .work-with-section { padding-top: 45px; padding-bottom: 70px; }
//   .home-page .work-with-box { grid-template-columns: 1fr; }
//   .home-page .work-with-main { padding: 28px 24px 34px; }
//   .home-page .work-with-main .section-intro-top { margin-bottom: 30px; }
//   .home-page .work-with-main h2 { font-size: clamp(38px, 9vw, 52px); }
//   .home-page .work-with-side { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 20px; padding: 18px 24px; border-left: 0; border-top: 1px solid rgba(255,255,255,.16); }
//   .home-page .work-with-side-number { font-size: 42px; }
//   .home-page .work-with-side-rule { width: 100%; }
//   .home-page .work-with-side > span:last-of-type { font-size: 8px; }
// }

// @media (max-width: 480px) {
//   .home-page .home-container { width: calc(100% - 30px); }
//   .home-page .home-section { padding: 58px 0; }
//   .home-page .home-hero { min-height: 690px; min-height: 91svh; }
//   .home-page .hero-background img { object-position: 62% top; }
//   .home-page .hero-container { padding-top: 95px; padding-bottom: 95px; }
//   .home-page .hero-label { font-size: 8px; gap: 7px; padding: 9px; letter-spacing: .1em; }
//   .home-page .hero-title { font-size: clamp(43px, 12vw, 58px); }
//   .home-page .hero-description { font-size: 13px; line-height: 1.75; }
//   .home-page .hero-actions { align-items: stretch; flex-direction: column; max-width: 260px; }
//   .home-page .hero-actions .button { justify-content: space-between; }
//   .home-page .hero-footnote { max-width: 280px; font-size: 8px; line-height: 1.7; }
//   .home-page .section-intro-top { margin-bottom: 15px; }
//   .home-page .section-heading-title { font-size: 38px; }
//   .home-page .section-heading-copy { margin-top: 13px; }
//   .home-page .about-image-stack { min-height: 365px; padding: 0 39px 32px 0; }
//   .home-page .about-image-main { inset: 0 47px 34px 0; }
//   .home-page .about-image-small { border-width: 5px; }
//   .home-page .about-image-caption { max-width: 190px; font-size: 7px; }
//   .home-page .about-copy h3 { font-size: 34px; }
//   .home-page .about-stats > div { flex-direction: column; gap: 6px; padding: 13px 7px 13px 0; }
//   .home-page .about-stats > div + div { padding-left: 9px; }
//   .home-page .about-stats strong { font-size: 16px; }
//   .home-page .about-stats span { font-size: 9px; }
//   .home-page .documentary-actions { display: grid; grid-template-columns: 1fr 1fr; width: 100%; }
//   .home-page .video-action { justify-content: center; font-size: 9px; }
//   .home-page .video-action-primary { grid-column: 1 / -1; }
//   .home-page .quiz-feature-copy { padding: 25px 22px; }
//   .home-page .quiz-topic-row { grid-template-columns: 20px 30px minmax(0, 1fr) 16px; gap: 9px; min-height: 63px; }
//   .home-page .quiz-topic-count { display: none; }
//   .home-page .quiz-topic-icon { width: 29px; height: 29px; }
//   .home-page .quiz-topic-name { font-size: 12px; }
//   .home-page .belief-row { grid-template-columns: 20px 34px minmax(0, 1fr) 15px; gap: 9px; }
//   .home-page .belief-icon { width: 33px; height: 33px; }
//   .home-page .belief-icon svg { width: 17px; height: 17px; }
//   .home-page .belief-row h3 { font-size: 15px; }
//   .home-page .belief-row p { font-size: 11px; line-height: 1.7; }
//   .home-page .work-project { grid-template-columns: 25px minmax(0, 1fr) 20px; gap: 10px; }
//   .home-page .work-project-brand { height: 80px; }
//   .home-page .work-project-content h3 { font-size: 22px; }
//   .home-page .work-project-content p { font-size: 11px; }
//   .home-page .work-project-visit svg { width: 17px; height: 17px; }
//   .home-page .now-feature { padding: 17px; }
//   .home-page .now-aside-bottom { display: none; }
//   .home-page .now-item { grid-template-columns: 16px 32px minmax(0, 1fr); gap: 9px; }
//   .home-page .now-item-icon { width: 31px; height: 31px; }
//   .home-page .now-item-icon svg { width: 17px; height: 17px; }
//   .home-page .now-item-copy p { font-size: 11px; }
//   .home-page .how-process-line { letter-spacing: .08em; }
//   .home-page .how-process-line span + span { padding-left: 7px; }
//   .home-page .how-card h3 { font-size: 21px; }
//   .home-page .work-with-main { padding: 24px 20px 28px; }
//   .home-page .work-with-main h2 { font-size: 37px; }
//   .home-page .work-with-side { grid-template-columns: 42px 1fr 20px; gap: 13px; padding: 16px 20px; }
//   .home-page .work-with-side-number { font-size: 38px; }
//   .home-page .work-with-side > span:last-of-type { font-size: 7px; }
// }

// @media (prefers-reduced-motion: reduce) {
//   .home-page *, .home-page *::before, .home-page *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
// }
