import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import mehendi from "../assets/images/mehendi.jfif";
import reception from "../assets/images/reception.jfif";
import sangeet from "../assets/images/sangeet.jfif";
import wedding from "../assets/images/wedding.jfif";

export default function EventTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);

  const events = [
    {
      name: "Mehendi",
      date: "12 Jan 2026",
      time: "11:00 AM",
      img: mehendi,
    },
    {
      name: "Sangeet",
      date: "13 Jan 2026",
      time: "06:00 PM",
      img: sangeet,
    },
    {
      name: "Wedding",
      date: "14 Jan 2026",
      time: "10:00 AM",
      img: wedding,
    },
    {
      name: "Reception",
      date: "15 Jan 2026",
      time: "07:00 PM",
      img: reception,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const eventVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="events"
      className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#88708E]/30 via-[#88708E]/50 to-[#88708E]/30 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.1)_0%,transparent_50%)]"></div>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-center text-white mb-16 lg:mb-20 tracking-widest relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Wedding Events
      </motion.h2>

      <motion.div
        className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* FULL YELLOW LINE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-full lg:h-1 lg:w-full bg-[#FFD700] rounded-full shadow-lg"></div>
        </div>

        {events.map((event, index) => (
          <motion.div
            key={event.name}
            className="relative flex flex-col items-center z-10 w-full lg:w-auto lg:flex-1 max-w-xs mx-auto"
            custom={index}
            variants={eventVariants}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            {/* EVENT CIRCLE */}
            <motion.div
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-[#FFD700] shadow-2xl overflow-hidden relative
              ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#c65a52] to-[#e36b5e]"
                  : "bg-gradient-to-r from-[#ff7a6e] to-[#ff9a85]"
              }`}
            >
              {/* IMAGE FILLS CIRCLE */}
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-full object-cover"
              />

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] to-transparent opacity-40 blur-xl animate-pulse"></div>
            </motion.div>

            {/* EVENT NAME */}
            <motion.span
              className={`mt-6 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-white text-center tracking-wide font-playfair px-4
              ${activeIndex === index ? "font-bold" : "font-semibold"}`}
            >
              {event.name}
            </motion.span>

            {/* DATE & TIME */}
            <motion.div
              onClick={() => setActiveIndex(index)}
              className={`mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-center tracking-wider uppercase px-4 py-2 rounded-full border border-white/20 cursor-pointer backdrop-blur-sm
              ${
                activeIndex === index
                  ? "bg-[#FFD700]/30 font-bold text-white"
                  : "bg-white/10 text-gray-200/90"
              }`}
            >
              <div>{event.date}</div>
              <div className="font-bold text-[#FFD700] mt-1">
                {event.time}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
