import React from "react";
import { motion } from "framer-motion";

export default function Venue() {
  const place = "The Golden Elm Manor, St. Augustine, New York";
  const query = encodeURIComponent(place);

  return (
    <section
      id="details"
      className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-[#88708E]"
    >
      {/* HEADING */}
      <motion.div 
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest text-white font-bold"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          WEDDING DETAILS
        </motion.h2>
        <motion.p 
          className="mt-3 sm:mt-4 md:mt-6 max-w-md mx-auto text-sm sm:text-base md:text-lg text-white font-bold leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Ceremony & celebration at our favorite place
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* MAP */}
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-lg w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full"
          >
            <iframe
              title="Wedding Venue"
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              className="w-full h-64 sm:h-80 md:h-[320px] lg:h-[380px] xl:h-[420px] border-0"
              loading="lazy"
            />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm shadow-lg">
              Open in Google Maps
            </div>
          </a>
        </motion.div>

        {/* INFO */}
        <motion.div 
          className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 w-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-[#BAB0C8]/40 rounded-xl p-4 sm:p-5 md:p-6 lg:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-gray-800 font-bold leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              The Golden Elm Manor
            </motion.h3>
            <motion.p 
              className="mt-1 sm:mt-2 text-gray-800 font-bold text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              St. Augustine, New York
            </motion.p>

            <motion.p 
              className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-sm text-gray-800 font-bold leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Saturday, September 20, 2025 <br />
              Ceremony begins at <strong>4:00 PM</strong>
            </motion.p>

            <motion.div 
              className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 border border-gray-300 bg-white text-gray-800 font-bold text-xs sm:text-sm shadow-md hover:bg-gray-100 hover:text-gray-900 active:bg-white active:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-lg transition-all duration-200 flex-1 sm:flex-none text-center active:shadow-inner"
              >
                Get Directions
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=hotels+near+${query}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 border border-gray-300 bg-white text-gray-800 font-bold text-xs sm:text-sm shadow-md hover:bg-gray-100 hover:text-gray-900 active:bg-white active:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-lg transition-all duration-200 flex-1 sm:flex-none text-center active:shadow-inner"
              >
                Nearby Stays
              </a>
            </motion.div>
          </motion.div>

          {/* ROUTES */}
          <motion.div 
            className="bg-[#BAB0C8]/40 rounded-xl p-4 sm:p-5 md:p-6 lg:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.h4 
              className="text-base sm:text-lg md:text-lg lg:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Easy Routes
            </motion.h4>

            <motion.ul 
              className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-sm text-gray-800 font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li className="flex items-center">
                ✈️ <strong className="ml-1">By Air:</strong> Jacksonville International Airport (35 min drive)
              </li>
              <li className="flex items-center">
                🚆 <strong className="ml-1">By Train:</strong> Amtrak St. Augustine Station + taxi
              </li>
              <li className="flex items-center">
                🚗 <strong className="ml-1">By Road:</strong> Accessible via I-95
              </li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER NOTE */}
      <motion.div 
        className="mt-12 sm:mt-16 md:mt-20 text-center text-xs sm:text-sm md:text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-white font-bold max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          For travel help, email{" "}
          <a
            href="mailto:hello@jennyandjason.wed"
            className="text-[#ff7a6e] underline hover:text-[#ff6b5f] transition-colors"
          >
            hello@jennyandjason.wed
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}


