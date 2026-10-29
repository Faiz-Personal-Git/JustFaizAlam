
import { useEffect, useRef } from "react";
import "./Cursor.css";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointerQuery.matches || motionQuery.matches) {
      return;
    }

    const cursor = cursorRef.current;

    if (!cursor) return;

    const handlePointerMove = (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;

      if (!cursor.classList.contains("is-visible")) {
        cursor.classList.add("is-visible");
      }
    };

    const handlePointerLeave = () => {
      cursor.classList.remove("is-visible");
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    >
      <span className="cursor-ring" />
      <span className="cursor-dot" />
    </div>
  );
}

export default Cursor;
