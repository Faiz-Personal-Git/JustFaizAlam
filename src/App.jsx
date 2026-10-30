
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Cursor from "./components/Cursor";

// Blog pages
const BlogPost = lazy(() =>
  import("./Page/Blog/BlogPost")
);
const Blog = lazy(() =>
  import("./Page/Blog/Blog")
);

// Resources pages
const Resources = lazy(() =>
  import("./Page/Resources/Resources")
);

const ResourceDetail = lazy(() =>
  import("./Page/Resources/ResourceDetail")
);

const AffiliateDisclosure = lazy(() =>
  import("./Page/Resources/AffiliateDisclosure")
);

const ResourceCategory = lazy(() =>
  import("./Page/Resources/ResourceCategory")
);

// Tools pages
const Tools = lazy(() =>
  import("./Page/Tools/Tools")
);

const ToolDetail = lazy(() =>
  import("./Page/Tools/ToolDetail")
);

// Policy pages
const PrivacyPolicy = lazy(() =>
  import("./Page/PrivacyPolicy/PrivacyPolicy")
);

const TermsConditions = lazy(() =>
  import("./Page/TermsConditions/TermsConditions")
);

const Disclaimer = lazy(() =>
  import("./Page/Disclaimer/Disclaimer")
);

const ContentUsage = lazy(() =>
  import("./Page/ContentUsage/ContentUsage")
);

const CookiePolicy = lazy(() =>
  import("./Page/CookiePolicy/CookiePolicy")
);

// Main pages
const Home = lazy(() =>
  import("./Page/Home/Home")
);

const About = lazy(() =>
  import("./Page/About/About")
);

const Projects = lazy(() =>
  import("./Page/Projects/Projects")
);

const Videos = lazy(() =>
  import("./Page/Videos/Videos")
);

const VideoDetail = lazy(() =>
  import("./Page/Videos/VideoDetail")
);

// Quiz pages
const Quiz = lazy(() =>
  import("./Page/Quiz/Quiz")
);

const QuizPlay = lazy(() =>
  import("./Page/Quiz/QuizPlay")
);

const QuizCategoryPlay = lazy(() =>
  import("./Page/Quiz/QuizCategoryPlay")
);

const Contact = lazy(() =>
  import("./Page/Contact/Contact")
);

const Links = lazy(() =>
  import("./Page/Links/Links")
);

const Store = lazy(() =>
  import("./Page/Store/Store")
);

const WebDevelopment = lazy(() =>
  import("./Page/WebDevelopment/WebDevelopment")
);

const Social = lazy(() =>
  import("./Page/Social/Social")
);

const Explore = lazy(() =>
  import("./Page/Social/Explore")
);

const Profile = lazy(() =>
  import("./Page/Social/Profile")
);

const Messages = lazy(() =>
  import("./Page/Social/Messages")
);

const SocialLayout = lazy(() =>
  import("./Page/Social/Layout/SocialLayout")
);

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-content">
        <div className="page-loader-avatar">
          <img src="/Images/dp.png" alt="Faiz Alam" />
        </div>

        <div className="page-loader-name">
          <span>FAIZ ALAM</span>
        </div>

        <div className="page-loader-role">
          SOFTWARE ENGINEER <span>·</span> CREATOR
        </div>

        <div className="page-loader-progress">
          <span className="page-loader-progress-line" />
        </div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Disable global UI components on Social page
  const isSocialPage = location.pathname.includes("social");

  return (
    <>
      <Cursor />
      <ScrollToTop />
      {!isSocialPage && (
        <>
          <ScrollToTopButton />
        </>
      )}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Home and profile */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />

            {/* Tools */}
            <Route path="/tools" element={<Tools />} />
            <Route
              path="/tools/:toolId"
              element={<ToolDetail />}
            />

            {/* Videos */}
            <Route path="/videos" element={<Videos />} />
            <Route
              path="/videos/:videoId"
              element={<VideoDetail />}
            />

            {/* Quiz */}
            <Route path="/quiz" element={<Quiz />} />
            <Route
              path="/quiz/video/:videoId"
              element={<QuizPlay />}
            />
            <Route
              path="/quiz/:categoryId"
              element={<QuizCategoryPlay />}
            />

            {/* Contact and blog */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Policy pages */}
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/terms-and-conditions"
              element={<TermsConditions />}
            />
            <Route
              path="/disclaimer"
              element={<Disclaimer />}
            />
            <Route
              path="/content-usage"
              element={<ContentUsage />}
            />
            <Route
              path="/cookie-policy"
              element={<CookiePolicy />}
            />

            {/* Resources hub */}
            <Route
              path="/resources"
              element={<Resources />}
            />

            {/* Resource categories */}
            <Route
              path="/resources/tutorials"
              element={<ResourceCategory categorySlug="tutorials" />}
            />
            <Route
              path="/resources/reviews"
              element={<ResourceCategory categorySlug="reviews" />}
            />
            <Route
              path="/resources/freebies"
              element={<ResourceCategory categorySlug="freebies" />}
            />
            <Route
              path="/resources/recommended-tools"
              element={
                <ResourceCategory categorySlug="recommended-tools" />
              }
            />

            {/* Individual resource articles */}
            <Route
              path="/resources/:slug"
              element={<ResourceDetail />}
            />

            {/* Affiliate disclosure */}
            <Route
              path="/affiliate-disclosure"
              element={<AffiliateDisclosure />}
            />

            {/* Store */}
            <Route path="/store" element={<Store />} />

            {/* Web Development */}
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
          </Route>

          {/* Standalone pages */}
          <Route path="/links" element={<Links />} />

          {/* Social Platform */}
          <Route element={<SocialLayout />}>
            <Route path="/social" element={<Social />} />
            <Route path="/social/explore" element={<Explore />} />
            <Route path="/social/profile" element={<Profile />} />
            <Route path="/social/message" element={<Messages />} />
          </Route>

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
