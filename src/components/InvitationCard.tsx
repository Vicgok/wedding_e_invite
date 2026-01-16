import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";
import { Heart, MapPin, Calendar, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import type { WeddingDetails } from "../types/wedding";

interface InvitationCardProps {
  isVisible: boolean;
  details: WeddingDetails;
}

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const InvitationCard = ({ isVisible, details }: InvitationCardProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +details.event.date - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [details.event.date]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const dividerVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <motion.div
      className="w-full max-w-lg mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Main Card */}
      <div
        className="relative bg-cream rounded-lg shadow-2xl overflow-hidden"
        style={{
          boxShadow: `
            0 25px 50px -12px rgba(80, 40, 50, 0.25),
            0 0 0 1px rgba(184, 148, 100, 0.2)
          `,
        }}
      >
        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Gold border accent */}
        <div className="absolute inset-0 rounded-lg border-2 border-gold/20 pointer-events-none" />

        {/* Content */}
        <div className="px-8 py-12 md:px-12 md:py-16 text-center relative">
          {/* Header with loop animation */}
          <motion.p
            variants={itemVariants}
            animate={{
              opacity: [0.7, 1, 0.7],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="text-sm tracking-[0.3em] uppercase text-burgundy/70 font-light mb-4"
          >
            Always & Forever
          </motion.p>

          {/* Animated sparkles */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-8 left-1/4 text-gold/40 text-xl"
          >
            ✨
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
            className="absolute top-8 right-1/4 text-gold/40 text-xl"
          >
            ✨
          </motion.div>

          {/* Names */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="font-sans text-2xl md:text-3xl text-burgundy font-extralight tracking-wider leading-tight">
              {details.groom.fullName}
            </h1>
            <div className="flex items-center justify-center gap-4 my-4">
              <div className="h-px w-12 bg-gold/50" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-5 h-5 text-gold fill-gold" />
              </motion.div>
              <div className="h-px w-12 bg-gold/50" />
            </div>
            <h1 className="font-sans text-2xl md:text-3xl text-burgundy font-extralight tracking-wider leading-tight whitespace-nowrap">
              {details.bride.fullName}
            </h1>
          </motion.div>

          {/* Invite text with shimmer effect */}
          <motion.p
            variants={itemVariants}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(92, 58, 66, 0.7) 0%, rgba(184, 148, 100, 0.9) 50%, rgba(92, 58, 66, 0.7) 100%)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-sm tracking-[0.2em] uppercase font-light mb-8"
          >
            We would be delighted to have you with us as we celebrate our
            wedding day.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xs tracking-[0.2em] uppercase text-burgundy/60 font-light mb-4">
              Counting down to our special day
            </p>
            <div className="flex justify-center gap-4">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(184, 148, 100, 0)",
                        "0 0 0 8px rgba(184, 148, 100, 0.1)",
                        "0 0 0 0 rgba(184, 148, 100, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-14 h-14 bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-lg flex items-center justify-center border border-gold/20"
                  >
                    <span className="text-2xl font-light text-burgundy">
                      {value.toString().padStart(2, "0")}
                    </span>
                  </motion.div>
                  <span className="text-xs uppercase tracking-wider text-burgundy/60 mt-2 font-light">
                    {unit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            variants={dividerVariants}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-gold" />
            <div className="w-2 h-2 rotate-45 border border-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold to-gold" />
          </motion.div>

          {/* Date */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-gold" />
              <p className="font-sans text-2xl text-charcoal font-light">
                {formatDate(details.event.date)}
              </p>
            </div>
            {details.event.time && (
              <div className="flex items-center justify-center gap-2 mt-2">
                <Clock className="w-4 h-4 text-gold" />
                <p className="text-muted-foreground font-light">
                  {details.event.time}
                </p>
              </div>
            )}
          </motion.div>

          {/* CTA - Wedding App */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-burgundy/60 font-light mb-4">
              Celebrate with us
            </p>
            <motion.a
              href="https://always-and-forever-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(184, 148, 100, 0.3)",
                  "0 8px 30px rgba(184, 148, 100, 0.5)",
                  "0 4px 20px rgba(184, 148, 100, 0.3)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-cream border-2 border-burgundy/40 text-burgundy rounded-lg font-light tracking-wider shadow-lg hover:shadow-xl hover:bg-white hover:border-burgundy/60 transition-all duration-300"
            >
              <span className="text-sm uppercase">Share Your Moments</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-gold text-xl"
              >
                📸
              </motion.span>
            </motion.a>
            <p className="text-xs text-muted-foreground font-light mt-3">
              Visit our wedding app to share photos and connect with guests
            </p>
          </motion.div>

          {/* Venue */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-gold" />
              <p className="font-sans text-xl text-charcoal font-light">
                {details.event.venue.name}
              </p>
            </div>
            <p className="text-muted-foreground font-light text-sm px-4">
              {details.event.venue.address}
            </p>
            {details.event.venue.mapLink && (
              <a
                href={details.event.venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-gold hover:text-gold/80 text-sm font-light transition-colors"
              >
                View Location →
              </a>
            )}
          </motion.div>

          {/* Parents Section */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-burgundy/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-burgundy/30" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-burgundy/30" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-burgundy/60 mb-2">
                  Son of
                </p>
                <p className="text-charcoal font-light">
                  {details.groom.father}
                </p>
                <p className="text-charcoal font-light">&</p>
                <p className="text-charcoal font-light">
                  {details.groom.mother}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-burgundy/60 mb-2">
                  Daughter of
                </p>
                <p className="text-charcoal font-light">
                  {details.bride.father}
                </p>
                <p className="text-charcoal font-light">&</p>
                <p className="text-charcoal font-light">
                  {details.bride.mother}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative corner flourishes with animation */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-lg"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
            className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/30 rounded-tr-lg"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/30 rounded-bl-lg"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
            className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default InvitationCard;
