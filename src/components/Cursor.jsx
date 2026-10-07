import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine)"
    );

    // Don't run custom cursor on touch devices
    if (!mediaQuery.matches) {
      return;
    }

    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // Cancel previous frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }

      animationFrameRef.current =
        requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.setProperty(
              "--cursor-x",
              `${x}px`
            );

            cursorRef.current.style.setProperty(
              "--cursor-y",
              `${y}px`
            );
          }
        });

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
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

      if (interactiveElement) {
        setIsHovering(true);
      }
    };

    const handlePointerOut = (event) => {
      const interactiveElement =
        event.target.closest(
          "a, button, input, textarea, select, [role='button']"
        );

      if (
        interactiveElement &&
        !interactiveElement.contains(
          event.relatedTarget
        )
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
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
        "pointermove",
        handlePointerMove
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

      if (animationFrameRef.current) {
        cancelAnimationFrame(
          animationFrameRef.current
        );
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${
        isVisible ? "is-visible" : ""
      } ${
        isHovering ? "is-hovering" : ""
      } ${
        isClicking ? "is-clicking" : ""
      }`}
      aria-hidden="true"
    >
      <span className="cursor-dot" />
      <span className="cursor-ring" />
    </div>
  );
}

export default Cursor;