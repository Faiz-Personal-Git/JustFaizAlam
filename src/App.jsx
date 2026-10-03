import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Projects from "./Page/Projects/Projects";
import Contact from "./Page/Contact/Contact";

import Links from "./Page/Links/Links";

function App() {
  return (
    <Routes>

      {/* =====================================
          PORTFOLIO WEBSITE
          Uses MainLayout
      ====================================== */}

      <Route element={<MainLayout />}>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>


      {/* =====================================
          PROFILE PAGE
          Completely Independent
          No Header / Footer / MainLayout
      ====================================== */}

      <Route
        path="/links"
        element={<Links />}
      />

    </Routes>
  );
}

export default App;