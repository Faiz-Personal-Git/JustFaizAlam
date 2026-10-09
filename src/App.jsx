import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Cursor from "./components/Cursor";
import AskFaiz from "./components/AskFaiz";

// Lazy-loaded pages
const Home = lazy(() => import("./Page/Home/Home"));
const About = lazy(() => import("./Page/About/About"));
const Projects = lazy(() => import("./Page/Projects/Projects"));

const Videos = lazy(() => import("./Page/Videos/Videos"));
const VideoDetail = lazy(() =>
  import("./Page/Videos/VideoDetail")
);

const Quiz = lazy(() => import("./Page/Quiz/Quiz"));
const QuizPlay = lazy(() =>
  import("./Page/Quiz/QuizPlay")
);

const Contact = lazy(() => import("./Page/Contact/Contact"));
const Links = lazy(() => import("./Page/Links/Links"));

const QuizCategoryPlay = lazy(() =>
  import("./Page/Quiz/QuizCategoryPlay")
);

import Blog from "./Page/Blog/Blog";
import BlogPost from "./Page/Blog/BlogPost";


function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-content">

        <div className="page-loader-avatar">
          <img
            src="/Images/dp.png"
            alt="Faiz Alam"
          />
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
  return (
    <>
      <Cursor />

      {/* Scroll page to top after route change */}
      <ScrollToTop />

      {/* Floating scroll-to-top button */}
      <ScrollToTopButton />

      {/* <AskFaiz /> */}

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

            <Route
              path="/videos"
              element={<Videos />}
            />

            <Route
              path="/videos/:videoId"
              element={<VideoDetail />}
            />

            <Route
              path="/quiz"
              element={<Quiz />}
            />

            <Route
              path="/quiz/video/:videoId"
              element={<QuizPlay />}
            />


            <Route
              path="/quiz/:categoryId"
              element={<QuizCategoryPlay />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />


          </Route>

          {/* Standalone social links page */}
          <Route
            path="/links"
            element={<Links />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;