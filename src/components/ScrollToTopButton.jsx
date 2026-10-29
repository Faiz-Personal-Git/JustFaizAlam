
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      <span className="scroll-to-top-icon">
        <ArrowUp size={19} strokeWidth={1.8} />
      </span>
    </button>
  );
}

export default ScrollToTopButton;
