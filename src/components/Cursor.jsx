import { useEffect, useState } from "react";
import "./Cursor.css";

function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Don't run custom cursor on touch devices
    const mediaQuery = window.matchMedia(
      "(pointer: fine)"
    );

    if (!mediaQuery.matches) {
      return;
    }

    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handlePointerOver = (event) => {
      const interactiveElement =
        event.target.closest(
          "a, button, input, textarea, select, [role='button']"
        );

      setIsHovering(Boolean(interactiveElement));
    };

    const handlePointerOut = (event) => {
      const interactiveElement =
        event.target.closest(
          "a, button, input, textarea, select, [role='button']"
        );

      if (interactiveElement) {
        setIsHovering(false);
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    document.addEventListener(
      "mouseover",
      handlePointerOver
    );

    document.addEventListener(
      "mouseout",
      handlePointerOut
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      document.removeEventListener(
        "mouseover",
        handlePointerOver
      );

      document.removeEventListener(
        "mouseout",
        handlePointerOut
      );
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${
        isVisible ? "is-visible" : ""
      } ${isHovering ? "is-hovering" : ""} ${
        isClicking ? "is-clicking" : ""
      }`}
      style={{
        "--cursor-x": `${position.x}px`,
        "--cursor-y": `${position.y}px`,
      }}
      aria-hidden="true"
    >
      <span className="cursor-dot" />
      <span className="cursor-ring" />
    </div>
  );
}

export default Cursor;