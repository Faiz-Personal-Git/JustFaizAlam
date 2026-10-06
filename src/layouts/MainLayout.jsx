import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="site-layout">

      <Header />

      <main className="site-main">
        <div className="page-transition">
          <Outlet />
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default MainLayout;