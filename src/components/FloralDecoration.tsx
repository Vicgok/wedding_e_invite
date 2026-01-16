import { motion } from "framer-motion";

interface FloralDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  isVisible: boolean;
}

const FloralDecoration = ({ position, isVisible }: FloralDecorationProps) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -rotate-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  const animationDelay = {
    "top-left": 0.8,
    "top-right": 1.0,
    "bottom-left": 1.2,
    "bottom-right": 1.4,
  };

  return (
    <motion.div
      className={`fixed ${positionClasses[position]} pointer-events-none z-0`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={
        isVisible
          ? {
              opacity: 0.6,
              scale: 1,
              transition: {
                delay: animationDelay[position],
                duration: 0.8,
                ease: "easeOut",
              },
            }
          : {
              opacity: 0,
              scale: 0.5,
            }
      }
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-40"
      >
        {/* Decorative floral/botanical element */}
        <g stroke="hsl(345 45% 30%)" strokeWidth="1" fill="none">
          {/* Main branch */}
          <path d="M10 10 Q 60 40 50 90 Q 45 120 70 150" strokeWidth="1.5" />

          {/* Leaves */}
          <ellipse
            cx="35"
            cy="35"
            rx="15"
            ry="8"
            transform="rotate(-30 35 35)"
          />
          <ellipse
            cx="55"
            cy="60"
            rx="18"
            ry="9"
            transform="rotate(20 55 60)"
          />
          <ellipse
            cx="45"
            cy="100"
            rx="16"
            ry="7"
            transform="rotate(-15 45 100)"
          />
          <ellipse
            cx="60"
            cy="130"
            rx="14"
            ry="6"
            transform="rotate(25 60 130)"
          />

          {/* Small berries/dots */}
          <circle cx="25" cy="50" r="3" fill="hsl(43 74% 49%)" stroke="none" />
          <circle
            cx="70"
            cy="80"
            r="2.5"
            fill="hsl(43 74% 49%)"
            stroke="none"
          />
          <circle cx="35" cy="120" r="2" fill="hsl(43 74% 49%)" stroke="none" />

          {/* Secondary branch */}
          <path d="M40 50 Q 80 30 100 60" strokeWidth="1" />
          <ellipse
            cx="85"
            cy="40"
            rx="12"
            ry="6"
            transform="rotate(-45 85 40)"
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default FloralDecoration;
