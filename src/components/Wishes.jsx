import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Wishes() {
  const [wishes, setWishes] = useState([
    { name: "Rohan", message: "Congratulations Mohan & Nayana! Wishing you a lifetime of love." },
    { name: "Anjali", message: "May your journey together be full of happiness and laughter!" },
    { name: "Vikram", message: "Cheers to the beautiful couple! Best wishes for a happy married life." },
    { name: "Priya", message: "Wishing you both endless love and joy on your special day." },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [wishes.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestName.trim() && guestMessage.trim()) {
      setWishes([...wishes, { name: guestName, message: guestMessage }]);
      setGuestName("");
      setGuestMessage("");
      setCurrentIndex(wishes.length);
    }
  };

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 bg-[#88708E]/50 text-center">
      {/* HEADING */}
      <motion.h2 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-8 sm:mb-12 md:mb-16 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Wishes for the Couple
      </motion.h2>

      {/* Slideshow */}
      <motion.div 
        className="relative max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-[#BAB0C8]/40 rounded-2xl shadow-xl h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {wishes.map((wish, idx) => (
          <motion.div
            key={idx}
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={idx === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl italic mb-4 sm:mb-6 leading-relaxed max-w-2xl"
              initial={{ y: 20 }}
              animate={idx === currentIndex ? { y: 0 } : { y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              "{wish.message}"
            </motion.p>
            <motion.span 
              className="text-yellow-300 font-bold text-sm sm:text-base md:text-lg"
              initial={{ scale: 0.9 }}
              animate={idx === currentIndex ? { scale: 1 } : { scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              - {wish.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation dots */}
      <motion.div 
        className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {wishes.map((_, idx) => (
          <motion.button
            key={idx}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-yellow-300 scale-125 shadow-lg" : "bg-gray-500 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>

      {/* Submission Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="mt-12 sm:mt-16 md:mt-20 max-w-2xl mx-auto flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          className="flex-1 px-4 sm:px-5 py-3 rounded-xl border-2 border-gray-600/50 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 text-gray-900 font-medium text-sm sm:text-base placeholder-gray-500 shadow-lg hover:shadow-xl transition-all duration-300"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="text"
          placeholder="Your Wish"
          value={guestMessage}
          onChange={(e) => setGuestMessage(e.target.value)}
          className="flex-2 px-4 sm:px-5 py-3 rounded-xl border-2 border-gray-600/50 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 text-gray-900 font-medium text-sm sm:text-base placeholder-gray-500 shadow-lg hover:shadow-xl transition-all duration-300"
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          className="px-6 sm:px-8 py-3 bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl active:shadow-md transition-all duration-300 font-playfair"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Wish
        </motion.button>
      </motion.form>
    </section>
  );
}
