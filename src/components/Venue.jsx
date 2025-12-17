import React from "react";
import { motion } from "framer-motion";
import bgImage3 from "../assets/images/background3.jfif";

export default function Venue() {
  const place = "The Golden Elm Manor, St. Augustine, New York";
  const query = encodeURIComponent(place);

  return (
    <section
      id="details"
      className="relative max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 
                 pt-20 sm:pt-24 md:pt-28 lg:pt-32 
                 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#88708E]/75"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADING */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* NAV-STYLE HEADING */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                     font-light tracking-[0.3em] mb-14
                     bg-gradient-to-r from-yellow-300 to-orange-400 
                     bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            WEDDING DETAILS
          </motion.h2>

          <motion.p
            className="mt-3 sm:mt-4 md:mt-6 max-w-md mx-auto 
                       text-sm sm:text-base md:text-lg 
                       text-white/90 tracking-wide"
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
              <div className="absolute bottom-3 left-3 right-3 bg-white px-4 py-2 rounded-full text-sm shadow-lg text-center font-semibold">
                Open in Google Maps
              </div>
            </a>
          </motion.div>

          {/* INFO */}
          <motion.div
            className="space-y-5 w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* BOX 1 */}
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="bg-[#BAB0C8]/40 rounded-xl p-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-[#FFD700] tracking-wide">
                The Golden Elm Manor
              </h3>

              <p className="mt-2 text-white font-medium">
                St. Augustine, New York
              </p>

              <p className="mt-4 text-sm text-white/90">
                Saturday, September 20, 2025 <br />
                Ceremony begins at <span className="text-[#FFD700] font-semibold">4:00 PM</span>
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FFD700] text-[#4a2f4f] font-semibold text-sm rounded-lg hover:opacity-90 transition"
                >
                  Get Directions
                </a>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=hotels+near+${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#FFD700] text-[#FFD700] font-semibold text-sm rounded-lg hover:bg-[#FFD700]/10 transition"
                >
                  Nearby Stays
                </a>
              </div>
            </motion.div>

            {/* BOX 2 */}
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="bg-[#BAB0C8]/40 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-[#FFD700] mb-4 tracking-wide">
                Easy Routes
              </h4>

              <ul className="space-y-3 text-sm text-white/90">
                <li>✈️ <span className="text-[#FFD700] font-medium">By Air:</span> Jacksonville International Airport</li>
                <li>🚆 <span className="text-[#FFD700] font-medium">By Train:</span> Amtrak + taxi</li>
                <li>🚗 <span className="text-[#FFD700] font-medium">By Road:</span> Accessible via I-95</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <motion.div className="mt-16 text-center text-sm">
          <p className="text-white/90 tracking-wide">
            For travel help, email{" "}
            <a
              href="mailto:hello@jennyandjason.wed"
              className="text-[#FFD700] font-semibold underline hover:opacity-80"
            >
              hello@jennyandjason.wed
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
