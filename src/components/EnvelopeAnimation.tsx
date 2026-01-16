import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EnvelopeProps {
  children: React.ReactNode;
  onOpen?: () => void;
}

export const EnvelopeAnimation = ({ children, onOpen }: EnvelopeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setShowContent(true);
        onOpen?.();
      }, 600);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#faf7f5] overflow-hidden">
      <AnimatePresence mode="wait">
        {!showContent ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            {/* Envelope Card */}
            <div className="relative w-[500px] h-[320px] bg-gradient-to-br from-[#fdfaf8] to-[#f5efe8] rounded-sm shadow-2xl">
              {/* Subtle paper texture overlay */}
              <div
                className="absolute inset-0 rounded-sm opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Horizontal seam line across center */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/8 -translate-y-1/2" />

              {/* Wax Seal - Centered on seam line */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {/* Outer shadow ring */}
                <div className="absolute inset-0 rounded-full blur-md bg-black/10 scale-110" />

                {/* Wax seal circle */}
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#d6b8a6] via-[#e3c5b3] to-[#d6b8a6] shadow-lg flex items-center justify-center">
                  {/* Inner gradient for wax texture depth */}
                  <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-transparent to-black/5" />

                  {/* Subtle highlight for 3D effect */}
                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white/20 blur-sm" />

                  {/* Embossed initials */}
                  <div className="relative z-10 font-serif text-[#8b5e4a] text-3xl tracking-wider select-none">
                    <span
                      className="block text-center"
                      style={{
                        textShadow:
                          "1px 1px 2px rgba(0,0,0,0.15), inset 0 1px 1px rgba(255,255,255,0.2)",
                        fontFamily:
                          "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      V & S
                    </span>
                  </div>

                  {/* Wax edge texture - uneven edge illusion */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      boxShadow:
                        "inset 0 1px 3px rgba(0,0,0,0.1), inset 0 -1px 2px rgba(255,255,255,0.3)",
                    }}
                  />
                </div>
              </motion.div>

              {/* Subtle corner shadows for depth */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-black/5 to-transparent rounded-tl-sm" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-black/5 to-transparent rounded-tr-sm" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-black/5 to-transparent rounded-bl-sm" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-black/5 to-transparent rounded-br-sm" />
            </div>

            {/* Click instruction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-20 text-[#8b5e4a]/60 text-sm tracking-wide font-light"
            >
              Click the seal to open
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full overflow-auto"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
