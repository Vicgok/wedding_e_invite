import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface EnvelopeProps {
  isOpened: boolean;
  children: ReactNode;
  onReseal?: () => void;
}

const Envelope = ({ isOpened, children, onReseal }: EnvelopeProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Envelope back/body */}
      <motion.div
        className="relative bg-cream shadow-xl overflow-hidden"
        style={{
          boxShadow: "0 20px 50px -15px rgba(80, 40, 50, 0.2)",
          borderRadius: isOpened ? "0.5rem" : "2px",
        }}
        animate={
          isOpened
            ? {
                height: "auto",
                transition: { duration: 0.6, delay: 0.3 },
              }
            : {
                height: 320,
              }
        }
      >
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Side flaps - Left */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-2"
          style={{
            background:
              "linear-gradient(90deg, hsl(40 30% 85%) 0%, hsl(40 32% 88%) 100%)",
            boxShadow: "inset -1px 0 2px rgba(0,0,0,0.1)",
          }}
          animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
        />

        {/* Side flaps - Right */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-2"
          style={{
            background:
              "linear-gradient(270deg, hsl(40 30% 85%) 0%, hsl(40 32% 88%) 100%)",
            boxShadow: "inset 1px 0 2px rgba(0,0,0,0.1)",
          }}
          animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
        />

        {/* Bottom seal flap */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-3"
          style={{
            background:
              "linear-gradient(0deg, hsl(40 30% 84%) 0%, hsl(40 32% 88%) 100%)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08)",
          }}
          animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
        />

        {/* Top flap (triangle) */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-20 origin-top"
          style={{
            height: 160,
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            background:
              "linear-gradient(180deg, hsl(40 35% 92%) 0%, hsl(40 30% 88%) 100%)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
          animate={
            isOpened
              ? {
                  rotateX: 180,
                  y: -10,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }
              : {
                  rotateX: 0,
                  y: 0,
                  opacity: 1,
                }
          }
        >
          {/* Flap inner lining */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              background:
                "linear-gradient(180deg, rgba(184, 148, 100, 0.15) 0%, rgba(0,0,0,0.05) 100%)",
            }}
          />

          {/* Flap edge crease */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.08)",
            }}
          />
        </motion.div>

        {/* Envelope front decorative pattern */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={isOpened ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative diamond pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-10">
            <div className="absolute inset-0 border-2 border-burgundy rotate-45" />
            <div className="absolute inset-6 border border-burgundy rotate-45" />
          </div>

          {/* Address lines decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 space-y-2 opacity-5">
            <div className="w-32 h-0.5 bg-burgundy" />
            <div className="w-28 h-0.5 bg-burgundy" />
            <div className="w-36 h-0.5 bg-burgundy" />
          </div>
        </motion.div>

        {/* Inner content area */}
        <motion.div
          className="relative z-10 pt-8"
          animate={
            isOpened
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.4 },
                }
              : {
                  opacity: 0,
                  y: 50,
                }
          }
        >
          {children}

          {/* Reseal button */}
          {isOpened && onReseal && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="flex justify-center mt-8 pb-8"
            >
              <button
                onClick={onReseal}
                className="text-burgundy/60 hover:text-burgundy text-sm font-light tracking-wide underline decoration-1 underline-offset-4 transition-colors duration-200"
              >
                Close envelope
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Envelope shadow */}
      <motion.div
        className="absolute -bottom-4 left-8 right-8 h-8 bg-gradient-to-b from-black/10 to-transparent blur-md rounded-full"
        animate={
          isOpened ? { opacity: 0.5, scale: 1.1 } : { opacity: 0.3, scale: 1 }
        }
      />
    </div>
  );
};

export default Envelope;
