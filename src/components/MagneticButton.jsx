import { useRef } from "react";
import "./MagneticButton.css";

function MagneticButton({
  children,
  className = "",
  strength = 0.18,
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      event.clientX -
      (rect.left + rect.width / 2);

    const y =
      event.clientY -
      (rect.top + rect.height / 2);

    element.style.transform = `
      translate(
        ${x * strength}px,
        ${y * strength}px
      )
    `;
  };

  const handleMouseLeave = () => {
    const element = ref.current;

    if (!element) return;

    element.style.transform =
      "translate(0, 0)";
  };

  return (
    <Component
      ref={ref}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MagneticButton;