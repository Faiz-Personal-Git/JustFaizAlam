
import { Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";

import "./SocialHeader.css";

function SocialHeader() {
  return (
    <header className="social-header">
      <div className="social-header-inner">
        <Link to="/social" className="social-header-brand">
          Faiz <em>Alam</em>
        </Link>

        <div className="social-header-actions">
          <button
            type="button"
            aria-label="Search"
            className="social-header-action"
          >
            <Search />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="social-header-action"
          >
            <Bell />
          </button>
        </div>
      </div>
    </header>
  );
}

export default SocialHeader;
