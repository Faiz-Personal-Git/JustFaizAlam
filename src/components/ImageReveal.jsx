import { useEffect, useRef } from "react";
import "./ImageReveal.css";

function ImageReveal({
  src,
  alt = "",
  className = "",
  direction = "up",
  hover = true,
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("image-reveal-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`image-reveal image-reveal-${direction} ${
        hover ? "image-reveal-hover" : ""
      } ${className}`}
    >
      <div className="image-reveal-inner">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default ImageReveal;