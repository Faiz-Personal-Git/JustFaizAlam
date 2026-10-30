
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Compass,
  Plus,
  MessageCircle,
  UserRound,
} from "lucide-react";

import "./SocialFooter.css";

function SocialFooter({ onCreate }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/social") {
      return location.pathname === "/social";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className="social-footer">
      <Link
        to="/social"
        className={isActive("/social") ? "active" : ""}
      >
        <Home />
        <span>Home</span>
      </Link>

      <Link
        to="/social/explore"
        className={isActive("/social/explore") ? "active" : ""}
      >
        <Compass />
        <span>Explore</span>
      </Link>

      <button
        type="button"
        className="social-footer-create"
        onClick={onCreate}
        aria-label="Create post"
      >
        <Plus />
      </button>

      <Link
        to="/social/message"
        className={isActive("/social/message") ? "active" : ""}
      >
        <MessageCircle />
        <span>Messages</span>
      </Link>

      <Link
        to="/social/profile"
        className={isActive("/social/profile") ? "active" : ""}
      >
        <UserRound />
        <span>Profile</span>
      </Link>
    </nav>
  );
}

export default SocialFooter;
