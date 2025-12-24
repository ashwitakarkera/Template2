import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle =
    "font-medium tracking-widest bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent transition-all duration-300";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#88708E]/95 backdrop-blur-md shadow-xl"
          : "bg-[#88708E]/90 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl tracking-widest font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          N&M
        </motion.span>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-base xl:text-lg">
          <motion.a href="#home" className={navStyle} whileHover={{ scale: 1.1, y: -2 }}>
            HOME
          </motion.a>
          <motion.a href="#story" className={navStyle} whileHover={{ scale: 1.1, y: -2 }}>
            OUR STORY
          </motion.a>
          <motion.a href="#details" className={navStyle} whileHover={{ scale: 1.1, y: -2 }}>
            DETAILS
          </motion.a>
          <motion.a href="#events" className={navStyle} whileHover={{ scale: 1.1, y: -2 }}>
            EVENTS
          </motion.a>
          <motion.a href="#gallery" className={navStyle} whileHover={{ scale: 1.1, y: -2 }}>
            GALLERY
          </motion.a>
        </nav>

        {/* Mobile Button */}
        <motion.button
          className="lg:hidden p-2 rounded-xl hover:bg-white/20"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden bg-[#88708E]/95 backdrop-blur-md overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col px-6 py-6 gap-5 text-lg">
          {[
            ["HOME", "#home"],
            ["OUR STORY", "#story"],
            ["DETAILS", "#details"],
            ["EVENTS", "#events"],
            ["GALLERY", "#gallery"],
          ].map(([label, link]) => (
            <motion.a
              key={label}
              href={link}
              className={`${navStyle} py-2`}
              whileHover={{ x: 10 }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
