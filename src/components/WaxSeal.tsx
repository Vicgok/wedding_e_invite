import { motion } from "framer-motion";

interface WaxSealProps {
  onClick: () => void;
  isOpened: boolean;
}

const WaxSeal = ({ onClick, isOpened }: WaxSealProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-32 h-32 cursor-pointer focus:outline-none group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isOpened
          ? { scale: 0, opacity: 0, rotate: 180 }
          : { scale: 1, opacity: 1, rotate: 0 }
      }
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Wax seal base */}
      <div
        className="absolute inset-0 rounded-full shadow-2xl"
        style={{
          background:
            "linear-gradient(145deg, hsl(345 50% 38%), hsl(345 45% 30%), hsl(345 50% 24%))",
          boxShadow: `
            0 8px 32px rgba(80, 40, 50, 0.4),
            inset 0 2px 8px rgba(255, 255, 255, 0.15),
            inset 0 -4px 12px rgba(40, 20, 25, 0.3)
          `,
        }}
      />

      {/* Seal texture ring */}
      <div
        className="absolute inset-2 rounded-full opacity-30"
        style={{
          border: "2px solid rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Inner decorative circle */}
      <div
        className="absolute inset-4 rounded-full"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Monogram/Initials */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-sans text-3xl font-light tracking-widest"
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            textShadow: "0 2px 4px rgba(40, 20, 25, 0.4)",
          }}
        >
          V & S
        </span>
      </div>

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
        }}
      />
    </motion.button>
  );
};

export default WaxSeal;
