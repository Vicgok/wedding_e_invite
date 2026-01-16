import { motion } from "framer-motion";
import type { WeddingDetails } from "../types/wedding";

interface WeddingInviteDetailsProps {
  details: WeddingDetails;
}

export const WeddingInviteDetails = ({
  details,
}: WeddingInviteDetailsProps) => {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-y-auto scroll-smooth">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-6 py-12 sm:px-8 sm:py-16 text-center text-gray-800"
      >
        {/* Ornamental Header */}
        <motion.div
          variants={itemVariants}
          className="my-8 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-rose-300" />
          <div className="text-5xl text-rose-400 opacity-80">❦</div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-300 to-rose-300" />
        </motion.div>

        {/* Main Couple Names */}
        <motion.section
          variants={itemVariants}
          className="my-10 sm:my-12 relative"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 text-rose-300 opacity-50 text-2xl">
            ❦
          </div>
          <div className="absolute top-4 right-4 text-rose-300 opacity-50 text-2xl">
            ❦
          </div>
          <div className="absolute bottom-4 left-4 text-rose-300 opacity-50 text-2xl">
            ❦
          </div>
          <div className="absolute bottom-4 right-4 text-rose-300 opacity-50 text-2xl">
            ❦
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 sm:p-12 shadow-2xl border-2 border-rose-200/50 relative overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif leading-relaxed">
                <span className="block mb-5 text-rose-900 tracking-wide">
                  {details.groom.fullName}
                </span>

                <div className="flex items-center justify-center gap-3 my-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
                  <span className="text-4xl sm:text-5xl text-rose-400">♥</span>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
                </div>

                <span className="block mt-5 text-rose-900 tracking-wide">
                  {details.bride.fullName}
                </span>
              </h1>

              <div className="mt-8 text-sm sm:text-base text-gray-600 italic tracking-wide font-light">
                Always & Forever
              </div>
            </div>
          </div>
        </motion.section>

        {/* Parents Section */}
        <motion.section
          variants={itemVariants}
          className="my-12 sm:my-16 py-10 px-8 bg-gradient-to-br from-white/70 to-rose-50/50 backdrop-blur-md rounded-3xl border-2 border-rose-100/50 shadow-xl relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-rose-300 blur-2xl" />
            <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-purple-300 blur-2xl" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 sm:justify-around">
            <div className="flex-1">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">
                Son of
              </p>
              <p className="text-base sm:text-lg text-gray-700 font-serif leading-relaxed">
                {details.groom.father}
              </p>
              <p className="text-base sm:text-lg text-gray-700 font-serif">&</p>
              <p className="text-base sm:text-lg text-gray-700 font-serif leading-relaxed">
                {details.groom.mother}
              </p>
            </div>

            <div className="hidden sm:flex items-center justify-center">
              <div className="w-px h-24 bg-gray-200 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
                  <span className="text-2xl text-gold">♥</span>
                </div>
              </div>
            </div>

            <div className="sm:hidden flex justify-center my-2">
              <span className="text-2xl text-gold">♥</span>
            </div>

            <div className="flex-1">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">
                Daughter of
              </p>
              <p className="text-base sm:text-lg text-gray-700 font-serif leading-relaxed">
                {details.bride.father}
              </p>
              <p className="text-base sm:text-lg text-gray-700 font-serif">&</p>
              <p className="text-base sm:text-lg text-gray-700 font-serif leading-relaxed">
                {details.bride.mother}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Event Details */}
        <motion.section variants={itemVariants} className="my-12">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300" />
            <span className="text-sm uppercase tracking-widest text-rose-600 font-semibold">
              Event Details
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300" />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Date */}
            <div className="group flex items-start gap-4 p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border-2 border-pink-200/50 hover:border-pink-300 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                📅
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
                  Date
                </div>
                <div className="text-base sm:text-lg text-gray-800 font-medium leading-relaxed">
                  {formatDate(details.event.date)}
                </div>
              </div>
            </div>

            {/* Time */}
            {details.event.time && (
              <div className="group flex items-start gap-4 p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border-2 border-purple-200/50 hover:border-purple-300 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  🕐
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
                    Time
                  </div>
                  <div className="text-base sm:text-lg text-gray-800 font-medium">
                    {details.event.time}
                  </div>
                </div>
              </div>
            )}

            {/* Venue */}
            <div className="group flex items-start gap-4 p-6 sm:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border-2 border-blue-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                📍
              </div>
              <div className="flex-1 text-left">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
                  Venue
                </div>
                <div className="text-base sm:text-lg text-gray-800 font-serif font-medium mb-2">
                  {details.event.venue.name}
                </div>
                <div className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                  {details.event.venue.address}
                </div>
                {details.event.venue.mapLink && (
                  <a
                    href={details.event.venue.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors"
                  >
                    <span>🗺️ View on Map</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ornamental Footer */}
        <motion.div
          variants={itemVariants}
          className="my-12 mb-16 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-rose-300 to-rose-300" />
          <div className="text-5xl text-rose-400 opacity-80">❦</div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-rose-300 to-rose-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};
