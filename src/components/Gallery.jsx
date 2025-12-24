import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import bgImage2 from "../assets/images/background2.jfif";

// gallery images
import g1 from "../assets/images/gallery/g1.jfif";
import g2 from "../assets/images/gallery/g2.jfif";
import g3 from "../assets/images/gallery/g3.jfif";
import g4 from "../assets/images/gallery/g4.jfif";
import g5 from "../assets/images/gallery/g5.jfif";
import g6 from "../assets/images/gallery/g6.jfif";

export default function Gallery() {
  const [open, setOpen] = useState(false);

  const images = [g1, g2, g3, g4, g5, g6];

  return (
    <section
      id="gallery"
      className="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-28 scroll-mt-28"
      style={{
        backgroundImage: `url(${bgImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#88708E]/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                     font-playfair tracking-[0.3em] mb-10
                     bg-gradient-to-r from-yellow-300 to-orange-400
                     bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          GALLERY
        </motion.h2>

        <p className="text-white text-lg max-w-3xl mx-auto mb-16 tracking-wide">
          A collection of beautiful moments captured with love, joy, and
          timeless elegance.
        </p>

        {/* IMAGE PREVIEW */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {images.slice(0, 3).map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl border-2 border-[#FFD700] shadow-2xl"
            >
              <img
                src={img}
                alt={`gallery-${i}`}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="px-10 py-4 rounded-full font-semibold tracking-widest
                     text-[#88708E] bg-gradient-to-r from-yellow-300 to-orange-400
                     shadow-xl"
        >
          VIEW GALLERY
        </motion.button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-6xl w-full bg-white rounded-3xl p-8 overflow-y-auto max-h-[90vh]">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-6 text-3xl text-[#88708E]"
              >
                ✕
              </button>

              <h3 className="text-3xl font-playfair text-center mb-10
                             bg-gradient-to-r from-yellow-500 to-orange-500
                             bg-clip-text text-transparent">
                Our Memories
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-xl shadow-xl"
                  >
                    <img
                      src={img}
                      alt={`full-gallery-${i}`}
                      className="w-full h-60 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
