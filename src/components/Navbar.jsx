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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#88708E]/95 backdrop-blur-md shadow-xl" 
        : "bg-[#88708E]/90 backdrop-blur-md shadow-lg"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo & Date */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.span 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-widest font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            J&J
          </motion.span>
          <span className="text-xs sm:text-sm md:text-base opacity-80 font-medium hidden sm:inline">
            June 23rd, 2025
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 text-sm lg:text-base xl:text-lg tracking-widest">
          <motion.a href="#home" className="hover:underline hover:text-yellow-300 transition-colors duration-300 py-1" whileHover={{ scale: 1.1, y: -2 }}>HOME</motion.a>
          <motion.a href="#story" className="hover:underline hover:text-yellow-300 transition-colors duration-300 py-1" whileHover={{ scale: 1.1, y: -2 }}>OUR STORY</motion.a>
          <motion.a href="#details" className="hover:underline hover:text-yellow-300 transition-colors duration-300 py-1" whileHover={{ scale: 1.1, y: -2 }}>DETAILS</motion.a>
          <motion.a href="#events" className="hover:underline hover:text-yellow-300 transition-colors duration-300 py-1" whileHover={{ scale: 1.1, y: -2 }}>EVENTS</motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 rounded-xl hover:bg-white/20 active:bg-white/30 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu - Fixed height and AnimatePresence for smooth exit */}
      <motion.div
        className="lg:hidden bg-[#88708E]/95 backdrop-blur-md border-t border-white/20 overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? "auto" : 0 
        }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut",
          height: { duration: 0.25 }
        }}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-6 sm:py-8 gap-3 sm:gap-5 text-base sm:text-lg tracking-widest max-h-[400px]">
          <motion.a 
            href="#home"
            className="py-3 px-2 hover:text-yellow-300 hover:underline transition-all duration-300 border-b border-white/10 rounded-lg hover:bg-white/10" 
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = 'auto'; // Re-enable scroll
            }}
          >
            HOME
          </motion.a>
          <motion.a 
            href="#story"
            className="py-3 px-2 hover:text-yellow-300 hover:underline transition-all duration-300 border-b border-white/10 rounded-lg hover:bg-white/10" 
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            OUR STORY
          </motion.a>
          <motion.a 
            href="#details"
            className="py-3 px-2 hover:text-yellow-300 hover:underline transition-all duration-300 border-b border-white/10 rounded-lg hover:bg-white/10" 
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            DETAILS
          </motion.a>
          <motion.a 
            href="#events"
            className="py-3 px-2 hover:text-yellow-300 hover:underline transition-all duration-300 rounded-lg hover:bg-white/10" 
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = 'auto';
            }}
          >
            EVENTS
          </motion.a>
        </nav>
      </motion.div>
    </header>
  );
}
